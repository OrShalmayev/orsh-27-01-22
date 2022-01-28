
interface Metric {
    Value: number;
    Unit: string;
    UnitType: number;
}

interface Imperial {
    Value: number;
    Unit: string;
    UnitType: number;
}

interface Temperature {
    Metric: Metric;
    Imperial: Imperial;
}

export interface CurrentConditionResponse {
    LocalObservationDateTime: Date;
    EpochTime: number;
    WeatherText: string;
    WeatherIcon: number;
    HasPrecipitation: boolean;
    PrecipitationType?: any;
    IsDayTime: boolean;
    Temperature: Temperature;
    MobileLink: string;
    Link: string;
}

// [
//     {
//       "LocalObservationDateTime": "2022-01-27T20:22:00+02:00",
//       "EpochTime": 1643307720,
//       "WeatherText": "Partly cloudy",
//       "WeatherIcon": 35,
//       "HasPrecipitation": false,
//       "PrecipitationType": null,
//       "IsDayTime": false,
//       "Temperature": {
//         "Metric": {
//           "Value": 12.8,
//           "Unit": "C",
//           "UnitType": 17
//         },
//         "Imperial": {
//           "Value": 55,
//           "Unit": "F",
//           "UnitType": 18
//         }
//       },
//       "MobileLink": "http://www.accuweather.com/en/il/haifa/213181/current-weather/213181?lang=en-us",
//       "Link": "http://www.accuweather.com/en/il/haifa/213181/current-weather/213181?lang=en-us"
//     }
//   ]