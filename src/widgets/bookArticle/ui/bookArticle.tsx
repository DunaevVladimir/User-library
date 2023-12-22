import s from './bookArticle.module.scss';
import { ChangedBook } from '@/entities/books';
import { BookItem } from '@/entities/books';
import { AddToFavoritesButton } from '@/features/addToFavorites';

type Props = {
  book: ChangedBook;
}

export function BookArticle({book}: Props) {
  return (
    <article className={s.Content}>
      <BookItem book={book}/>
      <AddToFavoritesButton isAdded={book.isAdded} id={book.key} />
    </article>
  );
}