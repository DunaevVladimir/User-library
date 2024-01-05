import { Button } from '../button/button';
import s from './pagination.module.scss';

type Props = {
  count: number,
  currentPage: number,
  limit: number,
  onChangePage: (page: number) => void;
}

export function Pagination({count, currentPage, limit, onChangePage}: Props) {
  const prev = currentPage > 1;
  const next = count > currentPage * limit;

  if (count === 0) {
    return
  }

  return (
      <div className={s.Pagination}>
        { prev && <Button onClick={() => onChangePage(currentPage - 1)}>{'<'}</Button> }
        <p>{currentPage}</p>
        { next && <Button onClick={() => onChangePage(currentPage + 1)}>{'>'}</Button> }
      </div>
  );
}