import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoaderComponent } from './components/loader/loader.component';
import { DetailedWeatherComponent } from './components/detailed-weather/detailed-weather.component';

const declarations:any[] = [
    LoaderComponent,
    DetailedWeatherComponent
];

@NgModule({
    declarations: [
        ...declarations,
    ],
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
    ],
    exports: [
        ...declarations
    ]
})
export class SharedModule { }
