import React from 'react';
import { Input } from 'antd';
import './TextInput.css';

export const TextInput = (props) => {
    return (
        <Input className='textInput' placeholder={props.placeholder} prefix={props.prefix ? props.prefix : null} />
    )
}

export const PassInput = (props) => {
    return (
        <Input.Password className='textInput' placeholder={props.placeholder} prefix={props.prefix ? props.prefix : null} iconRender={props.iconRender} />
    )
}

const styles = {
    width:300
}