import {ProductData, ProductsDataAPI} from '@types';

export const getProducts = async (url: string): Promise<ProductData[]> => {
  const json = await fetch(url);
  const dataApi = (await json.json()) as ProductsDataAPI[];

  const productsParced: ProductData[] = dataApi.map(product => {
    return {
      createdAt: product.createdAt,
      id: product.id,
      image: product.image,
      is_redemption: product.is_redemption,
      points: product.points,
      product: product.product,
    };
  });

  return productsParced;
};
