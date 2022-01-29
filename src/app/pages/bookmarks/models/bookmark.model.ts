import { CityWeather, Weather } from "src/app/shared/models/weather.model";


/**
 * Data
 */
export const bookmarkStoreName: "bookmarks" = "bookmarks";
export const Bookmark : IBookmark = {
    id: "",
    name: "",
    country: "",
    weather: <Weather>{},
}
export const BookmarkInitialState: IBookmarkState = {
    list: [],
}
 /**
  * Interfaces
  */
export interface IBookmarkState {
    list: IBookmark[];
}
export interface IBookmark {
    id: string;
    name: string;
    country: string;
    weather: Weather;
}
 /**
  * Enums
  */
 /**
  * Types
  */