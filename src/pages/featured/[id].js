import {
  LaptopDes,
  MonitorDes,
  MotherboardDes,
  ProcessorDes,
  RamDes,
  SSDDes,
} from "@/utils/des";
import Image from "next/image";
import { BsStarFill } from "react-icons/bs";

const ProductDetailsPage = ({ product }) => {
  return (
    <div className="mx-[22%] text-center">
      <div className="w-full h-[500px] relative">
        <Image src={product?.image} alt="" fill={true} />
      </div>
      <p className="text-lg mt-2">
        Category:
        <span className="font-semibold text-green-900">
          {product?.category}
        </span>
      </p>
      <h2 className="text-4xl my-2">{product?.productName}</h2>
      <h2 className="text-2xl my-2">Price: {product?.price} Tk</h2>
      <h2 className="text-2xl my-2 flex justify-center items-center gap-1">
        Rating: {product?.rating} <BsStarFill />
      </h2>

      {product.category == "Laptop" ? (
        <p className="pb-5 text-justify">{LaptopDes}</p>
      ) : product.category == "Processor" ? (
        <p className="pb-5 text-justify">{ProcessorDes}</p>
      ) : product.category == "Monitor" ? (
        <p className="pb-5 text-justify">{MonitorDes}</p>
      ) : product.category == "SSD" ? (
        <p className="pb-5 text-justify">{SSDDes}</p>
      ) : product.category == "RAM" ? (
        <p className="pb-5 text-justify">{RamDes}</p>
      ) : (
        <p className="pb-5 text-justify">{MotherboardDes}</p>
      )}
    </div>
  );
};

export default ProductDetailsPage;

export const getServerSideProps = async (context) => {
  const { params } = context;
  const res = await fetch(`https://rapid-pc-builder-server.vercel.app/product/${params.id}`);
  const data = await res.json();
  return {
    props: {
      product: data,
    },
  };
};
