import { configureStore } from '@reduxjs/toolkit';
import { baseApi } from '@/shared/api';
import { sessionMiddleware, sessionReducer } from '@/entities/session';
import { favoritesReducer, favoritesMiddleware } from '@/entities/favorites';
import { historyReducer, historyMiddleware } from '@/entities/history';
import { booksReducer } from '@/entities/books';

export const store = configureStore({
    reducer: {
        [baseApi.reducerPath]: baseApi.reducer,
        session: sessionReducer,
        favorites: favoritesReducer,
        history: historyReducer,
        books: booksReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
        .concat(baseApi.middleware)
        .prepend(sessionMiddleware.middleware)
        .concat(favoritesMiddleware.middleware)
        .concat(historyMiddleware.middleware)
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch