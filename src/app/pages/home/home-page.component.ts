import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { BehaviorSubject, combineLatest, Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, takeUntil } from 'rxjs/operators';
import { CityDailyWeather, CityWeather } from 'src/app/shared/models/weather.model';
import { Bookmark, IBookmark } from '../bookmarks/models';
import { defaultCityToLoad } from './models';

import * as fromHomeActions from './state/home.actions';
import * as fromHomeSelectors from './state/home.selectors';

import * as fromBookmarksSelectors from '../bookmarks/state/bookmark.selectors';

import * as fromCitiesAction from '../../shared/state';
import * as fromCitiesSelectors from '../../shared/state';

import { CitiesResponse } from 'src/app/shared/models/city.model';
import { ActivatedRoute } from '@angular/router';
import { onlyEnglishAndSpaceValidator } from 'src/app/shared/models/custom-validators.validators';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
    componentDestroyed$ = new Subject<void>();

    cities$: Observable<CitiesResponse[]>;
    cities:CitiesResponse[] = [];

    cityWeather$: Observable<CityWeather>;
    cityWeather: CityWeather;

    cityForecast$: Observable<CityDailyWeather>;
    cityForecast: CityDailyWeather;

    loading$: Observable<boolean>;
    error$: Observable<boolean>;
  
    bookmarksList$: Observable<IBookmark[]>;
    isCurrentFavorite$: Observable<boolean> = new BehaviorSubject<boolean>(false);
  
    searchControlWithAutocomplete: FormControl;
  
    constructor(
        private store: Store,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                this.store.dispatch(fromHomeActions.loadCurrentWeatherByGeo({ latitude, longitude }));
            });
        }

        const {cityName} = this.route.snapshot.queryParams;
        const query = cityName ? cityName : defaultCityToLoad;

        this.store.dispatch(fromHomeActions.loadCurrentWeather({ query }));

        this.searchControlWithAutocomplete = new FormControl(undefined, [Validators.required, Validators.min(3),  onlyEnglishAndSpaceValidator()]);
        this.searchControlWithAutocomplete.valueChanges
            .pipe(
                debounceTime(500),
                distinctUntilChanged(),
                takeUntil(this.componentDestroyed$)
            )
            .subscribe((query:any) => {
                if(!this.searchControlWithAutocomplete.valid) {return;}

                if (query?.length > 2) {
                    this.store.dispatch(fromCitiesAction.loadCities({query}));
                }
            });
            
        this.cities$ = this.store.pipe(select(fromCitiesSelectors.selectCitiesList));
        this.cities$
            .pipe(takeUntil(this.componentDestroyed$))
            .subscribe(cities => {
                this.cities = cities.filter(c => {
                    return c.LocalizedName.toLowerCase().includes(this.searchControlWithAutocomplete?.value?.toLowerCase());
                });
            });

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
                    if (Boolean(current)) {
                        return bookmarksList.some(bookmark => bookmark.id === current.city.id);
                    }
                    return false;
                }),
            );
    }

    doSearch() {
        const query = this.searchControlWithAutocomplete.value;
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
        bookmark.weather = this.cityWeather.weather;
        this.store.dispatch(fromHomeActions.toggleBookmark({ entity: bookmark }));
    }

    ngOnDestroy(): void {
        this.componentDestroyed$.next();
        this.componentDestroyed$.unsubscribe();
    }
}
