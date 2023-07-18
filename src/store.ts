import { configureStore } from "@reduxjs/toolkit";
export const store = configureStore({
    reducer: {
        //reducers
    }
});

export type AppDispath = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;