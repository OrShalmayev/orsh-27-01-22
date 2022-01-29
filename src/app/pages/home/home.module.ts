import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HomeEffects } from './state/home.effects';
import { homeReducer } from './state/home.reducer';
import { SharedModule } from 'src/app/shared/shared.module';
import { homeStoreName } from './models';
import { HomePageComponent } from './home-page.component';
import { CurrentWeatherComponent } from './components/current-weather/current-weather.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const declarations:any[] = [
    HomePageComponent,
    CurrentWeatherComponent
];

@NgModule({
  declarations,
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule,
    SharedModule,
    StoreModule.forFeature(homeStoreName, homeReducer),
    EffectsModule.forFeature([HomeEffects]),
  ],
  exports: [
    ...declarations
  ],
})
export class HomeModule { }
