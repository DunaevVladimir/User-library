import { useSelector } from 'react-redux';
import { RootState } from '@/app/providers/store';

export const useFavorites = (id: string) => {
  const favoritesList = useSelector((state: RootState) => state.favorites.listId);

  console.log(favoritesList)

  const isAdded = favoritesList.includes(id);

  return isAdded;
}