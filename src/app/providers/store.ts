import { configureStore } from '@reduxjs/toolkit';
import { baseApi } from '@/shared/api';
import { sessionMiddleware, sessionReducer } from '@/entities/session';
import { favoritesReducer, favoritesMiddleware } from '@/entities/favorites';
import { historyReducer, historyMiddleware } from '@/entities/history';

export const store = configureStore({
    reducer: {
        [baseApi.reducerPath]: baseApi.reducer,
        session: sessionReducer,
        favorites: favoritesReducer,
        history: historyReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
        .concat(baseApi.middleware)
        .concat(favoritesMiddleware.middleware)
        .concat(historyMiddleware.middleware)
        .concat(sessionMiddleware.middleware)
});

export type RootState = ReturnType<typeof store.getState>