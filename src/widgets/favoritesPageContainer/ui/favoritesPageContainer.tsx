import { Spinner } from '@/shared/ui/spinner/spinner';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/providers/store';
import { Book } from '@/entities/books';
import { List } from '@/shared/ui/list/list';
import { BookArticle } from '@/widgets/bookArticle';

import s from './favoritesPageContainer.module.scss';

export function FavoritesPageContainer() {
  const favoritesList = useSelector((state: RootState) => state.favorites.list);
  const isLoading = useSelector((state: RootState) => state.favorites.isLoading);

  const render = (book: Book) => { return <BookArticle book={book} /> }

  return (
    <main className={s.Content}>
      <div className={s.List}>
        {
          isLoading 
            ? <Spinner />
            : <List list={favoritesList} renderItem={render} emptyText='Нет добавленных книг' />
        }
      </div>
    </main>
  );
}