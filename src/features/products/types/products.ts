export interface IProduct {
  name: string;
  SKU: string;
  type: string;
  availableQuantity: number;
}
export interface IProductResponse {
  error: boolean;
  message: string;
  product?: IProduct;
}
