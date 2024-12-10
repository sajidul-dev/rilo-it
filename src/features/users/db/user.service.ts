"use server";
import connectDb from "@/lib/db";
import User from "../schemas/user";

export async function createUserIntoDB(user: any) {
  try {
    await connectDb();
    const {
      firstName,
      lastName,
      companyName,
      phone,
      email,
      password,
      profilePic,
    } = user;
    const newUser = await User.create({
      firstName,
      lastName,
      companyName,
      phone,
      email,
      password,
      profilePic,
    });
    return {
      error: false,
      user: JSON.stringify(newUser),
      message: "User created",
    };
  } catch (error) {
    console.log("Error from Service:", error);
  }
}
