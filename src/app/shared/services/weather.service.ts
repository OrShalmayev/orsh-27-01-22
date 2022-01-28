import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest, forkJoin, Observable, of, Subject } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
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
            currentCondition: this.getCurrentConditions(cityResponse)
        }) 
        .pipe(
            map(({city, currentCondition}) => responseToCityWeather({city, currentCondition}))
        );
    }
    getCityForecast(cityWeather:CityWeather): Observable<CityDailyWeather> {
        return this.getWeatherForecast(cityWeather)
            .pipe(
                map(forecast => {
                    return responseToCityDailyWeather({cityWeather, forecast});
                }),
            )
    }
    private getCurrentConditions(cityResponse: CitiesResponse): Observable<CurrentConditionResponse> {
        return this.http.get<CurrentConditionResponse[]>(this.apiService.currentConditionUrl(cityResponse.Key))
            .pipe(map(res => res[0]))
    }
    private getWeatherForecast(cityWeather: CityWeather): Observable<ForecastResponse> {
        return this.http.get<ForecastResponse>(this.apiService.forecastsUrl(cityWeather.city.id))
    }
    ngOnDestroy(): void {
        this.serviceDestroyed$.next();
        this.serviceDestroyed$.complete();
    }
}
