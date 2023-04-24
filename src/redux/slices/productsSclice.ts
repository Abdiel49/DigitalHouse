import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {ProductData, ProductsFilterTypes} from '@types';

type ProductsSliceState = {
  allProDucts: ProductData[];
  products: ProductData[];
  currentProduct: ProductData | undefined;
};

const initialState: ProductsSliceState = {
  allProDucts: [],
  products: [],
  currentProduct: undefined,
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
    setCurrentProduct: (
      state: ProductsSliceState,
      action: PayloadAction<ProductData>,
    ) => {
      state.currentProduct = action.payload;
    },
    filterProductsByRedemtion: (
      state: ProductsSliceState,
      action: PayloadAction<ProductsFilterTypes>,
    ) => {
      if (action.payload === 'winned') {
        state.products = state.allProDucts.filter(
          product => product.is_redemption === true,
        );
      } else if (action.payload === 'exchanged') {
        state.products = state.allProDucts.filter(
          product => product.is_redemption === false,
        );
      } else if (action.payload === 'all') {
        state.products = state.allProDucts;
      }
    },
  },
});

export const {setAllProducts, filterProductsByRedemtion, setCurrentProduct} =
  productsSlice.actions;
