import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { IBookmark } from './models';

import * as fromBookmarksSelectors from '../bookmarks/state/bookmark.selectors';

@Component({
  selector: 'bookmark-page',
  templateUrl: './bookmark-page.component.html',
  styleUrls: ['./bookmark-page.component.scss']
})
export class BookmarkPageComponent implements OnInit {
    componentDestroyed$ = new Subject<void>();
    
    bookmarksList$: Observable<IBookmark[]>;

    constructor(
        private store: Store,
    ) { }

    ngOnInit(): void {
        this.bookmarksList$ = this.store.pipe(select(fromBookmarksSelectors.selectBookmarksList));
    }
    weatherIcon(icon:string|undefined): string {
        return `https://developer.accuweather.com/sites/default/files/${icon}-s.png`;
    }
    ngOnDestroy(): void {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this.componentDestroyed$.next();
        this.componentDestroyed$.unsubscribe();
    }

}
