import React, { useState } from "react";
import { customslider } from "../../constants/customslider";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function SecondSlider() {
  const slides = customslider;
  const [currentIndex, setCurrentIndex] = useState(0); 
  const [isTransitioning, setIsTransitioning] = useState(false);


  
  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length); 
    }
  };

  
  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true); 
      setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    }
  };

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
  };

  return (
    <div className="absolute -right-1/3   h-fit w-fit  ">

<div className="relative w-full h-fit max-w-screen-xl mx-auto ">
     
     <div className="flex justify-center items-center space-x-4 ">
      
       <div className="flex-none w-1/3 translate-y-16 h-[582px] text-white scale-105 transition-all duration-500 ease-in-out flex items-center justify-center text-lg font-bold">
         <div className="relative w-full max-w-[404px] h-full overflow-x-hidden flex justify-center ">
           <img
             src={slides[(currentIndex + slides.length - 1) % slides.length].image}
             alt=""
             className={`h-full object-cover  transition-transform duration-500 ease-in-out ${  isTransitioning ? "opacity-5" : "opacity-100" }`}
             
             
             onTransitionEnd={handleTransitionEnd} 
           />
          <div className={`absolute z-50 bottom-10 left-10 w-7/12 flex flex-row items-end justify-between gap-2 ${  isTransitioning ? "opacity-5" : "opacity-100" }`}>

               <div className=" px-2 w-full pt-4 pb-8 h-fit bg-white/90">
                   <div className="flex flex-col gap-y-2">
                       <span className="text-xs text-gray-500 font-medium font-poppins flex flex-row items-center gap-x-1">
                       {slides[(currentIndex + slides.length - 1) % slides.length].id}
                       <div className="w-6 h-[1px] bg-gray-500"></div>
                       {slides[(currentIndex + slides.length - 1) % slides.length].description}
                       </span>

                       <div>
                       <h6 className="text-xl font-bold font-poppins text-gray-800">
                           {slides[(currentIndex + slides.length - 1) % slides.length].title}
                       </h6>
                   </div>

                   </div>
               </div>
               <button className=" aspect-square p-2 text-white bg-[#22223B] flex items-center justify-center hover:scale-110 transition-all duration-300">
                   <ArrowForwardIcon/>
               </button>

          </div>


         </div>
       </div>

     
       <div className="flex-none w-1/3 h-[486px] transition-all duration-500 ease-in-out flex items-center justify-center text-lg font-bold">
         <div className="relative w-full  max-w-[372px]  h-full overflow-hidden flex justify-center">
           <img
             src={slides[currentIndex].image}
             alt=""
             className={`h-full object-cover transition-all  duration-500 ease-in-out ${  isTransitioning ? "opacity-5" : "opacity-100" }`} 
             
             onTransitionEnd={handleTransitionEnd} 
           />
         </div>
       </div>

       
       <div className="flex-none w-1/3 h-[486px]  transition-all duration-500 ease-in-out flex items-center justify-center text-lg font-bold">
         <div className="relative w-full  max-w-[372px] h-full overflow-hidden">
           <img
             src={slides[(currentIndex + 1) % slides.length].image}
             alt=""
             className={`h-full object-cover transition-opacity duration-500 ease-in-out ${  isTransitioning ? "opacity-5" : "opacity-100" }`}
           
             onTransitionEnd={handleTransitionEnd} 
           />
         </div>
       </div>
     </div>

     
     <button
       onClick={prevSlide}
       className="hidden absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full hover:bg-gray-600"
     >
       Prev
     </button>

    
     <button
       onClick={nextSlide}
       className="absolute scale-90 hover:scale-100 transition-all duration-300  top-1/2 transform -translate-y-1/2 -translate-x-1/2 right-1/4 bg-white text-gray-700 p-3 rounded-full flex items-center justify-center shadow-lg "
     >
       <ArrowForwardIosIcon/>
     </button>

     
     <div className="absolute bottom-4 left-[500px] transform -translate-x-2/3 translate-y-14 flex space-x-2">
       {slides.map((_, index) => (
        <div className={`flex items-center justify-center p-1 rounded-full ${
            currentIndex === index ? "border-black border-[1px] " : ""
          } `}>
             <button
           key={index}
           onClick={() => {setCurrentIndex(index); setIsTransitioning(true)}}
           className={`w-3 h-3 rounded-full hover:scale-110 transition-all ${
             currentIndex === index ? "bg-black" : "bg-gray-400"
           }`}
         ></button>
        </div>
       ))}
     </div>
   </div>

    </div>
  );
}

export default SecondSlider;