import React from 'react';
import { Input } from 'antd';
import { TextField } from '@mui/material' 

const styles = {
    maxWidth:'80%',
    minWidth:'20%',
    margin:'10px 0',
}

export const TextInput = (props) => {
    return (
        <TextField style={styles} size="small" {...props}/>
        )
}

export const PassInput = (props) => {
    return (
        <TextField style={styles} size="small" {...props}/>
    )
}
