import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { FavoritesState } from './types';

const initialState: FavoritesState = {
  list: []
}

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorites: (state, action: PayloadAction<string>) => {
      state.list = [...state.list, action.payload];
    },
    deleteFromFavorites: (state, action: PayloadAction<string>) => {
      state.list = state.list.filter(item => item !== action.payload);
    },
    clearFavorites: (state) => {
      state.list = [];
    }
  },
})

export const { addToFavorites, deleteFromFavorites, clearFavorites } = favoritesSlice.actions

export const favoritesReducer  = favoritesSlice.reducer