import React from 'react'
import Footer from '../Components/Footer'
import Nav from '../Components/Nav'
import TestCard from '../Components/TestCard'
import Usercard from '../Components/Usercard'
function LandingPage() {
   
    return (
        <section>
            <Nav/>
            <main className='z-0 bg-darkTheme px-5 w-full min-h-[100vh] py-2'>
               <div className='max-w-[778px] mt-[70px] w-100% mx-auto'>
                <Usercard/>
                <div className='w-full h-[4px] bg-borderGray my-6  rounded-md'>  
                
               </div>
               <TestCard/>
               </div>
               
            </main>
            <Footer/>
        </section>
    )
}

export default LandingPage
