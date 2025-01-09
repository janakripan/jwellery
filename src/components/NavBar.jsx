import React from 'react'
import logo from '../assets/logoNavbar.png'
import SearchBar from './Shared/SearchBar'
import navbarIcons from '../constants/navbarIcons';
import { Link } from 'react-router';
import { navlinks } from '../constants/navlinks';


function NavBar() {

    const handleSearchSubmit = (query) => {
        alert(`Searching for: ${query}`);
      };



  return (
    <div className='w-full h-fit py-6'>

        <div className="max-w-screen-xl h-fit mx-auto w-full  flex flex-row">
            <div className=' w-5/12 flex justify-between items-center  p-4 pr-36'>
                <div>
                    <img src={logo} alt="logo" />
                </div>
                <div>
                    <h1 className='text-gray-900 text-4xl font-semibold font-merriweather-sans'>
                    Jewellery
                    </h1>
                </div>
            </div>
            <div className='w-7/12  flex flex-col items-center justify-center'>

                <div className='w-full  flex justify-between items-center'>
                    <SearchBar
                    placeholder='Search Here'
                    onSubmit={handleSearchSubmit} 
                    searchStyles="w-full border-2 border-gray-200 "
                    />
                    <ul className='w-fit  flex flex-row ml-2 items-center gap-x-3'>
                        {navbarIcons.map((item, index) => (
                            <Link key={index} to={item.path}
                                className='p-4 text-gray-800  '
                            >
                                <item.icon />
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
      
    </div>
  )
}

export default NavBar
