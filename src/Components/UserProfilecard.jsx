import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { themeData } from '../App';
function UserProfilecard({arr}) {
    const theme = useContext(themeData)
    return (
        <div className='flex w-full px-2 py-2 items-center justify-between'>
            <div className='flex  items-center'>
                <Link to={"/user/"+arr.id}>

                <img src={arr.image} className='rounded-full mr-5 w-[50px] h-[50px]' alt="user"/>
                </Link>
                <div>
                    <p  className='text-[13px] font-bold'>{arr.name}</p>
                    <p className='text-[11px]'>{arr.role_info.title}</p>
                </div>
            </div>
            <div>
                <button style={{backgroundColor:theme.buttonColor}}className='text-[12px] bg-blue text-cardgray px-2 py-2 rounded-md'>
                    Follow
                </button>
            </div>
        </div>
    )
}

export default UserProfilecard
