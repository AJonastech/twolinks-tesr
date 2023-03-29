/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import Profile from "../Assets/Images/Users/Profile.svg"
import { useEffect, useState } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import { useContext } from 'react'
import { themeData, loginData } from '../App';
import loadingUser from '../Assets/Images/Users/Profile.svg';
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function Usercard({checkLogin, login, timeOutId, setTimeOutId}) {
    const theme = useContext(themeData);
   
     //Initialises the state for the user
     const [user, setUser]=useState({});
     const [loading, setLoading]= useState(true);
  
       
    
     //This Fetches the first user from the user api
     useEffect(() => {
       axios
         .get("https://twolink-json.onrender.com/users/1")
         .then((response) => {
           setUser(response.data)
           setLoading(false)
         })
         .catch((err) => {
           console.log(err);
         });
     }, []);
    return (
      <div style={{borderColor: theme.borderColor, borderWidth: "1px"}} className="relative w-full rounded-2xl overflow-hidden flex flex-col h-[320px] ">
        <div className="bg-cardgray w-full h-[50%] "></div>
        <div style={{backgroundColor: theme.containerColor, color : theme.color}} className="flex items-end px-5 py-4 justify-between h-[50%]">
         {
          loading ? (   <div className="flex text-white text-sm items-center">
          <Link to={"/user/"+user.id}>
            <img
              className="w-[30px] rounded-full h-[30px]"
              src={loadingUser}
              alt="user's Image"
            />
            </Link>
             <Skeleton
                baseColor="#6f99cd"
                highlightColor="#e2ebf7"
                count={1}
                height={10}
              />
          </div>) :   ( <div className="flex text-white text-sm items-center">
          <Link to={"/user/"+user.id}>
            <img
              className="w-[30px] rounded-full h-[30px]"
              src={user.image}
              alt="user's Image"
            />
            </Link>
            <p style={{color: theme.color}} className="font-bold ml-2">{user.followers} followers</p>
          </div>)


         }
         
       
          <div>
            <button onClick={()=>{checkLogin(login,timeOutId,setTimeOutId)}} style={{backgroundColor: theme.buttonColor}} className="text-white bg-blue px-8 py-1 rounded-md">
              Follow
            </button>
          </div>
        </div>
        <div className="absolute top-[110px] w-full">
          <div className="flex flex-col mx-auto   w-[150px] items-center  ">
            <div className="w-[80px] border-2 border-borderGray h-[80px] rounded-md overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={Profile}
                alt="profile Image"
              />
            </div>
            <h3 style={{color:theme.color}}className="text-white my-2 text-xl">FastJobs</h3>
            <p className="text-sm text-cardgray font-bold ">Business Services</p>
          </div>
        </div>
      </div>
    );
}

export default Usercard
