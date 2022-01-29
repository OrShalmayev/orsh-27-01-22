import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
    constructor() { }
    citiesUrl(query:string):string {
        return `${environment.apiUrls.cities.autoComplete}${environment.apiKey}&q=${query}`;
    }
    currentConditionUrl(cityKey: string):string {
        return `${environment.apiUrls.weather.currentCondition}${cityKey}?apikey=${environment.apiKey}`;
    }
    forecastsUrl(cityKey: string):string {
        return `${environment.apiUrls.weather.forecasts}${cityKey}?apikey=${environment.apiKey}&metric=true`;
    }

    /**
     * Mock URl
     */
    mockCitiesUrl():string {
        return `${environment.apiUrls.cities.mockUrl}`;
    }
    mockCurrentConditionUrl():string {
        return `${environment.apiUrls.weather.mockCurrentCondition}`;
    }
    mockForecasts():string {
        return `${environment.apiUrls.weather.mockForecasts}`;
    }
}
