import { ChangedBook } from '@/entities/books';
import s from './list.module.scss';

type Props = {
  list: ChangedBook[],
  renderItem: (book: ChangedBook) => JSX.Element
}

export function List({list, renderItem}: Props) {
  return (
    <ul>
      {
        list.length 
          ? list.map((item) => (
              <li key={item.key}>
                {renderItem(item)}
              </li>
            ))
          : 'Нет книг по заданному поиску'

      }
    </ul>
  );
}

