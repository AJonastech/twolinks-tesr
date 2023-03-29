import React, { useEffect, useState } from 'react'
import {IoMdClose} from "react-icons/io"
import { motion } from 'framer-motion'
import { useContext } from 'react'
import { loginData } from '../App'
function LoginAlert() {
    const login = useContext(loginData)
  

    return (
      
          

          <div  id="warning" className='fixed bottom-20 w-full '>
        
       {
        login.loginWarning && <motion.div initial={{opacity: 0.5, scale: 0.5}} animate={{opacity:1, scale:1}} transition={{duration:0.1}} className='mx-auto rounded-md w-[200px] bg-login text-center py-2 text-md text-white'>
        <button onClick={()=>{login.setLoginWarning(false)}}><IoMdClose className='inline-block text-white mr-2'/> Please Log in First</button>
         </motion.div>
       }
   </div>
      
     
    )
}


export default LoginAlert
