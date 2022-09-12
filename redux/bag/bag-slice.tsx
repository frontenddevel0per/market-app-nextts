import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Item, CounterState } from "./bag.types";

const initialState: CounterState = {
  value: [],
};

export const bagSlice = createSlice({
  name: "bag",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<number>) => {
      if (!state.value.some((e) => e.id === action.payload)) {
        state.value = [...state.value, { id: action.payload, count: 1 }];
      } else {
        state.value = state.value.map((item) => {
          if (item.id === action.payload) {
            return { id: item.id, count: item.count + 1 };
          } else {
            return item;
          }
        });
      }
    },
    removeItem: (state, action: PayloadAction<number>) => {
      const item = state.value.find((e) => e.id === action.payload);

      if (item?.count === 1) {
        state.value = state.value.filter((e) => e.id !== action.payload);
      } else {
        state.value = state.value.map((item) => {
          if (item.id !== action.payload) {
            return item;
          } else {
            return { id: item.id, count: item.count - 1 };
          }
        });
      }
    },
  },
});

export const { addItem, removeItem } = bagSlice.actions;
export default bagSlice.reducer;
