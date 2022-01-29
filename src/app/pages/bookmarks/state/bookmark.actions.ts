import { createAction, props } from '@ngrx/store';
import { Bookmark, IBookmark } from '../models';

export const removeBookmark = createAction(
    '[Bookmarmark] Remove Bookmark',
    props<{ id: number }>(),
);

export const toggleBookmarById = createAction(
    '[Bookmarks] Toggle Bookmarks By Id',
    props<{ id: number }>(),
);

export const updateBookmarksList = createAction(
    '[Bookmarks] Update Bookmarks List',
    props<{ list: IBookmark[] }>(),
);

export const clearBookmarkState = createAction('[Bookmarks] Clear Bookmark State');