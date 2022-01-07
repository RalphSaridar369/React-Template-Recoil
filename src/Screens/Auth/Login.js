import React, { useContext } from 'react';
import { UserOutlined, EyeInvisibleOutlined, EyeTwoTone, LockOutlined } from '@ant-design/icons';
import {TextInput, PassInput} from '../../Components/TextInput/TextInput';
import Image from '../../Components/Image/Image';
import Container from '../../Components/Container/Container';
import Button from '../../Components/Button';
import { AppContext } from '../../AppContext';

const Login = () => {
    const {setUserData} = useContext(AppContext);
    return (
        <Container center column hidden margin="100px 30px">
                <Image
                preview={false}
                src='./user-default.png'/>
                <TextInput placeholder="Username" prefix={<UserOutlined />} 
                onChange={(event) => {
                    setUserData(event.target.value,"username")
                  }}/>
                <PassInput
                    placeholder="Password"
                    iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                    prefix={<LockOutlined />}
                />
                <Button text="Login" onClick={()=>{
                    window.location.href = '/'
}} type="primary"/>
        </Container>
    )
}

export default Login
