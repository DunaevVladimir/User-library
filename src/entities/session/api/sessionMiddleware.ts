import { createListenerMiddleware } from '@reduxjs/toolkit';
import { User } from '../model/types';

import { 
  successLogin,
  logout,
  createUser,
  setErrors,
} from '../model/slice';

import { setFavoritesList } from '@/entities/favorites';
import { setHistoryList } from '@/entities/history';

export const sessionMiddleware = createListenerMiddleware();

sessionMiddleware.startListening({
  actionCreator: successLogin,
  effect: (action, listenerApi) => {
    localStorage.setItem('currentUser', JSON.stringify(action.payload));
    let users = localStorage.getItem('users');
    if (users) {
      let user = JSON.parse(users).find((item: User) => item.email === action.payload.email);
      if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        listenerApi.dispatch(setFavoritesList(user.favorites));
        listenerApi.dispatch(setHistoryList(user.history));
      }
    }
  }
})

sessionMiddleware.startListening({
  actionCreator: logout,
  effect: () => {
    localStorage.removeItem('currentUser');
  }
})

sessionMiddleware.startListening({
  actionCreator: createUser,
  effect: (action, listenerApi) => {
    let users = localStorage.getItem('users');
    if (users) {
      users = JSON.parse(users).concat({...action.payload});
      localStorage.setItem('users', JSON.stringify(users));
    } else {
      localStorage.setItem('users', JSON.stringify([action.payload]));
    }
    localStorage.setItem('currentUser', JSON.stringify(action.payload));
  }
})