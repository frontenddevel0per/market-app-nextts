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
      let newArr: Item[] = [];
      if (
        state.value.filter((item) => item.id === action.payload).length !== 1
      ) {
        state.value.map((item) => newArr.push(item));
        newArr.push({ id: action.payload, count: 1 });
      } else {
        newArr = state.value.map((item) => {
          if (item.id === action.payload) {
            return { id: item.id, count: item.count + 1 };
          } else {
            return item;
          }
        });
      }
      state.value = newArr;
    },
    removeItem: (state, action: PayloadAction<number>) => {
      let newArr: Item[] = [];
      state.value.map((item) => {
        if (item.id === action.payload && item.count > 1) {
          newArr.push({
            id: item.id,
            count: item.count - 1,
          });
        } else if (item.id !== action.payload) {
          newArr.push(item);
        }
      });
      state.value = newArr;
    },
  },
});

export const { addItem, removeItem } = bagSlice.actions;
export default bagSlice.reducer;
