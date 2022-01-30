export const environment = {
    production: true,
    apiKey: 'aUfuIOFA5RsY6wC0ODOAVY3FtbVAWKWm',
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
          byGeolocation: `http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?q=`,
      }
    }
};
