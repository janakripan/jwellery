import React, { useContext, useState } from 'react'
import logo from '../assets/logoMain.png'
import SearchBar from './Shared/SearchBar'
import navbarIcons from '../constants/navbarIcons';
import { Link } from 'react-router';
import { navlinks } from '../constants/navlinks';
import MenuIcon from '@mui/icons-material/Menu';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import CloseIcon from '@mui/icons-material/Close';
import { motion, AnimatePresence  } from "motion/react"
import { easeIn, easeInOut, easeOut } from 'motion';
import CartContext from '../contexts/CartContext';
import { span } from 'motion/react-m';

function NavBar() {

    const [isOpen, setIsOpen] = useState(false)
    

    const toggleMenu = () => {
        setIsOpen(!isOpen); 
        
      };

      const listVariants = {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            type: "tween" ,
            staggerChildren: .25 , // Animates child items one after another
             ease: "easeIn"
          },
        },
      };
    
      // Variants for individual items
      const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1,
                    y: 0,
                    transition:{
                        type: "tween" ,
                        duration: .5,
                        ease: "easeInOut"
                    }
                 },
        
      };

    const handleSearchSubmit = (query) => {
        alert(`Searching for: ${query}`);
      };

      const {uniqueCartItems} = useContext(CartContext)


  return (
    <div className='w-full h-fit py-6 relative '>

        <div className="max-w-screen-xl h-fit mx-auto w-full  flex flex-row">
            <div className=' w-full lg:w-5/12 flex justify-between items-center  p-4 lg:pr-36'>
                <div>
                    <img src={logo} className='w-20  md:w-32 lg:scale-100' alt="logo" />
                </div>
                <div>
                    <h1 className='text-gray-900 text-2xl md:text-4xl  font-semibold font-merriweather-sans'>
                    Jewellery
                    </h1>
                </div>
                <div className=' lg:hidden flex flex-row items-center gap-x-2 overflow-hidden'>
                    <button className='text-gray-500'>
                        <PermIdentityOutlinedIcon/>
                    </button>
                    <button 
                    onClick={toggleMenu}
                    className='text-gray-500'
                    >
                       
                         <div className={`transition-transform duration-300 transform ${
                                                isOpen ? "scale-110 rotate-180" : "scale-100 rotate-0"
                                              }`}>
                        {isOpen ? (
                           <CloseIcon   /> 
                         ) : (
                           <MenuIcon   /> 
                         )}

                         </div>
                        
                    </button>
                    
                     
                    
                </div>
            </div>
            <div className='hidden w-7/12  lg:flex flex-col items-center justify-center'>

                <div className='w-full  flex justify-between items-center'>
                    <SearchBar
                    placeholder='Search Here'
                    onSubmit={handleSearchSubmit} 
                    searchStyles="w-full border-2 border-gray-200 "
                    />
                    <ul className='w-fit  flex flex-row ml-2 items-center gap-x-3'>
                        {navbarIcons.map((item, index) => (
                            <Link key={index} to={item.path}
                                className='p-4 relative text-gray-800  '
                            >
                                <item.icon />
                                {item.count === true &&(<span className=' absolute right-0 top-1 bg-red-400 p-1 px-2 flex items-center justify-center rounded-full text-xs whitespace-nowrap'>{uniqueCartItems.length}</span>)}
                            </Link>
                        ))}
                    </ul>



                </div>
                <div className='w-full  flex justify-between items-end'>

                    <ul className='w-full  flex flex-row items-end justify-between'>
                        {navlinks.map((item, index) => (
                            <Link key={index} to={item.path}>

                                <li className=' pt-4 text-gray-800  text-base font-poppins'>
                                    {item.title}
                                </li>

                            </Link>

                        ))}
                        
                    </ul>



                </div>
                
            </div>



        </div>  
        <div className={`lg:hidden z-50 w-10/12 md:w-6/12 h-full bg-white/100 flex flex-col  items-start absolute -bottom-32 right-0 transition-all duration-500 transform ${
                            isOpen ? 'translate-x-0' : 'translate-x-full'
                        }`} >

                            <SearchBar
                                placeholder='Search Here'
                                onSubmit={handleSearchSubmit} 
                                searchStyles="w-full ml-4 border-2 border-gray-200 mb-2 "
                            />
                            
                            <motion.ul
                            variants={listVariants}
                            initial="hidden"
                            animate={isOpen ? "visible" : "hidden"}
                             className=' w-full h-screen bg-white pb-16 gap-y-8'>
                            {navlinks.map((item, index) => (
                            < li
                               key={index}
                               
                                 className='  pl-8 w-full   hover:bg-gray-300 rounded-lg transition-all duration-300 
                                 text-gray-800  text-base font-poppins'>
                                    
                                <motion.div 
                                variants={itemVariants}
                                className='h-full w-full flex items-center'>
                                <Link className='w-full h-full py-6  flex flex-row  items-center ' to={item.path} >

                                
                                    {item.title}

                                </Link>
                                </motion.div>
                            <div className='w-full h-[1px] bg-gray-400 -4 '></div>
                          </li>

                        ))}
                            </motion.ul>
                            

        </div>
      
    </div>
  )
}

export default NavBar
