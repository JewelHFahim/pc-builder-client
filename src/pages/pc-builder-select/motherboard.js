import { useGetProductsQuery } from "@/redux/features/api/apiSlice";
import { addToCart } from "@/redux/features/cart/cartSlice";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";

const MotherboardCollection = () => {
  const { data: products, isLoading, isFetching } = useGetProductsQuery();
  const dispatch = useDispatch();
  const router = useRouter();

  const handleAddToBuild = (product) => {
    dispatch(addToCart(product));
    toast.success("Added To Build");
    router.push("/pcbuilder");
  };

  if (isFetching) {
    return "Fetching...";
  }
  
  if (isLoading) {
    return "Loading...";
  }

  return (
    <div className="px-[15%] py-20">
      <h1 className="text-3xl mb-4 underline text-center py-4">
        Select Motherboard
      </h1>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-2">
        {products?.data?.map(
          (product, i) =>
            product.category === "Motherboard" && (
              <div
                key={i}
                className="flex max-w-md overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800"
              >
                <div className="relative object-cover object-center w-1/3 h-64 rounded-lg lg:h-full">
                  <Image src={product.image} alt="" fill={true} />
                </div>

                <div className="w-2/3 p-4 md:p-4">
                  <h1 className="text-xl font-bold text-gray-800 dark:text-white">
                    {product.productName}
                  </h1>

                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    category: {product.category}
                  </p>

                  <div className="flex mt-2 item-center items-center">
                    rating: {product.rating}
                    <svg
                      className="w-5 h-5 text-gray-700 fill-current dark:text-gray-300"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                    </svg>
                  </div>

                  <div className="flex justify-between mt-3 item-center">
                    <h1 className="text-lg font-bold text-gray-700 dark:text-gray-200 md:text-xl">
                      tk{product.price}
                    </h1>

                    <button
                      onClick={() => handleAddToBuild(product)}
                      className="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600"
                    >
                      Add To Build
                    </button>
                  </div>
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default MotherboardCollection;
