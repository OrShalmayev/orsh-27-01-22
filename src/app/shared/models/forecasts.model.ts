interface Headline {
    EffectiveDate: Date;
    EffectiveEpochDate: number;
    Severity: number;
    Text: string;
    Category: string;
    EndDate: Date;
    EndEpochDate: number;
    MobileLink: string;
    Link: string;
}

interface Minimum {
    Value: number;
    Unit: string;
    UnitType: number;
}

interface Maximum {
    Value: number;
    Unit: string;
    UnitType: number;
}

interface Temperature {
    Minimum: Minimum;
    Maximum: Maximum;
}

interface Day {
    Icon: number;
    IconPhrase: string;
    HasPrecipitation: boolean;
    PrecipitationType: string;
    PrecipitationIntensity: string;
}

interface Night {
    Icon: number;
    IconPhrase: string;
    HasPrecipitation: boolean;
    PrecipitationType: string;
    PrecipitationIntensity: string;
}

interface DailyForecast {
    Date: Date;
    EpochDate: number;
    Temperature: Temperature;
    Day: Day;
    Night: Night;
    Sources: string[];
    MobileLink: string;
    Link: string;
}

export interface ForecastResponse {
    Headline: Headline;
    DailyForecasts: DailyForecast[];
}

// {
//     "Headline": {
//       "EffectiveDate": "2022-01-28T07:00:00+02:00",
//       "EffectiveEpochDate": 1643346000,
//       "Severity": 3,
//       "Text": "Expect rainy weather Friday morning through Friday evening",
//       "Category": "rain",
//       "EndDate": "2022-01-29T01:00:00+02:00",
//       "EndEpochDate": 1643410800,
//       "MobileLink": "http://www.accuweather.com/en/il/haifa/213181/daily-weather-forecast/213181?unit=c&lang=en-us",
//       "Link": "http://www.accuweather.com/en/il/haifa/213181/daily-weather-forecast/213181?unit=c&lang=en-us"
//     },
//     "DailyForecasts": [
//       {
//         "Date": "2022-01-27T07:00:00+02:00",
//         "EpochDate": 1643259600,
//         "Temperature": {
//           "Minimum": {
//             "Value": 10.9,
//             "Unit": "C",
//             "UnitType": 17
//           },
//           "Maximum": {
//             "Value": 13.8,
//             "Unit": "C",
//             "UnitType": 17
//           }
//         },
//         "Day": {
//           "Icon": 14,
//           "IconPhrase": "Partly sunny w/ showers",
//           "HasPrecipitation": true,
//           "PrecipitationType": "Rain",
//           "PrecipitationIntensity": "Light"
//         },
//         "Night": {
//           "Icon": 12,
//           "IconPhrase": "Showers",
//           "HasPrecipitation": true,
//           "PrecipitationType": "Rain",
//           "PrecipitationIntensity": "Moderate"
//         },
//         "Sources": [
//           "AccuWeather"
//         ],
//         "MobileLink": "http://www.accuweather.com/en/il/haifa/213181/daily-weather-forecast/213181?day=1&unit=c&lang=en-us",
//         "Link": "http://www.accuweather.com/en/il/haifa/213181/daily-weather-forecast/213181?day=1&unit=c&lang=en-us"
//       },
//       {
//         "Date": "2022-01-28T07:00:00+02:00",
//         "EpochDate": 1643346000,
//         "Temperature": {
//           "Minimum": {
//             "Value": 10.6,
//             "Unit": "C",
//             "UnitType": 17
//           },
//           "Maximum": {
//             "Value": 14.5,
//             "Unit": "C",
//             "UnitType": 17
//           }
//         },
//         "Day": {
//           "Icon": 18,
//           "IconPhrase": "Rain",
//           "HasPrecipitation": true,
//           "PrecipitationType": "Rain",
//           "PrecipitationIntensity": "Light"
//         },
//         "Night": {
//           "Icon": 39,
//           "IconPhrase": "Partly cloudy w/ showers",
//           "HasPrecipitation": true,
//           "PrecipitationType": "Rain",
//           "PrecipitationIntensity": "Moderate"
//         },
//         "Sources": [
//           "AccuWeather"
//         ],
//         "MobileLink": "http://www.accuweather.com/en/il/haifa/213181/daily-weather-forecast/213181?day=2&unit=c&lang=en-us",
//         "Link": "http://www.accuweather.com/en/il/haifa/213181/daily-weather-forecast/213181?day=2&unit=c&lang=en-us"
//       },
//       {
//         "Date": "2022-01-29T07:00:00+02:00",
//         "EpochDate": 1643432400,
//         "Temperature": {
//           "Minimum": {
//             "Value": 9.1,
//             "Unit": "C",
//             "UnitType": 17
//           },
//           "Maximum": {
//             "Value": 14.3,
//             "Unit": "C",
//             "UnitType": 17
//           }
//         },
//         "Day": {
//           "Icon": 14,
//           "IconPhrase": "Partly sunny w/ showers",
//           "HasPrecipitation": true,
//           "PrecipitationType": "Rain",
//           "PrecipitationIntensity": "Light"
//         },
//         "Night": {
//           "Icon": 35,
//           "IconPhrase": "Partly cloudy",
//           "HasPrecipitation": false
//         },
//         "Sources": [
//           "AccuWeather"
//         ],
//         "MobileLink": "http://www.accuweather.com/en/il/haifa/213181/daily-weather-forecast/213181?day=3&unit=c&lang=en-us",
//         "Link": "http://www.accuweather.com/en/il/haifa/213181/daily-weather-forecast/213181?day=3&unit=c&lang=en-us"
//       },
//       {
//         "Date": "2022-01-30T07:00:00+02:00",
//         "EpochDate": 1643518800,
//         "Temperature": {
//           "Minimum": {
//             "Value": 9.5,
//             "Unit": "C",
//             "UnitType": 17
//           },
//           "Maximum": {
//             "Value": 16,
//             "Unit": "C",
//             "UnitType": 17
//           }
//         },
//         "Day": {
//           "Icon": 3,
//           "IconPhrase": "Partly sunny",
//           "HasPrecipitation": false
//         },
//         "Night": {
//           "Icon": 35,
//           "IconPhrase": "Partly cloudy",
//           "HasPrecipitation": false
//         },
//         "Sources": [
//           "AccuWeather"
//         ],
//         "MobileLink": "http://www.accuweather.com/en/il/haifa/213181/daily-weather-forecast/213181?day=4&unit=c&lang=en-us",
//         "Link": "http://www.accuweather.com/en/il/haifa/213181/daily-weather-forecast/213181?day=4&unit=c&lang=en-us"
//       },
//       {
//         "Date": "2022-01-31T07:00:00+02:00",
//         "EpochDate": 1643605200,
//         "Temperature": {
//           "Minimum": {
//             "Value": 11.9,
//             "Unit": "C",
//             "UnitType": 17
//           },
//           "Maximum": {
//             "Value": 15.5,
//             "Unit": "C",
//             "UnitType": 17
//           }
//         },
//         "Day": {
//           "Icon": 14,
//           "IconPhrase": "Partly sunny w/ showers",
//           "HasPrecipitation": true,
//           "PrecipitationType": "Rain",
//           "PrecipitationIntensity": "Light"
//         },
//         "Night": {
//           "Icon": 12,
//           "IconPhrase": "Showers",
//           "HasPrecipitation": true,
//           "PrecipitationType": "Rain",
//           "PrecipitationIntensity": "Light"
//         },
//         "Sources": [
//           "AccuWeather"
//         ],
//         "MobileLink": "http://www.accuweather.com/en/il/haifa/213181/daily-weather-forecast/213181?day=5&unit=c&lang=en-us",
//         "Link": "http://www.accuweather.com/en/il/haifa/213181/daily-weather-forecast/213181?day=5&unit=c&lang=en-us"
//       }
//     ]
//   }