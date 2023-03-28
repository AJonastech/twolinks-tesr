import './App.css';
import LandingPage from './Pages/LandingPage';
import { Routes, Route } from "react-router-dom"
import User from './Pages/User';
import { createContext, useState } from 'react';
import { theme } from './utils';
export const themeData= createContext();
function App() {
  const [darktheme, setDarkTheme] = useState(true);
  const currentTheme = darktheme ? 'primary': "secondary";
  const bgColor=theme[currentTheme].bgColor;
  const color = theme[currentTheme].color;
  const borderColor =theme[currentTheme].borderColor
  const containerColor = theme[currentTheme].containerColor;

  return (
    <themeData.Provider value={{ setDarkTheme,bgColor,darktheme, color,borderColor,containerColor}} >
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/user/:id" element={<User/>}/>
      </Routes>
    </themeData.Provider>
   
  );
}

export default App;
