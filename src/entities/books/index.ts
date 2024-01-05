export { BookItem } from "./ui/bookItem/bookItem";

export { useGetBooksQuery, useGetBookByIdQuery } from "./api/booksApi";

export type { Book } from './model/types';

export { 
  booksReducer,
  fetchBooks
} from "./model/slice";

