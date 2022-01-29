

/**
 * Data
 */
export const bookmarkStoreName: "bookmarks" = "bookmarks";
export const Bookmark : IBookmark = {
    id: "",
    name: "",
    country: "",
}
export const BookmarkInitialState: IBookmarkState = {
    list: [],
}
 /**
  * Interfaces
  */
export interface IBookmarkState {
    list: IBookmark[];
}
export interface IBookmark {
    id: string;
    name: string;
    country: string;
}
 /**
  * Enums
  */
 /**
  * Types
  */