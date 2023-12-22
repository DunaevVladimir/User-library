import { configureStore } from '@reduxjs/toolkit';
import { baseApi } from '@/shared/api';
import { sessionReducer } from '@/entities/session';
import { favoritesReducer } from '@/entities/favorites';

export const store = configureStore({
    reducer: {
        [baseApi.reducerPath]: baseApi.reducer,
        session: sessionReducer,
        favorites: favoritesReducer,
    },
    middleware: (getDefaultMiddlware) => getDefaultMiddlware().concat(baseApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>