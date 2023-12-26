import { createListenerMiddleware, isAnyOf } from '@reduxjs/toolkit';
import { RootState } from '@/app/providers/store';
import { User } from '../model/types';

import { 
  setUser,
  clearSession, 
  createUser,
  remindSession,
  login,
  setErrors,
} from '../model/slice';

export const sessionMiddleware = createListenerMiddleware();

sessionMiddleware.startListening({
  matcher: isAnyOf(setUser, clearSession),
  effect: (action, listenerApi) => {
    localStorage.setItem('currentUser', JSON.stringify((listenerApi.getState() as RootState).session.user));
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
    listenerApi.dispatch(setUser(action.payload));
  }
})

sessionMiddleware.startListening({
  actionCreator: login,
  effect: async (action, listenerApi) => {
    let users = localStorage.getItem('users');
    if (users) {
      let user = JSON.parse(users).find((item: User) => item.email === action.payload.email);
      if (user) {
        if (user.password === action.payload.password) {
          listenerApi.dispatch(setUser(action.payload));
        } else {
         listenerApi.dispatch(setErrors({
          emailError: '',
          passwordError: 'Неправильно введен пароль'
         }));       
        }
      } else {
       listenerApi.dispatch(setErrors({
        emailError: "Нет пользователя с такой почтой",
        passwordError: ''
       }));
      }
    } else {
       listenerApi.dispatch(setErrors({
        emailError: "Нет пользователя с такой почтой",
        passwordError: ''
      }));
    }
  }
})

sessionMiddleware.startListening({
  actionCreator: remindSession,
  effect: (action, listenerApi) => {
    let user = JSON.parse(localStorage.getItem('currentUser')!);
    if (user) {
      listenerApi.dispatch(setUser({email: user.email}));
    }
  }
})