import s from './bookCard.module.scss';
import { Book } from '@/entities/books';

type Props = {
  book: Book;
}

export function BookCard({book}: Props) {
  return (
    <main className={s.Content}>     
      <h1 className={s.Title}>{book.title}</h1>
      <p>
        <span className={s.Span}>Описание:</span>{book.description}
      </p>
      <p>
        <span className={s.Span}>Издано в:</span>{book.first_publish_date}
      </p>
    </main>
  );
}