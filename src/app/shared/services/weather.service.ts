import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest, forkJoin, iif, Observable, of, Subject } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { CitiesResponse } from '../models/city.model';
import { CurrentConditionResponse } from '../models/current-condition.model';
import { ForecastResponse } from '../models/forecasts.model';
import { CityDailyWeather, CityWeather } from '../models/weather.model';
import { responseToCityDailyWeather, responseToCityWeather } from '../utils/response.util';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
    private serviceDestroyed$ = new Subject<void>();

    constructor(
        private http: HttpClient,
        private apiService: ApiService
    ) { }

    getCityWeather(cityResponse: CitiesResponse): Observable<CityWeather> {
        return forkJoin({
            city: of(cityResponse),
            currentCondition:  iif(()=> (environment.production), this.getCurrentConditions(cityResponse), this.getMockCurrentConditions(cityResponse) )
                .pipe(
                    catchError((err, caught$) => {
                        debugger;
                        return caught$;
                    }),
                )
        }) 
        .pipe(
            map(({city, currentCondition}) => responseToCityWeather({city, currentCondition}))
        );
    }
    getCityForecast(cityWeather:CityWeather): Observable<CityDailyWeather> {
        return iif(()=> (environment.production) , this.getWeatherForecast(cityWeather) , this.getMockForecast(cityWeather))
            .pipe(
                map(forecast => {
                    return responseToCityDailyWeather({cityWeather, forecast});
                }),
            )
    }

    /**
     * Current conditions
     * @param cityResponse 
     * @returns 
     */
    private getCurrentConditions(cityResponse: CitiesResponse): Observable<CurrentConditionResponse> {
        return this.http.get<CurrentConditionResponse[]>(this.apiService.currentConditionUrl(cityResponse.Key))
            .pipe(map(res => res[0]))
    }
    private getMockCurrentConditions(cityResponse: CitiesResponse): Observable<CurrentConditionResponse> {
        return this.http.get<CurrentConditionResponse[]>(this.apiService.mockCurrentConditionUrl())
            .pipe(
                catchError((err:HttpErrorResponse, caught$) => {
                    return caught$;
                }),
                map(mockData => {
                    return mockData.filter( m => m.Link.includes(cityResponse.Key))[0];
                })
            )
    }

    /**
     * Forecast
     * @param cityWeather 
     * @returns 
     */
    private getWeatherForecast(cityWeather: CityWeather): Observable<ForecastResponse> {
        return this.http.get<ForecastResponse>(this.apiService.forecastsUrl(cityWeather.city.id))
    }
    private getMockForecast(cityWeather: CityWeather): Observable<ForecastResponse> {
        return this.http.get<ForecastResponse[]>(this.apiService.mockForecasts())
        .pipe(
            catchError((err:HttpErrorResponse, caught$) => {
                return caught$;
            }),
            map(mockData => {
                return mockData.filter( m => m.Headline.Link.includes(cityWeather.city.id))[0];
            })
        )
    }
    ngOnDestroy(): void {
        this.serviceDestroyed$.next();
        this.serviceDestroyed$.complete();
    }
}
