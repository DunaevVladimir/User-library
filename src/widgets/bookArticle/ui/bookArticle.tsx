import s from './bookArticle.module.scss';
import { Book } from '@/entities/books';
import { BookItem } from '@/entities/books';
import { useFavorites } from '@/entities/favorites';
import { AddToFavoritesButton } from '@/features/addToFavorites';

type Props = {
  book: Book;
}

export function BookArticle({book}: Props) {
  const isAdded = useFavorites(book.key);

  return (
    <article className={s.Content}>
      <BookItem book={book}/>
      <AddToFavoritesButton isAdded={isAdded} id={book.key} />
    </article>
  );
}