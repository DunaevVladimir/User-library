export type Book = {
  key: string,
  title: string,
  author_name?: string,
  language?: string[],
  numberOfPages?: number,
  description?: string,
  first_publish_date: string
}

export type ChangedBook = {
  isAdded: boolean
} & Book