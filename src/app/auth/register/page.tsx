/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createUser } from "@/features/users/actions/user.controller";
import axios from "axios";

const imgbbAPI = "f0ddb5ae9e19f834e7f7afe720c07d16";

const schema = yup
  .object({
    firstName: yup.string().required({
      message: "First name is required",
    }),
    lastName: yup.string().required({
      message: "Last name is required",
    }),
    companyName: yup.string().required({
      message: "Company name is required",
    }),
    phone: yup.string().required({
      message: "Phone number is required",
    }),
    email: yup.string().email().required({
      message: "Email is required",
    }),
    password: yup.string().required({
      message: "Password is required",
    }),
    profilePic: yup.mixed().optional(),
  })
  .required();

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const router = useRouter();
  const onSubmit = async (data: any) => {
    console.log(data);
    if (data.profilePic[0]) {
      const formData = new FormData();
      formData.append("image", data.profilePic[0]);
      axios
        .post(`https://api.imgbb.com/1/upload?key=${imgbbAPI}`, formData)
        .then((res) => {
          if (res.data) {
            console.log(res.data.data.display_url);
            createUser({ ...data, profilePic: res.data.data.display_url })
              .then((res) => {
                toast.success("Signup successful. Please login");
                router.push("/auth/login");
              })
              .catch((err) => {
                console.log(err);
              });
          }
        });
    } else {
      createUser({
        firstName: data.firstName,
        lastName: data.lastName,
        companyName: data.companyName,
        phone: data.phone,
        password: data.password,
        email: data.email,
        profilePic: "",
      })
        .then((res) => {
          toast.success("Signup successful. Please login");
          router.push("/auth/login");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <div className="flex justify-center items-center w-full ">
      <div className="w-[400px] mx-auto bg-gray-400 rounded-lg shadow-lg p-6">
        <p className="font-bold text-center">Register</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Label htmlFor="text" className="my-3">
            First Name
          </Label>
          <Input
            type="text"
            {...register("firstName")}
            className="my-3"
          ></Input>
          <Label htmlFor="text" className="my-3">
            Last Name
          </Label>
          <Input type="text" {...register("lastName")} className="my-3"></Input>
          <Label htmlFor="text" className="my-3">
            Company Name
          </Label>
          <Input
            type="text"
            {...register("companyName")}
            className="my-3"
          ></Input>
          <Label htmlFor="number" className="my-3">
            Contact Number
          </Label>
          <Input type="number" {...register("phone")} className="my-3"></Input>
          <Label htmlFor="email" className="my-3">
            Email
          </Label>
          <Input type="email" {...register("email")} className="my-3"></Input>
          <Label htmlFor="password" className="my-3">
            Password
          </Label>
          <Input type="password" {...register("password")}></Input>
          <Label htmlFor="picture">Picture</Label>
          <Input {...register("profilePic")} id="picture" type="file" />
          <Button className="bg-gray-600 w-full my-4">Register</Button>
        </form>
        <p>
          Already Registered? <Link href="/auth/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
