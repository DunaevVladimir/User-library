import { Book } from '@/entities/books';
import PropTypes from 'prop-types';
import s from './list.module.scss';

type Props = {
  list: Book[],
  renderItem: (book: Book) => JSX.Element,
  emptyText?: string
}

export function List({list, renderItem, emptyText}: Props) {
  return (
    <ul>
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

List.propTypes = {
  list: PropTypes.objectOf<Book>,
  renderItem: PropTypes.func,
  emptyText: PropTypes.string
}
