import s from './bookItem.module.scss';
import { Book } from '../../model/types';
import { Link } from '@/shared/ui/link/link';

type Props = {
  book: Book
}

export function BookItem({book}: Props) {
  return (
    <div className={s.Content}>
      <div className={s.Title}>
        <Link path={`/book${book.key}`} text={book.title}></Link>
      </div>
      <div className={s.Author}>
        {book.author_name}
      </div>
    </div>
  );
}