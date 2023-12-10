import { configureStore } from '@reduxjs/toolkit';
import { baseApi } from '@/shared/api';
import { sessionReducer } from '@/entities/session';

export const store = configureStore({
    reducer: {
        [baseApi.reducerPath]: baseApi.reducer,
        session: sessionReducer,
    },
    middleware: (getDefaultMiddlware) => getDefaultMiddlware().concat(baseApi.middleware)
});