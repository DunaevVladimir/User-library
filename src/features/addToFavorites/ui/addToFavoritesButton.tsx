import s from './addToFavoritesButton.module.scss';
import { Button } from "@/shared/ui/button/button";
import { useDispatch } from 'react-redux';
import { addToFavorites, deleteFromFavorites } from "@/entities/favorites";

type Props = {
  isAdded: boolean;
  id: string;
}

export function AddToFavoritesButton({isAdded, id}: Props) {
  const dispatch = useDispatch();

  const onHandleClick = () => {
    if (isAdded) {
      dispatch(deleteFromFavorites(id));
      let favorites = JSON.parse(localStorage.getItem('favorites')!);
      favorites = favorites.filter((item: string) => item !== id);
      localStorage.setItem('favorites', JSON.stringify(favorites));
    } else {
      dispatch(addToFavorites(id));
      let favorites = JSON.parse(localStorage.getItem('favorites')!);
      if (!favorites) {
        favorites = [];
      }
      favorites = favorites.concat([id]);
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }
  }

  return (
    <Button onClick={onHandleClick} className={isAdded ? s.Button + ' ' + s.Added : s.Button}>{isAdded ? 'Удалить из избранного' : 'Добавить в избранное'}</Button>
  );
}