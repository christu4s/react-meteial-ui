import React from 'react';
import { useAuth } from './Auth';
import { useNavigate } from 'react-router-dom';


const LogoutPage = () => {
    const Auth = useAuth();
    const navigate = useNavigate();
    Auth.logout(null);
    navigate('/login');
  
  }

export default LogoutPage