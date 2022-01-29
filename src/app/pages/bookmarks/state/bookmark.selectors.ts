import { createFeatureSelector, createSelector } from '@ngrx/store';
import { bookmarkStoreName, IBookmarkState } from '../models';

export const selectBookmarksState = createFeatureSelector<IBookmarkState>(bookmarkStoreName);


export const selectBookmarksList = createSelector(
    selectBookmarksState,
    (bookmarksState: IBookmarkState) => bookmarksState.list,
);
