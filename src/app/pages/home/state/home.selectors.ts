import { createFeatureSelector, createSelector } from '@ngrx/store';
import { HomeState, homeStoreName } from '../models';

export const selectHomeState = createFeatureSelector<HomeState>(homeStoreName);

export const selectCurrentWeather = createSelector(
    selectHomeState,
    (homeState: HomeState) => homeState.entity,
);
export const selectCurrentWeatherLoading = createSelector(
    selectHomeState,
    (homeState: HomeState) => homeState.loading,
);
export const selectCurrentWeatherError = createSelector(
    selectHomeState,
    (homeState: HomeState) => homeState.error,
);
export const selectForecastWeather = createSelector(
    selectHomeState,
    (homeState: HomeState) => homeState.forecast,
);
export const selectGeolocationWeather = createSelector(
    selectHomeState,
    (homeState: HomeState) => homeState.geoLocationWeather,
);
