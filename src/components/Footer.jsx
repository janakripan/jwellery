import React from 'react'
import bg from '../assets/footer bg.jpg'
import { help, links } from '../constants/footerlinks'
import { Link } from 'react-router'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';


const validationSchema = Yup.object({
  email: Yup.string()
  .email("Invalid Email address")  
  .required("Emai is required")
})

function Footer() {

  const handleSubmit = (values, {setSubmitting, resetForm})=>{
    
    console.log('Form Submitted:', values)
    setTimeout(() => {
      alert('Subscription successful!');
      setSubmitting(false);
      resetForm();
    }, 1000);
  }


  return (
    <div className='w-full h-fit relative  '
    style={{
      backgroundImage: `url(${bg})`,
      backgroundPosition: 'center'
    }}>
      <div className=' bg-white/90 w-full h-full   '>

        <div className=" w-full h-full max-w-screen-xl mx-auto py-12 flex flex-col gap-y-16 p-4 lg:flex-row justify-between">

          <div>
            <h3 className='font-bold font-poppins  text-gray-800 text-lg md:text-2xl '>
              Zodiac Temples
            </h3>

            <p className='text-gray-400 text-xs md:text-base mt-14 '>
            400 University Drive Suite 200 Coral <br /> Gables,
            <br />FL 33134  Qatar
            </p>

          </div>

          <ul className='flex flex-col justify-between items-start gap-y-6 lg:gap-y-12'>
            <h6 className='text-gray-500 text-sm md:text-base font-medium font-poppins '>
              Links
            </h6>
            {links.map((item,index)=>(
              <Link key={index}>
                <li className='font-poppins text-gray-800 text-xs md:text-sm  lg:text-base font-medium'>
                  {item.title}
                </li>
              </Link>
            ))}

          </ul>

          <ul className='flex flex-col items-start gap-y-6 lg:gap-y-12'>

          <h6 className='text-gray-500 text-sm md:text-base font-medium font-poppins '>
              Help
            </h6>
            {help.map((item,index)=>(
              <Link key={index}>
                <li className='font-poppins text-xs md:text-sm  lg:text-base text-gray-800 font-medium'>
                  {item.title}
                </li>
              </Link>
            ))}

          </ul>
          <div>
            <h6 className='text-gray-500 text-sm md:text-base font-medium font-poppins mb-6 lg:mb-12 '>
              Newsletter
            </h6>

            <Formik
            initialValues={{ email: '' }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            >
              {({isSubmitting})=>(
                <Form  className='flex flex-row items-center '>
                  <div>
                    <Field
                     type="email"
                     id="email"
                     name="email"
                     placeholder="Enter Your Email Address"
                     className="w-full px-2  bg-transparent text-gray-800  focus:outline-none relative "
                    />
                    <div className='w-full h-[1.5px] bg-gray-800 '></div>
                     <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-500 text-sm mt-1 absolute "
                      />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-fit py-2 px-2  font-medium text-gray-800 transition-all
                    ${isSubmitting ? ' cursor-not-allowed' : ' hover:scale-110 '}
                    `}
                    >
                    {isSubmitting ? 'Submitting...' : 'SUBSCRIBE'}
                    <div className='w-full h-[1.5px] bg-gray-800 '>

                    </div>
                  </button>
                </Form>
              )}


            </Formik>

          </div>

        </div>
        <div className='w-full h-fit max-w-screen-xl mx-auto'>
          <div className="w-full h-[.5px] bg-gray-400  "></div>

          <div className='w-fit px-4  py-8'>
          2024 Zodiac Temples. All rights reserved
          </div>

        </div>

      </div>
      
    </div>
  )
}

export default Footer
