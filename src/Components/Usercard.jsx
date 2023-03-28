/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import Profile from "../Assets/Images/Users/Profile.svg"
import { useEffect, useState } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
function Usercard() {
     //Initialises the state for the user
     const [user, setUser]=useState({});
    
     //This Fetches the first user from the user api
     useEffect(() => {
       axios
         .get("https://twolink-json.onrender.com/users/1")
         .then((response) => {
           setUser(response.data)
         })
         .catch((err) => {
           console.log(err);
         });
     }, []);
    return (
      <div className="relative w-full rounded-2xl overflow-hidden flex flex-col border-2 h-[320px] border-borderGray">
        <div className="bg-cardgray w-full h-[50%] "></div>
        <div className="flex items-end px-5 py-4 justify-between h-[50%]">
          <div className="flex text-white text-sm items-center">
          <Link to={"/user/"+user.id}>
            <img
              className="w-[30px] rounded-full h-[30px]"
              src={user.image}
              alt="user's Image"
            />
            </Link>
            <p className="font-bold ml-2">{user.followers} followers</p>
          </div>
          <div>
            <button className="text-white bg-blue px-8 py-1 rounded-md">
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
            <h3 className="text-white my-2 text-xl">FastJobs</h3>
            <p className="text-sm text-cardgray">Business Services</p>
          </div>
        </div>
      </div>
    );
}

export default Usercard