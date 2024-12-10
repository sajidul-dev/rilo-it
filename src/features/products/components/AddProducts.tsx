"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { createProduct } from "../actions/product.controller";
import { toast } from "react-toastify";
import { useState } from "react";
import { Spinner } from "@/components/Shared/Spinner/Spinner";

const schema = yup
  .object({
    name: yup.string().required(),
    SKU: yup.string().required(),
    type: yup.string().required(),
    availableQuantity: yup.number().required(),
  })
  .required();

const AddProducts = () => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [loading, setLoading] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const type = watch("type");
  const onSubmit = async (data: any) => {
    setLoading(true);
    const result = await createProduct(data);
    if (!result.error) {
      toast.success(result.message);
      reset();
      setLoading(false);
    }
  };

  if (loading) {
    return <Spinner />;
  }
  return (
    <div>
      <div className="w-full flex justify-end">
        <Button
          onClick={() => history.back()}
          variant="destructive"
          className="my-4 "
        >
          Cancel
        </Button>
      </div>
      <div className="flex justify-center items-center mt-10 w-full">
        <div className="w-full  mx-auto bg-gray-400 rounded-lg shadow-lg p-6">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              type="text"
              placeholder="Name"
              {...register("name", {
                required: {
                  value: true,
                  message: "Name is required",
                },
              })}
              className="my-3"
            ></Input>
            <Input
              type="text"
              placeholder="SKU"
              {...register("SKU", {
                required: {
                  value: true,
                  message: "SKU is required",
                },
              })}
            ></Input>
            <Input
              type="number"
              className="my-3"
              placeholder="Quantity"
              {...register("availableQuantity", {
                required: {
                  value: true,
                  message: "Quantity is required",
                },
              })}
            ></Input>
            <Select
              onValueChange={(value) => setValue("type", value)}
              name="typeSelect"
            >
              <SelectTrigger className="my-3 ">
                <SelectValue placeholder="Select a type" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="Single-Use">Single-Use </SelectItem>
                  <SelectItem value="Multi-Use">Multi-Use</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Button className="bg-gray-600 w-full my-4">Save</Button>
          </form>
          {(errors && errors.name?.message) || errors.SKU?.message}
        </div>
      </div>
    </div>
  );
};

export default AddProducts;
