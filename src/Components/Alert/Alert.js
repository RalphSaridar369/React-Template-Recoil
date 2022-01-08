import React from 'react';
import { Alert } from 'antd';

export const AlertBox = ({text,type,...props}) =>{
    return(
        <>
        <Alert message={text} type={type} {...props}/>
        </>
    );
}
