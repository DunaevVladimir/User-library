export type Book = {
  key: string,
  title: string,
  author_name?: string,
  language?: string[],
  numberOfPages?: number,
  description?: string | {type: string, value: string},
  first_publish_date: string
}

export type BooksState = {
  bookList: Book[];
  isLoading: boolean;
  count: number;
}

