import {ProductData} from '@types';

export const filterProductsByRedemtion = (
  products: ProductData[],
  redemtion: boolean,
) => {
  return products.filter(product => product.is_redemption !== redemtion);
};
