import React from 'react'
import Footer from '../Components/Footer'
import Nav from '../Components/Nav'
import Profiledata from '../Components/Profiledata'
import {BsFlag} from "react-icons/bs"
import {useEffect, useState} from "react"
import axios from 'axios'
import {Link, useParams} from "react-router-dom"
import Skeleton,{SkeletonTheme} from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import UserProfilecard from '../Components/UserProfilecard'

function User() {
    const [user, setUser] = useState([]);
    const [loading, setLoading]= useState(true)
   
    const getId= useParams();
    
    useEffect(()=>{
        axios.get("https://twolink-json.onrender.com/users")
        .then(response=>{
            setUser(response.data)
            setLoading(false)
        })

        .catch((err)=>{
            console.log(err);
        })
    },[])
    console.log(user.filter((arr,id)=>arr.id===parseInt(getId.id)))
    return (
      <section>
        <Nav />
        <main className="z-0  bg-darkTheme px-5 w-full min-h-[100vh] py-2">
          {loading ? (
            <>
              <div className="w-full mt-[70px]">
                <Profiledata
                  arr={user.filter((arr, id) => arr.id === parseInt(getId.id))}
                  status={false}
                />
              </div>
              <section className="w-full text-white lg:flex mt-4">
                <div className="flex-col flex basis-2/3">
                  <div className="rounded-2xl px-3 py-2 min-h-[80px] mb-5 w-full border-2 border-borderGray">
                    <p className="text-[12px] text-lightBlue">BIO</p>
                    <p className="text-[12px] opacity-50 text-cardgray">
                      <SkeletonTheme baseColor="#6f99cd" highlightColor="#12253f">
                        <p>
                          <Skeleton count={3} height={30} />
                        </p>
                      </SkeletonTheme>
                    </p>
                  </div>
                  <div className="min-h-[250px] px-3 py-2 w-full rounded-2xl border-2 border-borderGray">
                    <p className="text-[12px] text-lightBlue">EXPERIENCE</p>
                    <p className="text-[12px] opacity-50 text-cardgray">
                      <Skeleton baseColor="#6f99cd" highlightColor="#12253f" height={100} />
                    </p>
                  </div>
                </div>
                <div className="flex lg:ml-5 flex-col basis-1/3">
                  <div className="w-full px-3 py-2 rounded-2xl mb-5  min-h-[150px] w-full border-2 border-borderGray">
                    <p className="text-[12px] text-lightBlue">SKILLS</p>
                  </div>
                  <div className="w-full px-3 py-2 rounded-2xl min-h-[400px] w-full border-2 border-borderGray">
                    <p className="text-lightBlue text-[12px]">
                      SIMILAR PROFILES
                    </p>
                    <div>
                        <Skeleton count={7} height={50} baseColor="#6f99cd" highlightColor="#12253f" />
                    </div>
                  </div>
                </div>
              </section>
            </>
          ) : (
            <>
              <div className="w-full mt-[70px]">
                <Profiledata
                  arr={user.filter((arr, id) => arr.id === parseInt(getId.id))}
                  status={true}
                />
              </div>
              <section className="w-full text-white lg:flex  mt-4">
                <div className="flex-col flex basis-2/3">
                  <div className="rounded-2xl px-3 py-2 min-h-[80px] mb-5 w-full border-2 border-borderGray">
                    <p className="text-[12px] text-lightBlue">BIO</p>
                    <p className="text-[12px] opacity-50 text-cardgray">
                      {
                        user.filter(
                          (arr, id) => arr.id === parseInt(getId.id)
                        )[0].bio
                      }
                    </p>
                  </div>
                  <div className="min-h-[250px] px-3 py-2 w-full rounded-2xl border-2 border-borderGray">
                    <p className="text-[12px] text-lightBlue">EXPERIENCE</p>
                    <p className="text-[12px] opacity-50 text-cardgray">
                      {
                        user.filter(
                          (arr, id) => arr.id === parseInt(getId.id)
                        )[0].experience
                      }
                    </p>
                  </div>
                </div>
                <div className="flex  lg:ml-5 flex-col basis-1/3">
                  <div className="w-full px-3 py-2 rounded-2xl mb-5  min-h-[150px] w-full border-2 border-borderGray">
                    <p className="text-[12px] text-lightBlue">SKILLS</p>
                    <div className='flex flex-wrap w-full py-2'>
                        {
                         user.filter((arr, id) => arr.id === parseInt(getId.id))[0].skills.map((arr,id)=>(
                            
                        <Link key={id} className="bg-button my-2 text-lightBlue px-4 hover:opacity-50 py-2 mx-1 rounded-full  text-[11px]">{arr}</Link>
                         ))
                        }
                    </div>
                  </div>
                  <div className="w-full px-3 py-2 rounded-2xl min-h-[400px] w-full border-2 border-borderGray">
                    <p className="text-lightBlue text-[12px]">
                      SIMILAR PROFILES
                    </p>
                    <div>
                        {
                            user.filter((arr,id)=>arr.id !== parseInt(getId.id) && id<= 7).map((arr,id)=>(
        <>
                               <UserProfilecard key={id} arr={arr}/>
                                
                                </>
                            ))
                        }
                    </div>
                  </div>
                </div>
              </section>
              <div className="mt-5 mb-[200px] text-lightBlue flex  items-center ">
                <BsFlag />
                <p className="ml-2">Report this user</p>
              </div>
            </>
          )}
        </main>
        <Footer />
      </section>
    );
}

export default User
