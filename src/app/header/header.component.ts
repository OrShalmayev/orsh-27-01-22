import { Component, OnInit } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    lightTheme = false

    constructor() { }

    ngOnInit(): void {
    }

    handleThemeChange(e: MatSlideToggleChange){
        this.lightTheme = e.checked;
        if(this.lightTheme){
            document.documentElement.setAttribute('data-theme', 'light');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
        }
    }
}
