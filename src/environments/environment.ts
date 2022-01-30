// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiKey: 'Reui7qqMIm5TAcr6rKHwfsVNitancRs9',
  apiUrls: {
  apiBaseUrl: "http://dataservice.accuweather.com/v1/",
    cities: {
        mockUrl: "assets/db/cities.json",
        autoComplete: "http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=",
    },
    weather: {
        currentCondition: `http://dataservice.accuweather.com/currentconditions/v1/`,
        mockCurrentCondition: "assets/db/current-condition.json",
        forecasts: `http://dataservice.accuweather.com/forecasts/v1/daily/5day/`,
        mockForecasts: "assets/db/forecast-5-day.json",
        byGeolocation: `http://dataservice.accuweather.com/locations/v1/cities/geoposition/search`,
    }
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
