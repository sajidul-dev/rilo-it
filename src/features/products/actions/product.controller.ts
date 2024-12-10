"use server";
/* eslint-disable @typescript-eslint/no-explicit-any */
import connectDb from "@/lib/db";
import { createProductIntoDB } from "../db/product.service";
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
