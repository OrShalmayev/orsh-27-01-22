import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HomeEffects } from './state/home.effects';
import { homeReducer } from './state/home.reducer';
import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/shared/shared.module';

const declarations:any[] = [
    HomeComponent
];

@NgModule({
  declarations,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    SharedModule,
    StoreModule.forFeature('home', homeReducer),
    EffectsModule.forFeature([HomeEffects]),
  ],
  exports: [
    ...declarations
  ]   
})
export class HomeModule { }
