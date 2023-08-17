import Image from "next/image";
import React from "react";
import { FiCpu, FiMonitor } from "react-icons/fi";
import { BsDeviceSsd, BsFan, BsLaptop, BsMotherboard, BsSdCard } from "react-icons/bs";
import Link from "next/link";

const Category = () => {

  const datas = [
    {
      id: 1,
      img: <BsFan />,
      title: "Graphics Card",
      url: "/pc-builder-select/graphics-card",
    },
    {
      id: 2,
      img: <FiCpu />,
      title: "Processor",
      url: "/pc-builder-select/processor",
    },
    {
      id: 3,
      img: <BsDeviceSsd />,
      title: "RAM",
      url: "/pc-builder-select/ram",
    },
    {
      id: 4,
      img: <FiMonitor />,
      title: "Monitor",
      url: "/pc-builder-select/monitor",
    },
    {
      id: 5,
      img: <BsSdCard />,
      title: "SSD",
      url: "/pc-builder-select/ssd",
    },
    {
      id: 6,
      img: <BsMotherboard />,
      title: "Motherboard",
      url: "/pc-builder-select/motherboard",
    },
  ];

  return (
    <div>
      {/* px-[20%] mx-auto py-8 */}
      <section className="">
        <h2 className=" my-4 text-2xl font-semibold text-center uppercase ">
          Categories
        </h2>

        <div className="flex justify-center  w-full">
          <div className=" grid grid-cols-1  w-full">
            {datas.map((item, i) => (
              <div
                key={i}
                className="flex justify-between items-center w-full border-b py-4 pr-4"
              >
                <div className="flex items-center gap-4">
                  <div className="text-[50px]">{item.img}</div>
                  <h3 className="text-[20px]">{item.title}</h3>
                </div>

                <Link href={item.url}>
                  <button>Select</button>
                </Link>
              </div>
            ))}
          </div>
        </div>

      </section>
    </div>
  );
};

export default Category;
