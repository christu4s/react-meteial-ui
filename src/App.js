import './App.css';
import Home from './component/Pages/Home';
import Tour from './component/Pages/Tour';
import Aboutus from './component/Pages/Aboutus';
import Contact from './component/Pages/Contact';
import Login from './component/Auth/login/Login';
import Signup from './component/Auth/login/Signup';
import LoginUser from './component/Auth/login/LoginUser';

import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/logout" element={<Login />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/loginuser" element={<LoginUser />}></Route>
      <Route path="/" element={<Home />}></Route>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/:id" element={<Tour />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/aboutus" element={<Aboutus />}></Route>
    </Routes>
    </BrowserRouter>
     
    </>
   
  );
}

export default App;
