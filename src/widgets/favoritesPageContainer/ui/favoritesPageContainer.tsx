import { useEffect } from 'react';
import { Spinner } from '@/shared/ui/spinner/spinner';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/providers/store';
import { Book } from '@/entities/books';
import { List } from '@/shared/ui/list/list';
import { BookArticle } from '@/widgets/bookArticle';
import { fetchFavorites, clear, setLoading } from '@/entities/favorites';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/app/providers/store';
import s from './favoritesPageContainer.module.scss';

export function FavoritesPageContainer() {
  const favoritesList = useSelector((state: RootState) => state.favorites.list);
  const favoritesListId = useSelector((state: RootState) => state.favorites.listId);
  const isLoading = useSelector((state: RootState) => state.favorites.isLoading);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(clear());
    let fetchList = new Promise(function(resolve){
      dispatch(setLoading(true));
      resolve('');
    });

    favoritesListId.forEach(id => {
      fetchList = fetchList.then(() => dispatch(fetchFavorites(id)));
    });

    fetchList.finally(() => dispatch(setLoading(false)));
  }, []);

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