import { Injectable } from "@angular/core";

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { iif, of } from "rxjs";
import { catchError, map, switchMap, withLatestFrom } from "rxjs/operators";
import { ICitiesState } from "..";
import { CitiesResponse } from "../../models/city.model";
import { CitiesService } from "../../services/cities.service";
import * as fromCitiesActions from './city.actions';
import * as fromCitiesSelectors from './city.selectors';
@Injectable()
export class CityEffect {
    constructor(
        private actions$: Actions,
        private store: Store<ICitiesState>,
        private cityService: CitiesService
    ) {}

    loadCities$ = createEffect(() => this.actions$
        .pipe(
            ofType(fromCitiesActions.loadCities),
            withLatestFrom(this.store.select(fromCitiesSelectors.selectCitiesList)),
            switchMap(([{query}, inStoreCities])=>{
                let citiesFound: CitiesResponse[] = [];
                if(inStoreCities?.length > 0){
                    citiesFound = inStoreCities.filter(c => {
                        return c.LocalizedName.toLowerCase().indexOf(query.toLowerCase()) > -1
                    });
                }
                return iif(()=> citiesFound?.length > 0, of(citiesFound), this.cityService.getCities(query));
            }),
            catchError((err, caught$) => {
                this.store.dispatch(fromCitiesActions.loadCitiesFailed());
                return caught$;
            }),
            map((list: CitiesResponse[]) => {
                return fromCitiesActions.loadCitiesSuccess({ list })
            }),
        ),
    );
}
