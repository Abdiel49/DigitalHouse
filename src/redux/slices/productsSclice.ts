import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {ProductData} from '@types';

type ProductsSliceState = {
  allProDucts: ProductData[];
  products: ProductData[];
};

const initialState: ProductsSliceState = {
  allProDucts: [],
  products: [],
};

export const productsSlice = createSlice({
  name: 'productsSlice',
  initialState: initialState,
  reducers: {
    setAllProducts: (
      state: ProductsSliceState,
      action: PayloadAction<ProductData[]>,
    ) => {
      state.allProDucts = action.payload;
    },
  },
});

export const {setAllProducts} = productsSlice.actions;
