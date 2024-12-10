"use server";
import connectDb from "@/lib/db";
import { createUserIntoDB } from "../db/user.service";

export async function createUser(user: any) {
  try {
    await connectDb();
    const newUser = await createUserIntoDB(user);
    if (!newUser) return { error: true, message: "User not created" };
    return { error: false, user: newUser, message: "User created" };
  } catch (error) {
    console.log("Error from controller:", error);
  }
}
