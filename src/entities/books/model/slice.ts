import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { BooksState } from './types';

export const fetchBooks = createAsyncThunk(
  'books',
  async (params: {q: string, limit: string, fields: string}) => {
    const response = fetch('https://openlibrary.org/search.json?' + new URLSearchParams(params))
      .then(res => res.json());

    return await response
  }
)

const initialState: BooksState = {
  bookList: [],
  isLoading: false,
}

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.bookList = action.payload.docs;
        state.isLoading = false;
      })
      .addCase(fetchBooks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchBooks.rejected, (state) => {
        state.isLoading = false;
      })
  },
})

export const { } = booksSlice.actions

export const booksReducer  = booksSlice.reducer