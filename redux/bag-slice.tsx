import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

interface Item {
  id: number;
  count: number;
}

interface CounterState {
  value: Array<Item>;
}

const initialState: CounterState = {
  value: [
    { id: 0, count: 1 },
    { id: 1, count: 2 },
  ],
};

export const bagSlice = createSlice({
  name: "bag",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<number>) => {
      console.log("dobavlyau item");
      let newArr: Item[] = [];
      // const isInArr = state.value.filter((item) => item.id === action.payload);
      if (
        state.value.filter((item) => item.id === action.payload).length !== 1
      ) {
        console.log("doesnt exist");
        state.value.map((item) => newArr.push(item));
        newArr.push({ id: action.payload, count: 1 });
      } else {
        console.log("already exist");
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
  },
});

export const { addItem } = bagSlice.actions;
export default bagSlice.reducer;
