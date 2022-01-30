import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Units } from '../../models/index.models';
import { DailyWeather, Weather } from '../../models/weather.model';
import { unitToSymbol } from '../../utils/units.utils';

@Component({
  selector: 'shared-detailed-weather',
  templateUrl: './detailed-weather.component.html',
  styleUrls: ['./detailed-weather.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailedWeatherComponent implements OnInit {
    @Input() dailyWeather: DailyWeather;
    @Input("animationDelay") animationDelay: number = 1;
    today = new Date();
    constructor() { }
    get weatherIcon(): string {
        const iconNumber = +this.dailyWeather.weather.icon >= 10 ? this.dailyWeather.weather.icon : `0${this.dailyWeather.weather.icon}`;
        return `https://developer.accuweather.com/sites/default/files/${iconNumber}-s.png`;
    }
    get unitSymbol(): string {
        return unitToSymbol(Units.Metric);
    }
    ngOnInit(): void {
    }

}
