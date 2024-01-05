import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { BooksState } from './types';

export const fetchBooks = createAsyncThunk(
  'books',
  async (params: {q: string, limit: number, fields: string, page?: number}) => {
    const newParams = {
      ...params,
      limit: String(params.limit),
      page: String(params.page),
    }
    const response = fetch('https://openlibrary.org/search.json?' + new URLSearchParams(newParams))
      .then(res => res.json());

    return await response
  }
)

const initialState: BooksState = {
  bookList: [],
  isLoading: false,
  count: 0,
}

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.count = action.payload.numFound;
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