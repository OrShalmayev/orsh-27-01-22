import { Injectable } from "@angular/core";

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError, switchMap, first } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import { WeatherService } from 'src/app/shared/services/weather.service';
import * as fromHomeActions from './home.actions';
import { CityWeather } from "src/app/shared/models/weather.model";
import { CitiesService } from "src/app/shared/services/cities.service";

@Injectable()
export class HomeEffects {

    constructor(
        private actions$: Actions,
        private store: Store,
        private weatherService: WeatherService,
        private cityService: CitiesService
    ) {}

    loadCurrentWeather$ = createEffect(() => this.actions$
        .pipe(
            ofType(
                fromHomeActions.loadCurrentWeather,
            ),
            switchMap(({query})=>{
                return this.cityService.getCities(query).pipe(map(cities=>cities[0]));
            }),
            switchMap((city) => this.weatherService.getCityWeather(city)),
            catchError((err, caught$) => {
                this.store.dispatch(fromHomeActions.loadCurrentWeatherFailed());
                return caught$;
            }),
            map((entity: CityWeather) => fromHomeActions.loadCurrentWeatherSuccess({ entity })),
        ),
    );

    loadCurrentWeatherByGeo$ = createEffect(() => this.actions$
        .pipe(
            ofType(
                fromHomeActions.loadCurrentWeatherByGeo
            ),
            switchMap(({latitude, longitude})=>{
                return this.cityService.getCitiesByGeo({latitude, longitude}).pipe(map(cities=>cities[0]));
            }),
            switchMap((city) => this.weatherService.getCityWeather(city)),
            catchError((err, caught$) => {
                this.store.dispatch(fromHomeActions.loadCurrentWeatherByGeoFailed());
                return caught$;
            }),
            map((entity: CityWeather) => fromHomeActions.loadCurrentWeatherByGeoSuccess({ entity })),
        ),
    );

    loadForecast$ = createEffect(() => this.actions$
        .pipe(
            ofType(fromHomeActions.loadWeatherForecast),
            switchMap(({cityWeather})=>{
                return this.weatherService.getCityForecast(cityWeather);
            }),
            catchError((err, caught$) => {
                this.store.dispatch(fromHomeActions.loadWeatherForecastFailed());
                return caught$;
            }),
            map((forecast)=> {
                return fromHomeActions.loadWeatherForecastSuccess({forecast});
            })
        ),
    );
}
