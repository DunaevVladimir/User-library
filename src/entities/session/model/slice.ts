import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { SessionState, User } from './types';

const initialState: SessionState = {
  isAuthorized: false,
  user: null
}

export const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    clearSession: (state) => {
      state.isAuthorized = false;
      state.user = null;
    },
    remindUser: (state) => {
      let user = localStorage.getItem('user');
      if (user) {
        state.isAuthorized = true;
        state.user = JSON.parse(user);
      }
    },
    setUser: (state, action: PayloadAction<User>) => {
      state.isAuthorized = true
      state.user = action.payload;
      localStorage.setItem('user', JSON.stringify(action.payload));
    }
  },
})

export const { clearSession, remindUser, setUser } = sessionSlice.actions

export const sessionReducer  = sessionSlice.reducer