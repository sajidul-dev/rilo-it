// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { NextAuthOptions } from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
// import bcrypt from "bcryptjs";

// import connectDb from "@/lib/db";
// import User from "@/models/User";

// export const authOptions: NextAuthOptions = {
//   providers: [
//     CredentialsProvider({
//       credentials: {
//         email: {},
//         password: {},
//       },
//       async authorize(credentials: any) {
//         if (credentials === null) return null;
//         await connectDb();
//         try {
//           const user = await User.findOne({
//             email: credentials?.email,
//           });
//           console.log(user);
//           if (user) {
//             const isMatch = await bcrypt.compare(
//               credentials.password,
//               user.password
//             );

//             if (isMatch) {
//               return user;
//             } else {
//               throw new Error("Email or Password is not correct");
//             }
//           } else {
//             throw new Error("User not found");
//           }
//         } catch (error: any) {
//           throw new Error(error);
//         }
//       },
//     }),
//   ],
//   pages: {
//     signIn: "/login",
//   },
//   session: {
//     strategy: "jwt",
//   },
//   callbacks: {
//     async session({ session, token }) {
//       if (session.user) {
//         session.user._id = token._id;
//         session.user.name = token.name;
//         session.user.email = token.email;
//       }
//       return session;
//     },
//   },

//   secret: process.env.NEXTAUTH_SECRET,
// };
