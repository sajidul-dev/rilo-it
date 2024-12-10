/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Suspense, useState } from "react";
import { Spinner } from "@/components/Shared/Spinner/Spinner";

const schema = yup
  .object({
    email: yup.string().email(),
    password: yup.string().required(),
  })
  .required();

const Login = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data: any) => {
    setLoading(true);
    signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    })
      .then((result) => {
        if (result?.status === 200) {
          router.push("/dashboard");
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  if (loading) {
    return <Spinner />;
  }
  return (
    <Suspense fallback={<Spinner />}>
      <div className="flex justify-center items-center w-full ">
        <div className="w-[400] h-[600px] mx-auto bg-gray-400 rounded-lg shadow-lg p-6">
          <p className="font-bold text-center">Login</p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Label htmlFor="email" className="my-3">
              Email
            </Label>
            <Input type="email" {...register("email")} className="my-3"></Input>
            <Label htmlFor="email" className="my-3">
              Password
            </Label>
            <Input type="password" {...register("password")}></Input>
            <Button className="bg-gray-600 w-full my-4">Login</Button>
          </form>
          {(errors && errors.email?.message) || errors.password?.message}
          <p>
            Don&apos;t have an account?{" "}
            <Link href="/auth/register" className="font-bold">
              Register
            </Link>
          </p>
        </div>
      </div>
    </Suspense>
  );
};

export default Login;
