export interface CityWeather {
    city: City;
    weather: Weather;
}

export interface CityDailyWeather {
    city: City;
    current: Weather;
    daily: DailyWeather[];
}

export interface City {
    id: string;
    name: string;
    country: string;
    timeZone: string;
}

export interface Weather {
    description: string;
    icon: string;
    temp?: number;
    minTemp?:number,
    maxTemp?:number
}

export interface DailyWeather {
    date: number;
    weather: Weather;
}

export interface Coord {
    lon: number;
    lat: number;
}

export interface Wind {
    speed: number;
    deg: number;
}
