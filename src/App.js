import './App.css';
import Home from './component/Pages/Home';
import Tour from './component/Pages/Tour';
import Aboutus from './component/Pages/Aboutus';
import Contact from './component/Pages/Contact';
import Login from './component/Auth/login/Login';
import Signup from './component/Auth/login/Signup';
import LoginUser from './component/Auth/login/LoginUser';

import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom';
import { AuthProvider, useAuth } from './component/Auth/Auth';
import ProtectedRoute from './component/Auth/ProtectedRoute';


const Logout = () => {
  const Auth = useAuth();
  const navigate = useNavigate();
  Auth.logout(null);
  navigate('/login');

}

function App() {
  const Auth = useAuth();
  return (
    <>
    <AuthProvider>
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/logout" element={<Logout />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/loginuser" element={<LoginUser />}></Route>
      <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>}></Route>
      <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>}></Route>
      <Route path="/:id" element={<ProtectedRoute><Tour /></ProtectedRoute>}></Route>
      <Route path="/contact" element={<ProtectedRoute><Contact /></ProtectedRoute>}></Route>
      <Route path="/aboutus" element={<ProtectedRoute><Aboutus /></ProtectedRoute>}></Route>
    </Routes>
    </BrowserRouter>
    </AuthProvider>
    </>
   
  );
}

export default App;
