import { Component, OnInit, Optional, Self } from '@angular/core';
import { NgControl } from '@angular/forms';
import { forkJoin, Observable, of, OperatorFunction, Subject, Subscriber } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, switchMap } from 'rxjs/operators';
import { CitiesResponse, City } from '../../models/index.models';
import { CitiesService } from '../../services/cities.service';

@Component({
  selector: 'shared-cities-typehead',
  templateUrl: './cities-typehead.component.html',
  styleUrls: ['./cities-typehead.component.scss']
})
export class CitiesTypeheadComponent implements OnInit {
    public model: any;
    componentDestroyed = new Subject<void>();
    search: OperatorFunction<string, readonly CitiesResponse[]> = (text$: Observable<string>) => text$.pipe(
        debounceTime(200),
        distinctUntilChanged(),
        switchMap((query: string) => {
            return forkJoin({
                query: of(query), 
                cities: this.citiesService.getCities(query)
            });
        }),
        map(({query, cities}) => {
            debugger;
            return query.length < 2 ? []
                : cities.filter(v => v.Type?.toLowerCase().indexOf(query.toLowerCase()) > -1).slice(0, 10)
        })
    );

    constructor(
        private citiesService: CitiesService,
    ) {}

    ngOnInit(): void {

    }
    ngOnDestroy(): void {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this.componentDestroyed.next();
        this.componentDestroyed.complete();
    }

}
