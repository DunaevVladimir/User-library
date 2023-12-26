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
  matcher: isAnyOf(addToHistory, deleteFromHistory,clearHistory),
  effect: (action, listenerApi) => {
    let currentUserEmail = (listenerApi.getState() as RootState).session.user?.email;
    let users = localStorage.getItem('users');
    if (currentUserEmail && users) {
      users = JSON.parse(users).map((user: UserData) => {
        if (user.email === currentUserEmail) {
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