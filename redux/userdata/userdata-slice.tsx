import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { UserData, SessionProps } from "./userdata.types";

const initialState: UserData = {
  value: {
    token: null,
  },
};

export const tokenSlice = createSlice({
  name: "userdata",
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.value.token = action.payload;
    },
    setSession: (state, action: PayloadAction<SessionProps>) => {
      state.value.session = action.payload;
    },
    clearUserData: (state) => {
      state.value = {
        token: null,
        session: null,
      };
    },
  },
});

export const { setToken, setSession, clearUserData } = tokenSlice.actions;
export default tokenSlice.reducer;
