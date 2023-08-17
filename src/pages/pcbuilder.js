import Category from "@/components/categories/Category";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RiCloseCircleLine } from "react-icons/ri";
import { MdOutlineDoneAll } from "react-icons/md";
import { removeSingle } from "@/redux/features/cart/cartSlice";
import { toast } from "react-hot-toast";

const PcBuilder = () => {
  const { products, total } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [render, setRender] = useState(null);

  const handleComplete = () => {
    toast.success("Completed");
  };

  useEffect(() => {
    if (products?.length >= 1) {
      setRender(true);
    }
    else{
      setRender(false)
    }
  }, [products?.length]);

  return (
    <div className="flex gap-5 pb-8">

      <div className={`${ render ? "w-[50%] mx-10" : "w-[100%] mx-[20%]" }`}>
        <Category />
      </div>

      <>
        {render && (
          <div className=" w-[50%] p-8 mt-8">
            <h1 className="border text-xl font-semibold w-[30%] my-4 p-1">
              Total: {total}
            </h1>

            <div className="grid grid-cols-1 gap-4">

              {products?.map((product, i) => (
                <div
                  key={i}
                  className="border rounded-md flex items-center justify-between overflow-hidden"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-[50px] h-[50px] relative">
                      <Image src={product?.image} alt="" fill={true} />
                    </div>
                    <div className="text-[12px] font-semibold">
                      {product?.productName.slice(0, 20)}
                    </div>
                  </div>

                  <div>
                    <p>Qnt: {product?.quantity} </p>
                  </div>

                  <div className="flex items-center gap-4">
                    <span>{product?.price}</span>
                    <button
                      className="mx-2 text-xl"
                      onClick={() => dispatch(removeSingle(product))}
                    >
                      <RiCloseCircleLine />
                    </button>
                  </div>
                </div>
              ))}

            </div>

            <div className="flex justify-end">
              {products?.length >= 5 ? (
                <button
                  onClick={handleComplete}
                  className="bg-[#1877F2] flex gap-x-3 text-sm sm:text-base items-center justify-center text-white rounded-lg  duration-300 transition-colors border border-transparent px-4 py-1 mt-4"
                >
                  <MdOutlineDoneAll />
                  <span>Complete Build</span>
                </button>
              ) : (
                <button className="bg-slate-600 cursor-not-allowed flex gap-x-3 text-sm sm:text-base items-center justify-center text-white rounded-lg  duration-300 transition-colors border border-transparent px-4 py-1 mt-4">
                  <MdOutlineDoneAll />
                  <span>Complete Build</span>
                </button>
              )}
            </div>
          </div>
        )}
      </>
    </div>
  );
};

export default PcBuilder;

{
  /*

            <div className="grid grid-cols-1 gap-4">

              {products?.map((product, i) => (
                <div
                  key={i}
                  className="border rounded-md flex items-center justify-between overflow-hidden"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-[50px] h-[50px] relative">
                      <Image src={product?.image} alt="" fill={true} />
                    </div>
                    <div className="text-[12px] font-semibold">
                      {product?.productName.slice(0, 20)}
                    </div>
                  </div>

                  <div>
                    <p>Qnt: {product?.quantity} </p>
                  </div>

                  <div className="flex items-center gap-4">
                    <span>{product?.price}</span>
                    <button
                      className="mx-2 text-xl"
                      onClick={() => dispatch(removeSingle(product))}
                    >
                      <RiCloseCircleLine />
                    </button>
                  </div>
                </div>
              ))}

            </div>

            <div className="flex justify-end">
              {products?.length >= 5 ? (
                <button
                  onClick={handleComplete}
                  className="bg-[#1877F2] flex gap-x-3 text-sm sm:text-base items-center justify-center text-white rounded-lg  duration-300 transition-colors border border-transparent px-4 py-1 mt-4"
                >
                  <MdOutlineDoneAll />
                  <span>Complete Build</span>
                </button>
              ) : (
                <button className="bg-slate-600 cursor-not-allowed flex gap-x-3 text-sm sm:text-base items-center justify-center text-white rounded-lg  duration-300 transition-colors border border-transparent px-4 py-1 mt-4">
                  <MdOutlineDoneAll />
                  <span>Complete Build</span>
                </button>
              )}
            </div>
            

*/
}
