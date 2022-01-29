import { createAction, props } from '@ngrx/store';
import { CityDailyWeather, CityWeather } from 'src/app/shared/models/index.models';
import { IBookmark } from '../../bookmarks/models';

export const loadCurrentWeather = createAction(
    '[Home] Load Current Weather',
    props<{ query: string }>(),
);

export const loadCurrentWeatherSuccess = createAction(
    '[Weather API] Load Current Weather Success',
    props<{ entity: CityWeather }>(),
);

export const loadCurrentWeatherFailed = createAction(
    '[Weather API] Load Current Weather Failed',
);

// current weather by location
export const loadCurrentWeatherByGeo = createAction(
    '[Home] Load Current Weather By Geolocation API',
    props<{ latitude: number, longitude: number }>(),
);

export const loadCurrentWeatherByGeoSuccess = createAction(
    '[Weather API] Load Current Weather By Geolocation API Success',
    props<{ entity: CityWeather }>(),
);

export const loadCurrentWeatherByGeoFailed = createAction(
    '[Weather API] Load Current Weather By Geolocation API Failed',
);

// forecast
export const loadWeatherForecast = createAction(
    '[Weather API] Load Weather Forecast',
    props<{ cityWeather: CityWeather }>(),
);
export const loadWeatherForecastSuccess = createAction(
    '[Weather API] Load Weather Forecast Success',
    props<{ forecast: CityDailyWeather }>(),
);
export const loadWeatherForecastFailed = createAction(
    '[Weather API] Load Weather Forecast Failed',
);
export const toggleBookmark = createAction(
  '[Home] Toggle Bookmark',
  props<{ entity: IBookmark }>(),
);

export const clearHomeState = createAction('[Home] Clear Home State');