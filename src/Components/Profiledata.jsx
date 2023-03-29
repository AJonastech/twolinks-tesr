/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import user from "../Assets/Images/Users/Profile.svg"
import { useContext } from 'react'
import { themeData } from '../App';

function Profiledata({arr,status, checkLogin, login,timeOutId,setTimeOutId}) {

    const theme = useContext(themeData)
    return (
            <React.Fragment>
            <div style={{backgroundColor: theme.bgColor, color:theme.color, borderColor: theme.borderColor, borderWidth:"2px"}} className="relative w-full rounded-2xl overflow-hidden flex flex-col border-2 h-[400px] border-borderGray">
               <div className="bg-cardgray w-full h-[50%] "></div>
               <div className="flex items-end px-5 py-4  justify-between h-[50%]">
                 <div className="flex text-white text-sm items-center">
              
                 </div>
                 <div>
                  { status && <button  onClick={()=>{checkLogin(login,timeOutId,setTimeOutId)}}  style={{backgroundColor: theme.buttonColor}} className="text-white bg-blue px-8 py-1  rounded-md">
                     Follow
                   </button>}
                 </div>
               </div>
               <div className="absolute md:top-[150px] top-[160px] w-full">
                 <div className="flex flex-col mx-auto   w-[150px] items-center  ">
                   <div className="w-[80px]  md:w-[100px] border-2 border-borderGray h-[80px] md:h-[100px] rounded-full overflow-hidden">
                     <img
                       className="w-full h-full object-cover"
                       
                       src={status ? arr[0].image: user}
                       alt="profile Image"
                     />
                   </div>
                   <h3 className=" my-1 text-xl">{status ? arr[0].name : "" }</h3>
                   <p className="text-sm opacity-50 ">{status? `${arr[0].location.state}, ${arr[0].location.country}`:""}</p>
                   <p className="text-sm opacity-50 ">{status? arr[0].role_info.title: ""}</p>
                 </div>
               </div>
             </div>
          </React.Fragment>
        )
       }
  
    
    


export default Profiledata
