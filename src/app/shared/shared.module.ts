import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoaderComponent } from './components/loader/loader.component';
import { DetailedWeatherComponent } from './components/detailed-weather/detailed-weather.component';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatRippleModule } from '@angular/material/core';
import { CityEffect, cityReducer, cityStoreName } from './state';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ErrorComponent } from './components/error/error.component';

const MaterialModules = [
    MatFormFieldModule,
    MatRippleModule,
    MatFormFieldModule,
    MatAutocompleteModule
]
const declarations:any[] = [
    LoaderComponent,
    DetailedWeatherComponent,
    ErrorComponent,
];

@NgModule({
    declarations,
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        MatFormFieldModule,
        ...MaterialModules,
        StoreModule.forFeature(cityStoreName, cityReducer),
        EffectsModule.forFeature([CityEffect]),
    ],
    exports: [
        ...declarations,
        ...MaterialModules,
    ]
})
export class SharedModule { }
