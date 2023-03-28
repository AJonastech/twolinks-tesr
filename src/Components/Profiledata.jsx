/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import {Link } from "react-router-dom"
import user from "../Assets/Images/Users/Profile.svg"

function Profiledata({arr,status}) {
    return (
       
            <React.Fragment>
            <div className="relative w-full rounded-2xl overflow-hidden flex flex-col border-2 h-[400px] border-borderGray">
               <div className="bg-cardgray w-full h-[60%] "></div>
               <div className="flex items-end px-5 py-4 justify-between h-[40%]">
                 <div className="flex text-white text-sm items-center">
              
                 </div>
                 <div>
                   <button className="text-white bg-blue px-8 py-1 rounded-md">
                     Follow
                   </button>
                 </div>
               </div>
               <div className="absolute md:top-[190px] top-[200px] w-full">
                 <div className="flex flex-col mx-auto   w-[150px] items-center  ">
                   <div className="w-[80px]  md:w-[100px] border-2 border-borderGray h-[80px] md:h-[100px] rounded-full overflow-hidden">
                     <img
                       className="w-full h-full object-cover"
                       
                       src={status ? arr[0].image: user}
                       alt="profile Image"
                     />
                   </div>
                   <h3 className="text-white my-1 text-xl">{status ? arr[0].name : "" }</h3>
                   <p className="text-sm opacity-50 text-cardgray">{status? `${arr[0].location.state}, ${arr[0].location.country}`:""}</p>
                   <p className="text-sm opacity-50 text-cardgray">{status? arr[0].role_info.title: ""}</p>
                 </div>
               </div>
             </div>
          </React.Fragment>
        )
       }
  
    
    


export default Profiledata
