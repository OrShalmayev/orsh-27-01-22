import { createFeatureSelector, createSelector } from '@ngrx/store';
import { HomeState } from './home.reducer';

export const selectHomeState = createFeatureSelector('home');

export const selectCurrentWeather = createSelector(
    //@ts-ignore
    selectHomeState,
    (homeState: HomeState) => homeState.entity,
);
    
export const selectCurrentWeatherLoading = createSelector(
    //@ts-ignore
    selectHomeState,
    (homeState: HomeState) => homeState.loading,
);
    
export const selectCurrentWeatherError = createSelector(
    //@ts-ignore
    selectHomeState,
    (homeState: HomeState) => homeState.error,
);
export const selectForecastWeather = createSelector(
    //@ts-ignore
    selectHomeState,
    (homeState: HomeState) => homeState.forecast,
);
