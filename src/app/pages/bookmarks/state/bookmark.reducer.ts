import { createReducer, Action, on } from '@ngrx/store'
import { BookmarkInitialState, IBookmark, IBookmarkState } from '../models';
import * as fromBookmarkActions from './bookmark.actions';
import * as fromHomeActions from '../../home/state/home.actions';

const reducer = createReducer(
    BookmarkInitialState,
    on(fromBookmarkActions.clearBookmarkState, () => BookmarkInitialState),
    on(fromHomeActions.toggleBookmark, (state, { entity }) => ({
        ...state,
        list: toggleBookmark(state.list, entity),
    })),
);

export function bookmarkReducer(state: IBookmarkState | undefined, action: Action): IBookmarkState {
    return reducer(state, action);
}

function toggleBookmark(list: IBookmark[], entity: IBookmark): IBookmark[] {
    const foundBookmark: boolean = Boolean(list.find(bookmark => bookmark.id === entity.id));
    if (foundBookmark) {
        return list.filter(bookmark => bookmark.id !== entity.id);
    }
    return [...list, entity];
}