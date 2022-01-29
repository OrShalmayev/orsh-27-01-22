import { createReducer, Action, on } from '@ngrx/store'
import { HomeState } from '../models';

import * as fromHomeActions from './home.actions';

export const homeInitialState: HomeState = {
  entity: undefined,
  forecast: undefined,
  loading: false,
  error: false,
}

const reducer = createReducer(
  homeInitialState,
  on(fromHomeActions.clearHomeState, () => homeInitialState),
  on(
    fromHomeActions.loadCurrentWeather,
    state => ({
        ...state,
        loading: true,
        error: false,
    }),
  ),
  on(fromHomeActions.loadCurrentWeatherSuccess, (state, { entity }) => ({
    ...state,
    entity,
    loading: false,
  })),
  on(fromHomeActions.loadCurrentWeatherFailed, state => ({
    ...state,
    loading: false,
    error: true,
  })),
  on(fromHomeActions.loadCurrentWeatherByGeo, (state) => ({
    ...state,
    loading: true,
    error: false,
  })),
  on(fromHomeActions.loadCurrentWeatherByGeoSuccess, (state, {entity}) => ({
    ...state,
    entity,
    loading: false,
    error: false,
  })),
  on(fromHomeActions.loadCurrentWeatherByGeoFailed, (state) => ({
    ...state,
    loading: false,
    error: true,
  })),
  on(fromHomeActions.loadWeatherForecast, state => ({
    ...state,
    loading: true,
    error: false,
  })),
  on(fromHomeActions.loadWeatherForecastSuccess, (state, {forecast}) => ({
    ...state,
    forecast,
    loading: false,
    error: false,
  })),
  on(fromHomeActions.loadWeatherForecastFailed, state => ({
    ...state,
    loading: false,
    error: true,
  }))
);

export function homeReducer(state: HomeState | undefined, action: Action): HomeState {
    return reducer(state, action);
}
