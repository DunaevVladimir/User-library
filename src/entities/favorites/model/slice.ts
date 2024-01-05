import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit';
import { getLocalFavorites } from '../lib/getLocalFavorites';
import { FavoritesState } from './types';

export const fetchFavorites = createAsyncThunk(
  'favorites',
  async (id: string) => {
    const response = fetch(`https://openlibrary.org${id}.json`)
      .then(res => res.json());

    return await response
  }
)

const initialState: FavoritesState = {
  list: [],
  listId: getLocalFavorites(),
  isLoading: false,
}

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorites: (state, action: PayloadAction<string>) => {
      state.listId = [action.payload, ...state.listId];
    },
    deleteFromFavorites: (state, action: PayloadAction<string>) => {
      state.listId = state.listId.filter(item => item !== action.payload);
      state.list = state.list.filter(item => item.key !== action.payload);
    },
    clearFavorites: (state) => {
      state.listId = [];
    },
    setFavoritesList: (state, action: PayloadAction<string[]>) => {
      state.listId = action.payload;
    },
    clear: (state) => {
      state.list = [];
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFavorites.fulfilled, (state, action) => {
        state.list = [...state.list, action.payload];
      })
  },
})

export const { addToFavorites, deleteFromFavorites, clearFavorites, setFavoritesList, clear, setLoading } = favoritesSlice.actions

export const favoritesReducer  = favoritesSlice.reducer