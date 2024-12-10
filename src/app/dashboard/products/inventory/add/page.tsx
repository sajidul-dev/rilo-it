"use server";
import AddProducts from "@/features/products/components/AddProducts";

const addInventory = () => {
  return (
    <div className="my-6">
      <AddProducts />
    </div>
  );
};

export default addInventory;
