import { Book } from '@/entities/books';
import s from './list.module.scss';

type Props = {
  list: Book[],
  renderItem: (book: Book) => JSX.Element,
  emptyText?: string
}

export function List({list, renderItem, emptyText}: Props) {
  return (
    <ul className={s.List}>
      {
        list.length 
          ? list.map((item) => (
              <li key={item.key}>
                {renderItem(item)}
              </li>
            ))
          : emptyText

      }
    </ul>
  );
}