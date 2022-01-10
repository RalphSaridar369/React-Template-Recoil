import React from 'react';
import Alert from '@mui/material/Alert';

export const AlertBox = ({text,type,...props}) =>{
    return(
        <Alert severity={type} {...props}>{text}</Alert>
    );
}
