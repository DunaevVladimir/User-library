import { createListenerMiddleware, isAnyOf } from '@reduxjs/toolkit';
import { RootState } from '@/app/providers/store';
import { UserData } from '@/entities/session';

import { 
  addToFavorites, 
  deleteFromFavorites, 
  clearFavorites, 
} from '../model/slice';

export const favoritesMiddleware = createListenerMiddleware();

favoritesMiddleware.startListening({
  matcher: isAnyOf(addToFavorites, deleteFromFavorites, clearFavorites),
  effect: (action, listenerApi) => {
    let currentUserEmail = (listenerApi.getState() as RootState).session.userEmail;
    let users = localStorage.getItem('users');
    if (currentUserEmail && users) {
      users = JSON.parse(users).map((user: UserData) => {
        if (user.email === currentUserEmail) {
          localStorage.setItem('currentUser', JSON.stringify({
            ...user,
            favorites: (listenerApi.getState() as RootState).favorites.listId            
          }));
          return {
            ...user,
            favorites: (listenerApi.getState() as RootState).favorites.listId
          }
        } else {
          return user
        }
      })
      localStorage.setItem('users', JSON.stringify(users));
    }
  }
})