/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "../../../variants";

import Link from "next/link";
import { FaYoutube, FaInstagramSquare, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Map = () => {
  return (
    <>
      <motion.section
        id="more"
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="bg-footer bg-cover bg-no-repeat pt-16 text-white mt-20"
      >
        <div className="container mx-auto">
          {/* logo */}
          <div className="flex flex-col justify-between xl:flex-row">
            <div className="w-[300px] mb-8 xl:mb-0">
              <Link href="/">
                <Image src="/logo.png" width={90} height={36} alt="image" />
              </Link>
            </div>
            {/* grid Items */}
            <div className="flex-1 grid grid-cols-1 xl:grid-cols-3 gap-[50px] mb-8 xl:mb-16">
              {/* blog */}
              <div>
                <h4 className="font-semibold mb-5">Blog</h4>
                <ul className="flex flex-col gap-y-6 text-sm">
                  <li>
                    <Link href="/">
                      Stay up to date with the latest happenings, delicious
                      recipes, and exciting offers from Chinese Cuisine. Our
                      blog features everything from cooking tips to
                      behind-the-scenes looks at our restaurant. Check out our
                      latest posts for fresh inspiration and exclusive updates!
                    </Link>
                  </li>
                  <li>
                    <Link href="/">Latest Recipes and Cooking Tips</Link>
                  </li>
                  <li>
                    <Link href="/">Behind the Scenes at Chinese Cuisine</Link>
                  </li>
                  <li>
                    <Link href="/">Customer Stories and Reviews</Link>
                  </li>
                </ul>
              </div>
              {/* item */}
              <div>
                <h4 className="font-semibold mb-5">New Item</h4>
                <ul className="flex flex-col gap-y-6 text-sm">
                  <li>
                    <Link href="/">
                      We are always introducing exciting new dishes to our menu.
                      Explore our latest creations and seasonal specials that
                      bring fresh, bold flavors to your plate.
                    </Link>
                  </li>
                  <li>
                    <Link href="/">Signature Stir-Fried Noodles</Link>
                  </li>
                  <li>
                    <Link href="/">Szechuan Style Hot Pot</Link>
                  </li>
                  <li>
                    <Link href="/">Mango Pudding with Coconut</Link>
                  </li>
                </ul>
              </div>
              {/* social */}
              <div>
                <h4 className="font-semibold mb-5">Socials</h4>
                <ul className="flex gap-x-6 text-sm">
                  <li>
                    <Link href="/">
                      <FaYoutube fontSize={35} />
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <FaFacebook fontSize={35} />
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <FaInstagramSquare fontSize={35} />
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <FaXTwitter fontSize={35} />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* copyright text */}
          <div className="py-4 border-t border-white/10">
            <p className="text-white/60 text-center text-sm">
              Copyright &copy; CHINESE CUISINE 2024
            </p>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Map;
