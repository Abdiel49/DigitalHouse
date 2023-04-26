import {ProductData, ProductsFilterTypes} from './objects';

export interface ProductProps {
  product: ProductData;
  onPress?: (product: ProductData) => void;
}

export interface FilterButtonsProps {
  onChangeFilter?: (filter: ProductsFilterTypes) => void;
}

export type PointsCartProps = {
  mounth: string;
  points: number;
};
