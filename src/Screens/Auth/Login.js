import React, { useState } from 'react';
import { UserOutlined, EyeInvisibleOutlined, EyeTwoTone, LockOutlined } from '@ant-design/icons';
import { TextInput, PassInput } from '../../Components/TextInput/TextInput';
import Image from '../../Components/Image/Image';
import Container from '../../Components/Container/Container';
import Button from '../../Components/Button';
import { useRecoilState } from 'recoil';
import { usertoken, userdata } from '../../shared/globalState';
import { useHistory } from 'react-router-dom';
import { formValidator } from '../../helpers/formValidator';
import { encrypt } from '../../helpers/cryptoJs';

const Login = () => {
    const [userToken, setUserToken] = useRecoilState(usertoken)
    const [userData, setUserData] = useRecoilState(userdata)
    const [userCred, setUserCred] = useState({ username: '', password: '' })
    const valueChange = (t, e) => {
        setUserCred({ ...userCred, [t]: e })
    }
    const history = useHistory()
    return (
        <Container center column hidden margin="100px 30px">
            <Image
                preview={false}
                alt="Avatar logo"
                src='./user-default.png' />
            <TextInput
                placeholder="Username"
                prefix={<UserOutlined />}
                value={userCred.username}
                onChange={(e) => valueChange("username", e.target.value)}
            />
            <PassInput
                placeholder="Password"
                iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                prefix={<LockOutlined />}
                value={userCred.password}
                onChange={(e) => valueChange("password", e.target.value)}
            />
            <Button text="Login" onClick={() => formValidator(userCred, "login", () => {
                sessionStorage.setItem(process.env.REACT_APP_SECRET_TOKEN_KEY,encrypt("qwerty123"));
                setUserToken(encrypt("qwerty123",process.env.REACT_APP_SECRET_CRYPTO_JS2))
                setUserData({name:"ralph",age:23,job:'software developer'})
                history.push('/');
            })
            } type="primary" />
        </Container>
    )
}

export default Login
