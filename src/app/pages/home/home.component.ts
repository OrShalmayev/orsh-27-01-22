import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CityDailyWeather, CityWeather } from 'src/app/shared/models/weather.model';

import * as fromHomeActions from './state/home.actions';
import * as fromHomeSelectors from './state/home.selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    componentDestroyed$ = new Subject<void>();
    cityWeather$: Observable<CityWeather>;
    cityWeather: CityWeather;
    cityForecast$: Observable<CityDailyWeather>;
    cityForecast: CityDailyWeather;
    loading$: Observable<boolean>;
    error$: Observable<boolean>;
  
    // bookmarksList$: Observable<Bookmark[]>;
    // isCurrentFavorite$: Observable<boolean>;
  
    searchControl: FormControl;
    searchControlWithAutocomplete: FormControl;
  
    constructor(
        private store: Store,
    ) { }

    ngOnInit(): void {
        this.searchControl = new FormControl('', Validators.required);
        this.searchControlWithAutocomplete = new FormControl(undefined);
        
        // this.searchControlWithAutocomplete.valueChanges
        //     .pipe(takeUntil(this.componentDestroyed$))
        //     .subscribe((value:any) => {
        //         if (!!value) {
        //             this.store.dispatch(fromHomeActions.loadCurrentWeatherById({id: value.geonameid.toString()}));
        //         }
        //     });
    
        this.cityWeather$ = this.store.pipe(select(fromHomeSelectors.selectCurrentWeather));
        this.cityWeather$
            .pipe(takeUntil(this.componentDestroyed$))
            .subscribe(value => this.cityWeather = value);
        this.cityForecast$ = this.store.pipe(select(fromHomeSelectors.selectForecastWeather));
        this.cityForecast$
            .pipe(takeUntil(this.componentDestroyed$))
            .subscribe(value => this.cityForecast = value);
        this.loading$ = this.store.pipe(select(fromHomeSelectors.selectCurrentWeatherLoading));
        this.error$ = this.store.pipe(select(fromHomeSelectors.selectCurrentWeatherError));
    
        // this.bookmarksList$ = this.store.pipe(select(fromBookmarksSelectors.selectBookmarksList));
    
        // this.isCurrentFavorite$ = combineLatest([this.cityWeather$, this.bookmarksList$])
        //   .pipe(
        //     map(([current, bookmarksList]) => {
        //       if (!!current) {
        //         return bookmarksList.some(bookmark => bookmark.id === current.city.id);
        //       }
        //       return false;
        //     }),
        //   );
    
        // this.unit$ = this.store.pipe(select(fromConfigSelectors.selectUnitConfig));
    
        // this.setupPortal();
    
    }

    doSearch() {
        const query = this.searchControl.value;
        this.store.dispatch(fromHomeActions.loadCurrentWeather({ query }));
    }

    doForecast(cityWeather:CityWeather) {
        this.store.dispatch(fromHomeActions.loadWeatherForecast({ cityWeather }));

    }

    ngOnDestroy(): void {
        this.componentDestroyed$.next();
        this.componentDestroyed$.unsubscribe();
    }

}
