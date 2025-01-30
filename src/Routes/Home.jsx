import React from 'react'
import Hero from '../components/Hero'
import Zodiac from '../components/Zodiac'
import Range from '../components/Range'
import Products from '../components/Products'
import GiftSet from '../components/GiftSet'
import Snap from '../components/Snap'

function Home() {
  return (
   <main className='bg-[#F2E9E4]  overflow-x-hidden'>

      
    <section>
    <Hero/>
   </section>

    <section>
     <Zodiac/>
   </section>

    <section>
     <Range/>
    </section>

    <section>
     <Products/>
    </section>

    <section className='bg-white w-full h-fit relative '>
     <GiftSet/>
    </section>

     <section>
    <Snap/>
    </section>  {/**/}



   </main>
  )
}

export default Home
