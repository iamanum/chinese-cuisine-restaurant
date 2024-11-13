/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-comment-textnodes */
"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from  "../../../variants";
import { Button } from "./ui/buttons";

const About = () => {
  return (
    <section
      className="grid grid-cols-1 xl:grid-cols-2 gap-x-[74px] p-8 md:p-12 xl:p-0 items-center"
      id="about"
    >
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="xl: pl-[135px]"
      >
        <h1 className="mb-9">
          Let's Talk about <span className="text-orange">CHINESE CUISINE</span>{" "}
        </h1>
        <p className="mb-8">
        Welcome to Chinese Cuisine, where we bring the rich flavors and vibrant traditions of China straight to your table. Our restaurant offers an authentic and unforgettable dining experience, showcasing a wide range of Chinese dishes crafted with the finest ingredients.
        </p>

        <p className="mb-10">
        At Chinese Cuisine, we believe in delivering not just food, but an experience. From our classic sweet and sour dishes to spicy Szechuan specialties, each plate is prepared with care, respect for tradition, and a dash of innovation. Whether you're a fan of dim sum, crispy duck, or hand-pulled noodles, we promise that every bite will transport you to the heart of Chinese culinary culture.
        </p>

        <p className="mb-11">
        Our chefs are passionate about creating high-quality meals that delight your senses, and we strive to ensure that every dish is a masterpiece. Whether you're joining us for a quick lunch, a special dinner, or a family celebration, we make sure that every guest feels welcomed and valued.
        </p>
        <Button> Read more</Button>
      </motion.div>
      <motion.div
        variants={fadeIn("center", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
      >
        <Image
          src="/about/img.png?timestamp=1"
          width={705}
          height={771}
          alt=""
          className="hidden xl:flex"
        />
      </motion.div>
    </section>
  );
};

export default About;