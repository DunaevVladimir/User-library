import s from './bookItem.module.scss';
import { Book } from '../../model/types';

type Props = {
  book: Book
}

export function BookItem({book}: Props) {
  return (
    <div className={s.Content}>
      <div className={s.Title}>
        {book.title}
      </div>
      <div className={s.Author}>
        {book.author_name}
      </div>
    </div>
  );
}