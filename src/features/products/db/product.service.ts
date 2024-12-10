/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";
import Product from "../schemas/products";
import { IProduct } from "../types/products";

export async function createProductIntoDB(product: IProduct): Promise<any> {
  try {
    const newProduct = await Product.create(product);
    if (newProduct) {
      return {
        error: false,
        product: JSON.stringify(newProduct),
        message: "Error creating product",
      };
    }
  } catch (error) {
    console.error("Error creating product:", error);
    return { error: true, message: "Error creating product" };
  }
}

export async function getProductFromDB(): Promise<any> {
  const products = await Product.find().lean();
  return JSON.stringify(products);
}

export async function deleteProductFromDB(id: string): Promise<any> {
  const product = await Product.findByIdAndDelete(id);
  return JSON.stringify(product);
}
