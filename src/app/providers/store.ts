import { configureStore } from '@reduxjs/toolkit';
import { baseApi } from '@/shared/api'

export const store = configureStore({
    reducer: {
        [baseApi.reducerPath]: baseApi.reducer,
    },
    middleware: (getDefaultMiddlware) => getDefaultMiddlware().concat(baseApi.middleware)
});