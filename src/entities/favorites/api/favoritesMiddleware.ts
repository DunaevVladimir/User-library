import { createListenerMiddleware, isAnyOf } from '@reduxjs/toolkit';
import { RootState } from '@/app/providers/store';

import { 
  addToFavorites, 
  deleteFromFavorites, 
  clearFavorites, 
} from '../model/slice';

export const favoritesMiddleware = createListenerMiddleware();

favoritesMiddleware.startListening({
  matcher: isAnyOf(addToFavorites, deleteFromFavorites,clearFavorites),
  effect: (action, listenerApi) => {
    localStorage.setItem('favorites', JSON.stringify((listenerApi.getState() as RootState).favorites.listId));
  }
})