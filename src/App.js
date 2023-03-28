import './App.css';
import LandingPage from './Pages/LandingPage';
import { Routes, Route } from "react-router-dom"
import User from './Pages/User';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/user/:id" element={<User/>}/>
    </Routes>
  );
}

export default App;
