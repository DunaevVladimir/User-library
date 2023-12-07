import { List } from '@/shared/ui/list/list';
import s from './bookList.module.scss';

export function BookList() {

//@ test
const list = [
  {
    id: '1',
    text: 'Война и мир'
  },
  {
    id: '2',
    text: 'Преступление и наказание'
  },
  {
    id: '3',
    text: 'Чистый код'
  }
];

  return (
    <>
      <div className={s.Content}>
        <List list={list}/>
      </div>
    </>
  );
};