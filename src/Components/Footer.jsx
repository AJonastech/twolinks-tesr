import React from 'react'
import { useContext } from 'react'
import { themeData } from '../App';

function Footer() {
const theme = useContext(themeData);
    return (
        <footer style={{backgroundColor: theme.containerColor, borderTopColor: theme.borderColor, borderTopWidth: "2px"}} className='z-10 px-4  text-[14px]  w-full py-2 text-lightBlue bg-darkTheme flex justify-between  fixed bottom-0 right-0'> 
            <p>
               Privacy Policy Terms Of Services 

            </p>
            <p>
                &copy;&nbsp;-&nbsp;Twolink
            </p>
        </footer>
    )
}

export default Footer
