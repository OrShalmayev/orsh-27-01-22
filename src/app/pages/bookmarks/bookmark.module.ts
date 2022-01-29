import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes = [
    { path: 'bookmarks', component: BookmarkPageComponent },
];

@NgModule({
    declarations,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes),
        RouterModule,
        SharedModule,
        StoreModule.forFeature(bookmarkStoreName, bookmarkReducer),
        EffectsModule.forFeature([BookmarkEffect]),
    ],
    exports
})
export class BookmarkModule { }
