"use server";
import Product from "../schemas/products";
import { IProduct } from "../types/products";

export async function createProductIntoDB(
  product: IProduct
): Promise<{ error: boolean; message: string } | undefined> {
  try {
    const newProduct = await Product.create(product);
    if (newProduct) {
      newProduct.lean(true);
      return newProduct.toObject({ getters: true });
    }
  } catch (error) {
    console.error("Error creating product:", error);
    return { error: true, message: "Error creating product" };
  }
}
