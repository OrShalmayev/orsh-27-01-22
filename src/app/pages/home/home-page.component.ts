import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { BehaviorSubject, combineLatest, Observable, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { CityDailyWeather, CityWeather } from 'src/app/shared/models/weather.model';
import { Bookmark, IBookmark } from '../bookmarks/models';
import { defaultCityToLoad } from './models';

import * as fromHomeActions from './state/home.actions';
import * as fromHomeSelectors from './state/home.selectors';

import * as fromBookmarksSelectors from '../bookmarks/state/bookmark.selectors';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
    componentDestroyed$ = new Subject<void>();

    cityWeather$: Observable<CityWeather>;
    cityWeather: CityWeather;

    cityForecast$: Observable<CityDailyWeather>;
    cityForecast: CityDailyWeather;

    loading$: Observable<boolean>;
    error$: Observable<boolean>;
  
    bookmarksList$: Observable<IBookmark[]>;
    isCurrentFavorite$: Observable<boolean> = new BehaviorSubject<boolean>(false);
  
    searchControl: FormControl;
    searchControlWithAutocomplete: FormControl;
  
    constructor(
        private store: Store,
    ) { }

    ngOnInit(): void {
        this.searchControl = new FormControl('', Validators.required);
        this.searchControlWithAutocomplete = new FormControl(undefined);
        this.store.dispatch(fromHomeActions.loadCurrentWeather({ query: defaultCityToLoad }));
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
    
        this.bookmarksList$ = this.store.pipe(select(fromBookmarksSelectors.selectBookmarksList));
    
        this.isCurrentFavorite$ = combineLatest([this.cityWeather$, this.bookmarksList$])
          .pipe(
            map(([current, bookmarksList]) => {
              if (!!current) {
                return bookmarksList.some(bookmark => bookmark.id === current.city.id);
              }
              return false;
            }),
          );
    
        // this.unit$ = this.store.pipe(select(fromConfigSelectors.selectUnitConfig));
    
        // this.setupPortal();
    
    }

    doSearch() {
        const query = this.searchControl.value;
        this.store.dispatch(fromHomeActions.loadCurrentWeather({ query }));
    }

    onToggleForecast(cityWeather:CityWeather) {
        this.store.dispatch(fromHomeActions.loadWeatherForecast({ cityWeather }));
    }

    onToggleBookmark() {
        const bookmark = Object.assign({}, Bookmark);
        bookmark.id = this.cityWeather.city.id;
        bookmark.name = this.cityWeather.city.name;
        bookmark.country = this.cityWeather.city.country;
        this.store.dispatch(fromHomeActions.toggleBookmark({ entity: bookmark }));
    }

    ngOnDestroy(): void {
        this.componentDestroyed$.next();
        this.componentDestroyed$.unsubscribe();
    }
}
