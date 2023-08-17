import { usePostProductMutation } from "@/redux/features/api/apiSlice";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

const ProductForm = ({ defaultValues }) => {
  const { register, handleSubmit } = useForm({ defaultValues });
  const [postProduct, { isLoading, isError, isSuccess }] =
    usePostProductMutation();

  const onSubmit = (data, event) => {
    event.preventDefault();
    postProduct(data);
    console.log(data);
  };

  const abc = [
    {
      "image":"https://www.cloud.ryanscomputers.com/cdn/products/medium/dynabook-tosh…",
      "productName": "Dynabook (Toshiba) Satellite Pro C40-G-13F",
      "category": "Laptop",
      "price": "31000",
      "status": "In Stock",
      "rating": "5",
    }
  ];

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mx-auto p-4 m-10 border rounded shadow"
    >
      {/* <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">Image:</label>
        <input type="file" {...register('image')} className="mt-1 p-1 border rounded w-full" />
      </div> */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">
          Image Link:
        </label>
        <input
          type="text"
          {...register("image")}
          className="mt-1 p-1 border rounded w-full"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">
          Product Name:
        </label>
        <input
          type="text"
          {...register("productName")}
          className="mt-1 p-1 border rounded w-full"
        />
      </div>
      {/* <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">Category:</label>
        <input type="text" {...register('category')} className="mt-1 p-1 border rounded w-full" />
      </div> */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">
          Category:
        </label>
        <select
          {...register("category")}
          className="mt-1 p-1 border rounded w-full"
        >
          <option value="Laptop">Laptop</option>
          <option value="Processor">Processor</option>
          <option value="RAM">RAM</option>
          <option value="Monitor">Monitor</option>
          <option value="Motherboard">Motherboard</option>
          <option value="Storage">Storage</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">
          Price:
        </label>
        <input
          type="number"
          {...register("price")}
          className="mt-1 p-1 border rounded w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">
          Status:
        </label>
        <select
          {...register("status")}
          className="mt-1 p-1 border rounded w-full"
        >
          <option value="In Stock">In Stock</option>
          <option value="Out of Stock">Out of Stock</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">
          Rating:
        </label>
        <input
          type="number"
          step="0.1"
          min="0"
          max="5"
          {...register("rating")}
          className="mt-1 p-1 border rounded w-full"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
      >
        Create Product
      </button>
    </form>
  );
};

export default ProductForm;
