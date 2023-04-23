export type ProductData = {
  createdAt: string;
  product: string;
  points: number;
  image: string;
  is_redemption: boolean;
  id: string;
};

export type ProductsFilterTypes = 'all' | 'winned' | 'exchanged';
