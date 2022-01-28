interface Region {
    ID: string;
    LocalizedName: string;
    EnglishName: string;
}

interface Country {
    ID: string;
    LocalizedName: string;
    EnglishName: string;
}

interface AdministrativeArea {
    ID: string;
    LocalizedName: string;
    EnglishName: string;
    Level: number;
    LocalizedType: string;
    EnglishType: string;
    CountryID: string;
}

interface TimeZone {
    Code: string;
    Name: string;
    GmtOffset: number;
    IsDaylightSaving: boolean;
    NextOffsetChange: Date;
}

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

interface Elevation {
    Metric: Metric;
    Imperial: Imperial;
}

interface GeoPosition {
    Latitude: number;
    Longitude: number;
    Elevation: Elevation;
}

export interface CitiesResponse {
    Version: number;
    Key: string;
    Type: string;
    Rank: number;
    LocalizedName: string;
    EnglishName: string;
    PrimaryPostalCode: string;
    Region: Region;
    Country: Country;
    AdministrativeArea: AdministrativeArea;
    TimeZone: TimeZone;
    GeoPosition: GeoPosition;
    IsAlias: boolean;
    SupplementalAdminAreas: any[];
    DataSets: string[];
}

// [
//     {
//       "Version": 1,
//       "Key": "213181",
//       "Type": "City",
//       "Rank": 31,
//       "LocalizedName": "Haifa",
//       "EnglishName": "Haifa",
//       "PrimaryPostalCode": "",
//       "Region": {
//         "ID": "MEA",
//         "LocalizedName": "Middle East",
//         "EnglishName": "Middle East"
//       },
//       "Country": {
//         "ID": "IL",
//         "LocalizedName": "Israel",
//         "EnglishName": "Israel"
//       },
//       "AdministrativeArea": {
//         "ID": "HA",
//         "LocalizedName": "Haifa",
//         "EnglishName": "Haifa",
//         "Level": 1,
//         "LocalizedType": "District",
//         "EnglishType": "District",
//         "CountryID": "IL"
//       },
//       "TimeZone": {
//         "Code": "IST",
//         "Name": "Asia/Jerusalem",
//         "GmtOffset": 2,
//         "IsDaylightSaving": false,
//         "NextOffsetChange": "2022-03-25T00:00:00Z"
//       },
//       "GeoPosition": {
//         "Latitude": 32.812,
//         "Longitude": 34.999,
//         "Elevation": {
//           "Metric": {
//             "Value": 101,
//             "Unit": "m",
//             "UnitType": 5
//           },
//           "Imperial": {
//             "Value": 331,
//             "Unit": "ft",
//             "UnitType": 0
//           }
//         }
//       },
//       "IsAlias": false,
//       "SupplementalAdminAreas": [],
//       "DataSets": [
//         "AirQualityCurrentConditions",
//         "AirQualityForecasts",
//         "Alerts",
//         "DailyPollenForecast",
//         "ForecastConfidence",
//         "FutureRadar",
//         "MinuteCast"
//       ]
//     }
//   ]