import { configureStore } from "@reduxjs/toolkit";
import baseSliceReducer from './baseSlice';

export const isTouchDevice = (): boolean => {
  return (('ontouchstart' in window) ||  
    (navigator.maxTouchPoints > 0));
}

export const store = configureStore({
    reducer: {
        base: baseSliceReducer,
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
