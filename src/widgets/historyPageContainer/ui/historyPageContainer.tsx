import { useCallback } from 'react';
import s from './historyPageContainer.module.scss';
import { Link } from '@/shared/ui/link/link';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/providers/store';
import { Button } from '@/shared/ui/button/button';
import { deleteFromHistory, clearHistory } from '@/entities/history';
import { useDispatch } from 'react-redux';

export function HistoryPageContainer() {
  const dispatch = useDispatch();
  const list = useSelector((state: RootState) => state.history.list);

  const handleClick = useCallback((id: number) => {
    dispatch(deleteFromHistory(id));
  }, []);

  const onClearHistory = useCallback(() => {
    dispatch(clearHistory());
  }, []);

  return (
    <main className={s.Content}>
      <div className={s.List}>
        <Button onClick={onClearHistory}>Очистить Историю</Button>
        <ul>
          {
            list.map((item, index) => {
              return <li key={item.id} className={s.Item}>
                <Link path={item.link} text={item.title}></Link>
                <Button onClick={() => handleClick(item.id)}>X</Button>
              </li>
            })
          }
        </ul>
      </div>
    </main>
  );
}