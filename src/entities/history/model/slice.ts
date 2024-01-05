import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { getLocalHistory } from '../lib/getLocalHistory';
import { HistoryState } from './types';

const initialState: HistoryState = {
  list: getLocalHistory(),
}

export const historySlice = createSlice({
  name: 'hisory',
  initialState,
  reducers: {
    addToHistory: (state, action: PayloadAction<{link: string, title: string, id: number}>) => {
      state.list = [...state.list, action.payload];
    },
    deleteFromHistory: (state, action: PayloadAction<number>) => {
      state.list = state.list.filter(item => item.id !== action.payload);
    },
    clearHistory: (state) => {
      state.list = [];
    },
    setHistoryList: (state, action: PayloadAction<{link: string, title: string, id: number}[]>) => {
      state.list = action.payload;
    },
  },
})

export const { addToHistory, deleteFromHistory, clearHistory, setHistoryList } = historySlice.actions

export const historyReducer  = historySlice.reducer