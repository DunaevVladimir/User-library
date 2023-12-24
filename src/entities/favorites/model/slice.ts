import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit';
import { FavoritesState } from './types';

const initialState: FavoritesState = {
  list: [],
  listId: [],
  isLoading: false,
}

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorites: (state, action: PayloadAction<string>) => {
      state.listId = [...state.listId, action.payload];
    },
    deleteFromFavorites: (state, action: PayloadAction<string>) => {
      state.listId = state.listId.filter(item => item !== action.payload);
    },
    clearFavorites: (state) => {
      state.list = [];
    },
    setFavoritesList: (state, action: PayloadAction<string[]>) => {
      state.listId = action.payload;
    }
  },
})

export const { addToFavorites, deleteFromFavorites, clearFavorites, setFavoritesList } = favoritesSlice.actions

export const favoritesReducer  = favoritesSlice.reducer