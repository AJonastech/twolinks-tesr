import React from 'react'
import logo from "../Assets/Images/logo-white.svg"
import {BsMoon} from "react-icons/bs"
function Nav() {
    return (
        <header className='z-10 w-full fixed border-b-2 border-borderGray h-[60px] bg-navDark flex justify-between items-center px-4 cursor-pointer'>
            <img className='h-[22px]' src={logo} alt="Company's Logo"/>
            <div className='flex items-center'>
             <button className='text-borderGray font-bold border-2 border-borderGray rounded-md py-2 px-2'>
                <BsMoon/>
             </button>
             <button className='ml-2 px-3 py-2 rounded-md text-white bg-blue'>
                Sign in
             </button>
            </div>
        </header>
    )
}

export default Nav
