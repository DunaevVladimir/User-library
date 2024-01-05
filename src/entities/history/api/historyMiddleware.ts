import { createListenerMiddleware, isAnyOf } from '@reduxjs/toolkit';
import { RootState } from '@/app/providers/store';
import { UserData } from '@/entities/session';

import { 
  addToHistory, 
  deleteFromHistory, 
  clearHistory, 
} from '../model/slice';

export const historyMiddleware = createListenerMiddleware();

historyMiddleware.startListening({
  matcher: isAnyOf(addToHistory, deleteFromHistory, clearHistory),
  effect: (action, listenerApi) => {
    let userEmail = (listenerApi.getState() as RootState).session.userEmail;
    let users = localStorage.getItem('users');
    if (userEmail && users) {
      users = JSON.parse(users).map((user: UserData) => {
        if (user.email === userEmail) {
          localStorage.setItem('currentUser', JSON.stringify({
            ...user,
            history: (listenerApi.getState() as RootState).history.list         
          }));
          return {
            ...user,
            history: (listenerApi.getState() as RootState).history.list
          }
        } else {
          return user
        }
      })
      localStorage.setItem('users', JSON.stringify(users));
    }
  }
})