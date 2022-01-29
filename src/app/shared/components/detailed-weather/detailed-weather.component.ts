import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Units } from '../../models/index.models';
import { Weather } from '../../models/weather.model';
import { unitToSymbol } from '../../utils/units.utils';

@Component({
  selector: 'shared-detailed-weather',
  templateUrl: './detailed-weather.component.html',
  styleUrls: ['./detailed-weather.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailedWeatherComponent implements OnInit {
    @Input() weather: Weather;
    @Input("animationDelay") animationDelay: number = 1;

    constructor() { }
    get weatherIcon(): string {
        return `https://developer.accuweather.com/sites/default/files/${this.weather.icon}-s.png`;
    }
    get unitSymbol(): string {
        return unitToSymbol(Units.Metric);
    }
    ngOnInit(): void {
    }

}
