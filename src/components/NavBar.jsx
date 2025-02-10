import React, { useContext, useEffect, useState } from "react";
import logo from "../assets/logoMain.png";
import SearchBar from "./Shared/SearchBar";
import navbarIcons from "../constants/navbarIcons";
import { Link, useNavigate } from "react-router";
import { navlinks } from "../constants/navlinks";
import MenuIcon from "@mui/icons-material/Menu";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import CloseIcon from "@mui/icons-material/Close";
import { AnimatePresence, motion } from "motion/react";
import CartContext from "../contexts/CartContext";
import CartCard from "./Shared/CartCard";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [startCardAnimations, setStartCardAnimations] = useState(false);

  const { totalPrice, cartItems } = useContext(CartContext);
  console.log(cartItems);

  const currency = cartItems.length > 0 ? cartItems[0].currency : "";

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const openCart = () => {
    setIsCartOpen(true);
    setStartCardAnimations(false);
    console.log(isCartOpen);
  };
  const closeCart = () => {
    setIsCartOpen(false);
    console.log(isCartOpen);
  };

  const handleCartAnimationComplete = () => {
   
    setStartCardAnimations(true);
  };

  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = ""; 
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isCartOpen]);

  const navigate = useNavigate();

  const goToCart = () => {
    navigate("/cart");
    setIsCartOpen(false);

  };
  

  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        type: "tween",
        staggerChildren: 0.25,
        ease: "easeIn",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "tween",
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const handleSearchSubmit = (query) => {
    alert(`Searching for: ${query}`);
  };


  return (
    <div className="w-full h-fit py-6   fixed top-0 z-50 bg-white shadow-md">
      <div className="max-w-screen-xl h-fit mx-auto w-full  flex flex-row ">
        <div className=" w-full lg:w-5/12 flex justify-between items-center  p-4 lg:pr-36">
          <div>
            <img src={logo} className="w-20  md:w-32 lg:scale-100" alt="logo" />
          </div>
          <div>
            <h1 className="text-gray-900 text-2xl md:text-4xl  font-semibold font-merriweather-sans">
              Jewellery
            </h1>
          </div>
          <div className=" lg:hidden flex flex-row items-center gap-x-2 overflow-hidden">
            <button className="text-gray-500">
              <PermIdentityOutlinedIcon />
            </button>
            <button onClick={toggleMenu} className="text-gray-500">
              <div
                className={`transition-transform duration-300 transform ${
                  isOpen ? "scale-110 rotate-180" : "scale-100 rotate-0"
                }`}
              >
                {isOpen ? <CloseIcon /> : <MenuIcon />}
              </div>
            </button>
          </div>
        </div>
        <div className="hidden w-7/12  lg:flex flex-col items-center justify-center">
          <div className="w-full  flex justify-between items-center">
            <SearchBar
              placeholder="Search Here"
              onSubmit={handleSearchSubmit}
              searchStyles="w-full border-2 border-gray-200 "
            />
            <ul className="w-fit  flex flex-row ml-2 items-center gap-x-3">
              {navbarIcons.map((item, index) => (
                <Link
                  key={index}
                  to={item.title === "cart" ? "#" : item.path}
                  onClick={() =>
                    item.title === "cart" ? openCart() : undefined
                  }
                  className="p-4 relative text-gray-800  "
                >
                  <item.icon />
                  {cartItems?.length > 0 && item.count === true && (
                    <span className=" absolute right-0 top-1 bg-red-400 p-1 px-2 flex items-center justify-center rounded-full text-xs whitespace-nowrap">
                      {cartItems.length}
                    </span>
                  )}
                </Link>
              ))}
            </ul>
          </div>
          <div className="w-full  flex  justify-between items-end">
            <ul className="w-full  flex flex-row items-end justify-between">
              {navlinks.map((item, index) => (
                <Link key={index} to={item.path}>
                  <li className=" pt-4 text-gray-800  text-base font-poppins">
                    {item.title}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* cart sidebar */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut", delay: 0.2 }}
              className={`w-full h-full bg-black/60 fixed inset-0 flex justify-end `}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              onAnimationComplete={handleCartAnimationComplete}
              className={`fixed top-0 right-0  w-11/12 md:w-8/12 lg:w-4/12 h-screen bg-white flex flex-col pt-4 transition-all duration-500 transform `}
            >
              <div className="w-full h-fit  flex justify-between items-center p-4 ">
                <h1 className="text-gray-900 font-semibold font-poppins text-base ">
                  Your Shopping Cart
                </h1>
                <div>
                  <button onClick={() => closeCart()}>
                    <CloseIcon />
                  </button>
                </div>
              </div>
              <div className=" w-full h-full flex flex-col mt-6 overflow-y-scroll hide-scrollbar p-4 ">
                <ul className="w-full h-full flex-col flex gap-3  ">
                  {cartItems.map((items, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: "100%" }}
                      animate={
                        startCardAnimations ? { opacity: 1, x: "0%" } : {}
                      }
                      exit={{ opacity: 0, x: "100%" }}
                      transition={{
                        duration: 0.5,
                        delay: 0.1 * index,
                        ease: "easeInOut",
                      }}
                    >
                      <CartCard items={items} />
                    </motion.div>
                  ))}
                </ul>
              </div>
              <div className="w-full h-fit bg-[#D0D0FF] p-6 ">
                <div className="flex w-full h-6  flex-row justify-center items-center  ">
                  <p className="text-[#2E2E50] font-poppins text-sm ">
                    Congrats! Your Delivery is{" "}
                    <span className="text-[#2E2E50] font-bold  font-poppins  ">
                      Free
                    </span>
                  </p>
                </div>
                <div className="w-full h-fit flex flex-row justify-between items-center py-3">
                  <p className="text-lg text-gray-800 font-bold ">
                    Total{" "}
                    <span className="font-poppins font-light text-xs">
                      (including Tax){" "}
                    </span>
                  </p>
                  <span className=" font-semibold font-poppins text-lg ">{totalPrice.toFixed(2)} {currency} </span>
                </div>
                <div className="flex flex-row w-full gap-2 ">
                  <button
                    onClick={() => goToCart()}
                    className="w-1/2 bg-[#22223B] py-4 text-white rounded-full font-poppins text-sm 
                  hover:scale-105 active:scale-95 transition-all duration-300 active:bg-[#3B3B66] "
                  >
                    View Cart
                  </button>
                  <button
                  onClick={()=>setIsCartOpen(false)}
                    className="w-1/2 border-2 py-4 rounded-full  border-[#22223B] text-[#22223B] font-poppins text-sm
                  hover:scale-105 active:scale-95 transition-all duration-300 "
                  >
                    Continue Shopping
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* mobile side bar */}
      <div
        className={`lg:hidden z-50 w-10/12 md:w-6/12 h-[70vh] bg-white/100 flex flex-col pt-4 items-start absolute top-32 rounded-b-lg shadow-lg right-0 transition-all duration-500 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <SearchBar
          placeholder="Search Here"
          onSubmit={handleSearchSubmit}
          searchStyles="w-full ml-4 border-2 border-gray-200 mb-2 "
        />

        <motion.ul
          variants={listVariants}
          initial="hidden"
          animate={isOpen ? "visible" : "hidden"}
          className=" w-full h-screen  pb-16 gap-y-8"
        >
          {navlinks.map((item, index) => (
            <li
              key={index}
              className="  pl-8 w-full   hover:bg-gray-300 rounded-lg transition-all duration-300 
                                 text-gray-800  text-base font-poppins"
            >
              <motion.div
                variants={itemVariants}
                className="h-full w-full flex items-center"
              >
                <Link
                  className="w-full h-full py-6  flex flex-row  items-center "
                  to={item.path}
                  onClick={(e) => handleClick(e)}
                >
                  {item.title}
                </Link>
              </motion.div>
              <div className="w-full h-[1px] bg-gray-400 -4 "></div>
            </li>
          ))}

          <div className="w-full mt-10 flex justify-around  ">
            {navbarIcons.map((item, index) => (
              <Link
                key={index}
                to={item.title === "cart" ? "#" : item.path}
                className="p-4 relative text-gray-800  "
                onClick={(e) => {
                  if (item.title === "cart") {
                    openCart();
                    handleClick(e);
                  }
                }}
              >
                <item.icon style={{ fontSize: "30px" }} />
                {cartItems?.length > 0 && item.count === true && (
                  <span className=" absolute right-0 top-1 bg-red-400 p-1 px-2 flex items-center justify-center rounded-full text-xs whitespace-nowrap">
                    {cartItems.length}
                  </span>
                )}
              </Link>
            ))}
          </div>
        </motion.ul>
      </div>
    </div>
  );
}

export default NavBar;
