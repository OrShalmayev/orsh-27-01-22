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