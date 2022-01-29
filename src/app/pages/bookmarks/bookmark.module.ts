import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { BookmarkPageComponent } from './bookmark-page.component';
import { bookmarkStoreName } from './models';
import { bookmarkReducer } from './state/bookmark.reducer';
import { BookmarkEffect } from './state/bookmark.effects';

const declarations = [
    BookmarkPageComponent
];
const exports = [
    ...declarations
];

@NgModule({
    declarations,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule,
        SharedModule,
        StoreModule.forFeature(bookmarkStoreName, bookmarkReducer),
        EffectsModule.forFeature([BookmarkEffect]),
    ],
    exports
})
export class BookmarkModule { }
