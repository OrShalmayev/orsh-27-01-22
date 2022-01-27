import { NgModule, Optional, SkipSelf } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MetaReducer } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const modules = [
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,
    StoreDevtoolsModule.instrument() // not for a production environment
];

@NgModule({
    imports: [
        ...modules
    ],
    declarations: []
})
export class CoreModule {
    constructor(
        @Optional()
        @SkipSelf()
        parentModule: CoreModule,
    ) {
        // Prevent from importing this module twice.
        if (parentModule) {
            throw new Error(
                'CoreModule is already loaded. Import it in the AppModule only',
            );
        }
    }
}
