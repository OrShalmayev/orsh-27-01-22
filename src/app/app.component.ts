import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'orsh-weather';
    searchControlWithAutocomplete!: FormControl;
    lightTheme = false
    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.searchControlWithAutocomplete = new FormControl(undefined);
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
