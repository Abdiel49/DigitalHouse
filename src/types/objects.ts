export type ProductData = {
  createdAt: string;
  product: string;
  points: number;
  image: string;
  is_redemption: boolean;
  id: string;
};

export type ProductsFilterTypes = 'all' | 'winned' | 'exchanged';

export interface ProductsDataAPI {
  createdAt: string;
  product: string;
  points: number;
  image: string;
  is_redemption: boolean;
  id: string;
  from_account_id?: number;
  to_account_id?: number;
  amount?: number;
  verification_code?: string;
  reason?: string;
  query?: string;
  variables?: Variables;
  operationName?: string;
}

export interface Variables {}
