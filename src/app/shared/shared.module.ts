import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { CitiesTypeheadComponent } from './components/cities-typehead/cities-typehead.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoaderComponent } from './components/loader/loader.component';

const declarations:any[] = [
    // CitiesTypeheadComponent
    LoaderComponent
];

@NgModule({
    declarations: [
        ...declarations
    ],
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
    ],
    exports: [
        ...declarations
    ]
})
export class SharedModule { }
