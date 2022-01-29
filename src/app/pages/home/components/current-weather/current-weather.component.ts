import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { slideDownUpAnimation } from 'src/app/shared/animations/animations';
import { CityDailyWeather, CityWeather } from 'src/app/shared/models/weather.model';

@Component({
  selector: 'home-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [slideDownUpAnimation],
})
export class CurrentWeatherComponent implements OnInit {
    @Input("cityWeather") cityWeather: CityWeather;
    @Input("cityForecast") cityForecast: CityDailyWeather;
    @Input("isFavorite") isFavorite: boolean | null;
    @Output("toggleBookmark") toggleBookmark = new EventEmitter();
    @Output("toggleForecast") toggleForecast = new EventEmitter();
    today = new Date();
    constructor() { }

    ngOnInit(): void {
    }

    get cityName(): string {
        return `${this.cityWeather.city.name}, ${this.cityWeather.city.country}`; 
    }

    onToggleBookmark() {
        this.toggleBookmark.emit();
    }
    get weatherIcon(): string {
        return `https://developer.accuweather.com/sites/default/files/${this.cityWeather.weather.icon}-s.png`;
    }
    onToggleForecast() {
        this.toggleForecast.emit();
    }
}
