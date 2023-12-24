export type Book = {
  key: string,
  title: string,
  author_name?: string,
  language?: string[],
  numberOfPages?: number,
  description?: string | {type: string, value: string},
  first_publish_date: string
}

<<<<<<< HEAD
export type BooksState = {
  bookList: Book[];
  isLoading: boolean;
}
=======
export type ChangedBook = {
  isAdded: boolean
} & Book
>>>>>>> 21cf07b9cd70f885386f594ad7d68e954aa57b81
