import {ProductData, ProductsFilterTypes} from './objects';

export interface ProductProps {
  product: ProductData;
}

export interface FilterButtonsProps {
  onChangeFilter?: (filter: ProductsFilterTypes) => void;
}
