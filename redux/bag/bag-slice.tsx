import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { CounterState } from "./bag.types";

const initialState: CounterState = {
  value: [],
};

type PayloadType = {
  id: number;
  data: {
    title: string;
    price: number;
    description: string;
    src: string;
  };
};

export const bagSlice = createSlice({
  name: "bag",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<number>) => {
      state.value = state.value.map((item) => {
        if (item.id === action.payload) {
          return {
            id: item.id,
            count: item.count + 1,
            data: item.data,
          };
        } else {
          return item;
        }
      });
    },
    addItemInBag: (state, action: PayloadAction<PayloadType>) => {
      state.value = [
        ...state.value,
        { id: action.payload.id, count: 1, data: action.payload.data },
      ];
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
            return {
              id: item.id,
              count: item.count - 1,
              data: item.data,
            };
          }
        });
      }
    },
    deleteItem: (state, action: PayloadAction<number>) => {
      state.value = state.value.filter((e) => e.id !== action.payload);
    },
  },
});

export const { addItem, addItemInBag, removeItem, deleteItem } =
  bagSlice.actions;
export default bagSlice.reducer;
