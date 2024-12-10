"use server";
/* eslint-disable @typescript-eslint/no-explicit-any */
import connectDb from "@/lib/db";
import {
  createProductIntoDB,
  deleteProductFromDB,
  getProductFromDB,
} from "../db/product.service";
import { IProduct } from "../types/products";

export async function createProduct(product: IProduct): Promise<any> {
  await connectDb();
  const newProduct = await createProductIntoDB(product);

  if (!newProduct) {
    return { error: true, message: "There was an error creating your product" };
  }
  return {
    error: false,
    message: "Product created successfully",
    product: newProduct,
  };
}

export async function getProducts(): Promise<any> {
  await connectDb();
  try {
    const products = await getProductFromDB();
    return {
      error: false,
      message: "Products fetched successfully",
      products,
    };
  } catch (error) {
    console.log(error);
    return { error: true, message: "There was an error fetching products" };
  }
}

export async function deleteProduct(id: string): Promise<any> {
  await connectDb();
  try {
    const product = await deleteProductFromDB(id);
    return {
      error: false,
      message: "Product deleted successfully",
      product,
    };
  } catch (error) {
    console.log(error);
    return { error: true, message: "There was an error deleting product" };
  }
}
