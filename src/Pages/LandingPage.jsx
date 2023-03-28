import React from 'react'
import Footer from '../Components/Footer'
import Nav from '../Components/Nav'
import TestCard from '../Components/TestCard'
import Usercard from '../Components/Usercard'
import { useContext } from 'react'
import {  themeData } from '../App';

function LandingPage() {
const theme= useContext(themeData);
    return (
        
        <section>
            <Nav/>
            <main style={{backgroundColor: theme.bgColor, color:theme.color}} className={'z-0 px-5 w-full min-h-[100vh] py-2'}>
               <div style={{color:theme.color}} className='max-w-[778px] mt-[70px] w-100% mx-auto'>
                <Usercard/>
                <div style={{backgroundColor:  theme.containerColor}} className='w-full h-[4px] my-6  rounded-md'>  
                
               </div>
               <TestCard/>
               </div>
               
            </main>
            <Footer/>
        </section>
    )
}

export default LandingPage
