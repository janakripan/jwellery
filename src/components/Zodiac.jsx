import React from "react";
import { zodiac } from "../constants/zodiac";
import { Link } from "react-router";
import { AnimatePresence, motion } from "motion/react";

function Zodiac() {
  return (
    <div className="w-full max-w-screen-xl mx-auto h-fit flex flex-col items-center p-4 mt-16 ">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        className=" font-poppins text-lg md:text-2xl lg:text-3xl text-center  tracking-tight text-gray-800 font-normal"
      >
        Check out our awesome selection of zodiac-based gem specials!
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        className="text-sm  md:text-lg lg:text-xl text-center text-gray-500 font-poppins font-normal mt-4 mb-16"
      >
        Embrace the Mystique of Oud: Timeless Luxury and Exotic Elegance Await
      </motion.p>

      <ul className="w-full h-fit grid grid-cols-3">
        {zodiac.map((item, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2*index }}
            viewport={{ once: true, amount: 0.4 }}
            className="  "
          >
            <Link 
            className="h-full w-full">
              <div className="flex flex-col items-center hover:scale-105 group transition-all duration-300 ">
                <div className=" scale-90 rounded-lg w-fit h-fit bg-amber-300 overflow-hidden group-hover:-translate-y-5 transition-all duration-300 ">
                  <img src={item.image} alt="" />
                </div>

                <h4 className="text-sm  md:text-lg lg:text-xl font-semibold font-poppins text-gray-800 my-8 ">
                  {item.title}
                </h4>
              </div>
            </Link>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

export default Zodiac;
