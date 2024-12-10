import connectDb from "@/lib/db";

import User from "@/models/User";
import { NextResponse, NextRequest } from "next/server";

export const POST = async (request: NextRequest) => {
  const { email, password } = await request.json();

  console.log(email, password);

  // Create a DB Conenction
  await connectDb();

  const user = await User.findOne({ email });
  console.log(user);
  // const match = await bcrypt.compare(password, user.password);
  // console.log(match);
  if (user) {
    return NextResponse.json(
      { user: user, message: "Login successful" },
      { status: 201 }
    );
  } else {
    return NextResponse.json({ message: "Invalid user" }, { status: 401 });
  }
};
