import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './Auth';

const ProtectedRoute = ({children}) => {
  const auth = useAuth();
  const navigate = useNavigate();

  useEffect(()=>{
    console.log(auth);
    if(!auth.user) {
        navigate('/login');
    }
  }, [auth.user]);
  return children;
}

export default ProtectedRoute