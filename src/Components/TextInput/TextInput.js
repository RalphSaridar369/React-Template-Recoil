import React from 'react';
import { Input } from 'antd';
import './TextInput.css';

const styles = {
    maxWidth:'400px',
    margin:'10px 0',
}

export const TextInput = (props) => {
    return (
        <Input className='textInput' style={styles} {...props}/>
    )
}

export const PassInput = (props) => {
    return (
        <Input.Password className='textInput' style={styles} {...props}/>
    )
}
