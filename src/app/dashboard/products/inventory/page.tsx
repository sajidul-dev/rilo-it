import { InventoryTable } from "@/components/Inventory/Inventory";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CiSquareChevLeft } from "react-icons/ci";
import { FaPlus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const data: Payment[] = [
  {
    id: "m5gr84i9",
    amount: 316,
    name: "success",
    email: "ken99@yahoo.com",
  },
  {
    id: "3u1reuv4",
    amount: 242,
    name: "success",
    email: "Abe45@gmail.com",
  },
  {
    id: "derv1ws0",
    amount: 837,
    name: "processing",
    email: "Monserrat44@gmail.com",
  },
  {
    id: "5kma53ae",
    amount: 874,
    name: "success",
    email: "Silas22@gmail.com",
  },
  {
    id: "m5gr84i9",
    amount: 316,
    name: "success",
    email: "ken99@yahoo.com",
  },
  {
    id: "3u1reuv4",
    amount: 242,
    name: "success",
    email: "Abe45@gmail.com",
  },
  {
    id: "derv1ws0",
    amount: 837,
    name: "processing",
    email: "Monserrat44@gmail.com",
  },
  {
    id: "5kma53ae",
    amount: 874,
    name: "success",
    email: "Silas22@gmail.com",
  },
  {
    id: "bhqecj4p",
    amount: 721,
    name: "failed",
    email: "carmella@hotmail.com",
  },
  {
    id: "derv1ws0",
    amount: 837,
    name: "processing",
    email: "Monserrat44@gmail.com",
  },
  {
    id: "5kma53ae",
    amount: 874,
    name: "success",
    email: "Silas22@gmail.com",
  },
  {
    id: "bhqecj4p",
    amount: 721,
    name: "failed",
    email: "carmella@hotmail.com",
  },
  {
    id: "derv1ws0",
    amount: 837,
    name: "processing",
    email: "Monserrat44@gmail.com",
  },
  {
    id: "5kma53ae",
    amount: 874,
    name: "success",
    email: "Silas22@gmail.com",
  },
  {
    id: "bhqecj4p",
    amount: 721,
    name: "failed",
    email: "carmella@hotmail.com",
  },
];

export type Payment = {
  id: string;
  amount: number;
  name: "pending" | "processing" | "success" | "failed";
  email: string;
};

const inventoryPage = () => {
  return (
    <div className="mt-6 p-6">
      <div className="my-6 flex justify-start items-center gap-4">
        <Link href="/dashboard" className="p-0">
          <CiSquareChevLeft className="text-3xl font-bold" />
        </Link>
        <p className="font-bold text">Inventory</p>
      </div>
      <div className="flex justify-end items-center gap-6">
        <Link
          href="/dashboard/products/inventory/add"
          className="bg-blue-500 p-[10px] rounded-lg flex justify-start items-center gap-3 w-40"
        >
          <FaPlus />
          Add inventory
        </Link>
        <Button className="" variant="destructive">
          <MdDelete />
          Delete
        </Button>
      </div>
      <InventoryTable />
    </div>
  );
};

export default inventoryPage;
