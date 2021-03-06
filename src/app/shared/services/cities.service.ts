import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, iif, Observable } from 'rxjs';
import { catchError, map, toArray } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { CitiesResponse } from '../models/city.model';
import { ApiService } from './api.service';


@Injectable({
  providedIn: 'root'
})
export class CitiesService {
    constructor(
        private http: HttpClient,
        private apiService: ApiService
    ) { }
    getCities(query: string): Observable<CitiesResponse[]> {
        // return this.getMockCities(query);
        return iif(() => (environment.production), this.getCitiesFromApi(query), this.getMockCities(query));
    }
    getCitiesByGeo(data: {latitude: number, longitude: number}): Observable<CitiesResponse[]> { 
        const url = this.apiService.currentConditionByGeoUrl(data);
        return this.http.get<CitiesResponse>(url)
        .pipe(
            catchError((err:HttpErrorResponse, caught$) => {
                return EMPTY;
            }),
            toArray(),
            map(cities => {
                return cities;
            }),
        );
    }
    private getCitiesFromApi(query: string){
        return this.http.get<CitiesResponse[]>(this.apiService.citiesUrl(query));
    }
    private getMockCities(query: string): Observable<CitiesResponse[]> {
        return this.http.get<CitiesResponse[]>(this.apiService.mockCitiesUrl())
            .pipe(
                catchError((err:HttpErrorResponse, caught$) => {
                    return caught$;
                }),
                map(cities => {
                    return cities.filter(city => city.LocalizedName.toLowerCase().indexOf(query.toLowerCase()) > -1);
                })
            );
    }
}
