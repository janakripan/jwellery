import React from "react";
import MainCarousal from "./MainCarousal";
import gem from "../assets/gemstone in the dark.png";
import { AnimatePresence, motion } from "motion/react";


function Hero() {
  return (
    <main className="w-full h-fit overflow-hidden">
      <div className="h-screen w-full  bg-red-200 relative ">
        <MainCarousal />
        <AnimatePresence>
          <div className="w-full   absolute top-0 translate-y-[50vh] px-4">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
              className=" w-full max-w-screen-xl mx-auto py-8 px-8 md:px-20 backdrop-blur-lg bg-white/10 rounded-lg"
            >
              <h1 className=" text-2xl md:text-4xl  lg:text-5xl font-medium text-white  ">
                Check out our stunning collection of <br /> exquisite gemstones
              </h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
              viewport={{once:true, amount: 0.5}}
              className="w-full h-fit max-w-screen-xl mx-auto flex justify-end mt-4"
            >
              <button className=" py-5 px-16 rounded-lg text-lg font-poppins font-semibold text-white bg-[#22223B] ">
                Show More
              </button>
            </motion.div>
          </div>
        </AnimatePresence>
      </div>
      <div className="w-full h-fit py-10 flex items-center justify-center max-w-screen-xl mx-auto font-semibold  text-base md:text-lg font-poppins">
        New Arraival
      </div>
   
      <motion.div
      initial={{opacity:0 , y: 20}}
      whileInView={{opacity:1 , y:0}}
      transition={{duration: 0.5 , ease:'easeIn', delay:.1}}
      viewport={{once:true, amount: 0.5}}
        className="w-full h-[337px] flex justify-center bg-cover bg-center items-center overflow-hidden bg-black relative"
        style={{ backgroundImage: `url(${gem})` }}
      >
        <div className="absolute inset-0 bg-black flex items-center justify-center  bg-opacity-50">
          <motion.div
          initial={{opacity:0, y:10}}
          whileInView={{opacity:1 , y:0}}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.3 }}
          viewport={{once:true, amount: 0.5}}
          >
          <h2 className="text-white font-poppins text-xl text-center md:text-3xl lg:text-4xl  font-normal tracking-widest ">
            Explore beautiful gemstones from across the globe
          </h2>
          </motion.div>
        </div>
      </motion.div>
      
    </main>
  );
}

export default Hero;
