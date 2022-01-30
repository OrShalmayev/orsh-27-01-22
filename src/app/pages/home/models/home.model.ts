import { CityDailyWeather, CityWeather } from "src/app/shared/models/weather.model";

/**
 * Data
 */
export const homeStoreName: "home" = "home";
export const defaultCityToLoad: "Tel Aviv" = "Tel Aviv";
/**
 * Interfaces
 */
export interface HomeState {
    entity: CityWeather | any;
    forecast: CityDailyWeather | any;
    geoLocationWeather: CityWeather | any;
    loading: boolean;
    error: boolean;
}
/**
 * Enums
 */
/**
 * Types
 */