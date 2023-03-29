import React from 'react'
import Footer from '../Components/Footer'
import Nav from '../Components/Nav'
import TestCard from '../Components/TestCard'
import Usercard from '../Components/Usercard'
import { useContext, useState } from 'react'
import {  themeData, loginData} from '../App';
import LoginAlert from '../Components/LoginAlert'
import { checkLogin } from '../utils'

function LandingPage() {
const theme= useContext(themeData);
const login = useContext(loginData);
const [timeOutId, setTimeOutId] = useState(null)

    return (
        
        <section>
            <Nav showJob={false}/>
            <main style={{backgroundColor: theme.containerColor, color:theme.color}} className='z-0 px-5 w-full min-h-[100vh] py-2'>
               <div style={{color:theme.color,backgroundColor: theme.containerColor }} className='max-w-[778px] mt-[70px] w-100% mx-auto'>
                <Usercard checkLogin={checkLogin} login={login} timeOutId={timeOutId} setTimeOutId={setTimeOutId}/>
                <div style={{backgroundColor:  theme.borderColor}} className='w-full h-[4px] my-6  rounded-md'>  
                
               </div>
               <TestCard checkLogin={checkLogin} login={login} timeOutId={timeOutId} setTimeOutId={setTimeOutId}/>
               </div>
               <br/>
               <br/>
            </main>
            <Footer/>
            <LoginAlert/>
        </section>
    )
}

export default LandingPage
