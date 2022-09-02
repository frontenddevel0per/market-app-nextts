import { configureStore } from "@reduxjs/toolkit";
import bagReducer from "./bag-slice";

const store = configureStore({
  reducer: {
    bag: bagReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
