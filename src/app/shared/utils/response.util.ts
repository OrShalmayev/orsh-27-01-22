import {
  CitiesResponse
} from "../models/city.model"
import {
  CurrentConditionResponse
} from "../models/current-condition.model"
import {
  ForecastResponse
} from "../models/forecasts.model"
import {
  CityDailyWeather,
  CityWeather
} from "../models/weather.model"

export interface IResponseToCityWeather {
    city: CitiesResponse,
    currentCondition: CurrentConditionResponse
}
export interface IResponseToCityDailyWeather {
    cityWeather: CityWeather,
    forecast: ForecastResponse
}

export function responseToCityWeather(data: IResponseToCityWeather): CityWeather {
  const {
    city,
    currentCondition
  } = data;
  return {
    city: {
      id: city?.Key,
      name: city?.LocalizedName,
      country: city?.Country?.LocalizedName,
      timeZone: city?.TimeZone?.Code,
    },
    weather: {
      description: currentCondition?.WeatherText,
      icon: currentCondition?.WeatherIcon,
      temp: currentCondition?.Temperature?.Metric?.Value,
    },
  }
}

export function responseToCityDailyWeather(data: IResponseToCityDailyWeather): CityDailyWeather {
  const {
    cityWeather,
    forecast
  } = data;

  return {
    city: {
        ...cityWeather.city
    },
    current: {
        ...cityWeather.weather
    },
    daily: forecast.DailyForecasts.map(d => ({
        date: d?.EpochDate,
        weather: {
            description: d?.Day?.IconPhrase,
            icon: d?.Day?.Icon,
            minTemp: d?.Temperature?.Minimum?.Value,
            maxTemp: d?.Temperature?.Maximum?.Value,
        }
    })),
  }
}
