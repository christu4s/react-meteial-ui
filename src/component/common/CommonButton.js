import React from 'react';
import { Button } from '@mui/material';

const CommonButton = ({variant,children, className}) => {
  return (
    <Button variant={variant} className={className}>{children}</Button>
  )
}

export default CommonButton