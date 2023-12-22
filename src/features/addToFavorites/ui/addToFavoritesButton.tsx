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
    isAdded
      ? dispatch(deleteFromFavorites(id))
      : dispatch(addToFavorites(id))
  }

  return (
    <Button onClick={onHandleClick} className={isAdded ? s.Button + ' ' + s.Added : s.Button}>{isAdded ? 'Удалить из избранного' : 'Добавить в избранное'}</Button>
  );
}