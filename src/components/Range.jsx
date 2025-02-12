import React from "react";
import { Link } from "react-router";
import { range } from "../constants/range";
import { motion } from "motion/react";

function Range() {
  return (
    <div className="w-full h-fit max-w-screen-xl mx-auto flex flex-col items-center mt-16 mb-10 p-4">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true, amount: 0.5 }}
        className=" font-poppins text-lg md:text-2xl lg:text-3xl tracking-tight text-gray-800 font-normal"
      >
        Browse The Range
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true, amount: 0.5 }}
        className=" text-sm md:text-lg lg:text-xl text-gray-500 font-poppins font-normal mt-4 mb-8"
      >
        Discover our wide selection of Gems
      </motion.p>

      <ul className=" w-full h-fit grid grid-cols-3 gap-2 ">
        {range.map((item, index) => (
          <motion.li
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .5, delay: 0.6*index, ease: 'easeInOut' }}
          viewport={{ once: true, amount: 0.4 }}

          key={index}>
            <Link to={item.path} className="w-full h-full">
              <div className="flex flex-col items-center justify-center group hover:scale-105 transition-all duration-300">
                <div className="rounded-lg overflow-hidden group-hover:-translate-y-5 transition-all duration-300">
                  <img src={item.image} alt="" />
                </div>
                <h3 className="font-semibold text-sm md:text-lg lg:text-xl text-center font-poppins my-10 ">
                  {item.title}
                </h3>
              </div>
            </Link>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

export default Range;
