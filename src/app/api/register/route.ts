/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";
import connectDb from "@/lib/db";
import User from "@/models/User";

export async function POST(req: any) {
  try {
    await connectDb();
    const { firstName, lastName, companyName, phone, email, password } =
      await req.json();
    // const hashedPassword = await bcrypt.hash(password, 10);
    // let hashed = null;
    // bcrypt.genSalt(10, function (err, salt) {
    //   bcrypt.hash("B4c0//", salt, function (err, hash) {
    //     // Store hash in your password DB.
    //     hashed = hash;
    //   });
    // });
    const user = await User.create({
      firstName,
      lastName,
      companyName,
      phone,
      email,
      password,
    });
    return NextResponse.json(
      { user, message: "User registered." },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
