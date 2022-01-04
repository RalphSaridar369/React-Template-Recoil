import React from 'react';
import { UserOutlined, EyeInvisibleOutlined, EyeTwoTone, LockOutlined } from '@ant-design/icons';
import {TextInput, PassInput} from '../../Components/TextInput/TextInput';
import Image from '../../Components/Image/Image';
import Container from '../../Components/Container/Container';

const Login = () => {
    return (
        <Container center column height="100vh">
            <Image 
            preview={false}
            src='./user-default.png'/>
            <TextInput placeholder="Username" prefix={<UserOutlined />} />
            <PassInput
                placeholder="Password"
                iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                prefix={<LockOutlined />}
            />
        </Container>
    )
}

export default Login
