import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { getLocalUser } from '../lib/getLocalUser';
import { SessionState, User, UserData } from './types';

const initialState: SessionState = {
  isAuthorized: false,
  userEmail: getLocalUser(),
  errors: {
    emailError: '',
    passwordError: '',
  }
}

export const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    successLogin: (state, action: PayloadAction<User>) => {
      state.userEmail = action.payload.email;
    },
    logout: (state) => {
      state.userEmail = null;
    },
    createUser: (state, action: PayloadAction<UserData>) => {
      state.userEmail = action.payload.email;
    },
    setErrors: (state, action: PayloadAction<{emailError: string, passwordError: string}>) => {
      state.errors = action.payload;
    }
  },
})

export const { successLogin, logout, createUser, setErrors } = sessionSlice.actions

export const sessionReducer  = sessionSlice.reducer