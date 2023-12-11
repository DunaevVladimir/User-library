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
    setUser: (state, action: PayloadAction<User>) => {
      state.isAuthorized = true
      state.user = action.payload;
    },
  },
})

export const { clearSession, setUser, } = sessionSlice.actions

export const sessionReducer  = sessionSlice.reducer