import { configureStore } from "@reduxjs/toolkit";
import planeSlice from "./assets/habitat/components/planeSlice";

export const store = configureStore({
    reducer: {
        plane: planeSlice
    },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;