import './App.css';
import LandingPage from './Pages/LandingPage';
import { Routes, Route } from "react-router-dom"
import User from './Pages/User';
import { createContext, useState } from 'react';
import { theme } from './utils';
import Jobs from './Pages/Jobs';
export const themeData= createContext();
function App() {
  const [darktheme, setDarkTheme] = useState(true);
  const currentTheme = darktheme ? 'primary': "secondary";
  const bgColor=theme[currentTheme].bgColor;
  const color = theme[currentTheme].color;
  const borderColor =theme[currentTheme].borderColor
  const containerColor = theme[currentTheme].containerColor;
  const buttonColor =  theme[currentTheme].buttonColor

  return (
    <themeData.Provider value={{ setDarkTheme,bgColor,darktheme, color,borderColor,containerColor, buttonColor}} >
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/user/:id" element={<User/>}/>
      <Route path="/jobs" element={<Jobs/>}/>
      </Routes>
    </themeData.Provider>
   
  );
}

export default App;
