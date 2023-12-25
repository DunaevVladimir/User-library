import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { SessionState, User } from './types';

const initialState: SessionState = {
  isAuthorized: false,
  user: null,
  errors: {
    emailError: '',
    passwordError: '',
  }
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
    createUser: (state, action: PayloadAction<User>) => {

    },
    remindSession: () => {

    },
    login: (state, action: PayloadAction<User>) => {

    },
    setErrors: (state, action: PayloadAction<{emailError: string, passwordError: string}>) => {
      state.errors = action.payload;
    }
  },
})

export const { clearSession, setUser, createUser, remindSession, login, setErrors } = sessionSlice.actions

export const sessionReducer  = sessionSlice.reducer