import s from './bookCard.module.scss';
import { Book } from '@/entities/books';
import { AddToFavoritesButton } from '@/features/addToFavorites';
import { useFavorites } from '@/entities/favorites';

type Props = {
  book: Book;
}

export function BookCard({book}: Props) {
  console.log(book)
  const isAdded = useFavorites(book.key);
  const description = (typeof book.description === 'string') ? book.description : book.description?.value
  return (
    <main className={s.Content}>     
      <h1 className={s.Title}>{book.title}</h1>
      <p>
        <span className={s.Span}>Описание:</span>{description}
      </p>
      <p>
        <span className={s.Span}>Издано в:</span>{book?.first_publish_date}
      </p>
      <AddToFavoritesButton isAdded={isAdded} id={book.key}/>
    </main>
  );
}