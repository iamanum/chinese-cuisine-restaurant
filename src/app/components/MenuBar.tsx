"use client";
import Link from "next/link";
import Image from "next/image";

import { motion } from "framer-motion";

import { fadeIn } from "../../../variants";
import { IoIosArrowRoundForward } from "react-icons/io";

const menuBar = [
  {
    img: "/menu/item-4.jpg",
    title: "Ukrainian varenyky ",
    price: "$69.90",
  },

  {
    img: "/menu/item-2.jpg",
    title: "Ramen Chicken Noodle Soup ",
    price: "$70.00",
  },

  {
    img: "/menu/item-3.jpg",
    title: "Vegetable Manchurian",
    price: "$60.00",
  },

  {
    img: "/menu/item-1.jpg",
    title: "Cantonese Mooncake",
    price: "$50.00",
  },
];
const MenuBar = () => {
  return (
    <section className=" relative py-12 xl:py-24 bg-menu" id="menu">
      <div className="container mx-auto">
        <motion.div
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className=" max-w-[570px] mx-auto text-center xl:text-right"
        >
          <div>
            <h2 className="mb-3"> Favorite Menu</h2>
            <Link
              className="text-green flex justify-center items-center mb-16 xl:justify-end"
              href="/"
            >
              view all
              <IoIosArrowRoundForward className="text-3xl" />
            </Link>
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-1 gap-[30px] md:grid-cols-3 md:gap-[15px] xl:grid-cols-4"
        >
          {menuBar.map((item, index) => {
            return (
              <div
                key={index}
                className="max-w-[270px] bg-white shadow-2xl  mx-auto xl:mx-0 group"
              >
                <div className="overflow-hidden">
                  <Image
                    className="group-hover:scale-110 transition-all duration-300"
                    src={item.img}
                    width={270}
                    height={270}
                    alt="image"
                  />
                </div>
                <div className="pt-[20px] pb-[28px] px-[30px]">
                  <Link href="/">
                    <h3 className=" font-poppins text-black mb-[14px]">
                      {item.title}
                    </h3>
                  </Link>
                  <div className="text-xl font-poppins font-semibold text-orange ">
                    {item.price}
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default MenuBar;