import React from "react";
import logo from "../Assets/Images/logo-white.svg";
import logowhite from "../Assets/Images/logo-colored.svg";
import { BsMoon } from "react-icons/bs";
import { useContext } from "react";
import { themeData } from "../App";
import { FiSun } from "react-icons/fi";
function Nav() {
  const theme = useContext(themeData);
  return (
    <header
      style={{ backgroundColor: theme.containerColor, borderBottomColor:theme.borderColor, borderBottomWidth: "2px" }}
      className="z-10 w-full fixed  h-[60px] bg-navDark flex justify-between items-center px-4 cursor-pointer"
    >
      <img
        className="h-[22px]"
        src={theme.darktheme === true ? logo : logowhite}
        alt="Company's Logo"
      />
      <div className="flex items-center">
        
          {theme.darktheme ? <button onClick={()=>{console.log(theme.darktheme);theme.setDarkTheme(false)}} style={{backgroundColor:theme.bgColor}} className="outline-none text-cardgray font-bold border-2 border-borderGray rounded-md py-2 px-2"><BsMoon /> </button>: <button onClick={()=>{theme.setDarkTheme(true)}}style={{backgroundColor:theme.bgColor}} className="text-borderGray font-bold border-2 border-borderGray rounded-md py-2 px-2"><FiSun/> </button>}
        
        <button className="ml-2 px-3 py-2 rounded-md text-white bg-blue">
          Sign in
        </button>
      </div>
    </header>
  );
}

export default Nav;
