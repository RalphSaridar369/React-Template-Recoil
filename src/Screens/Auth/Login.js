import React, { useState } from 'react';
import { UserOutlined, EyeInvisibleOutlined, EyeTwoTone, LockOutlined } from '@ant-design/icons';
import { TextInput, PassInput } from '../../Components/TextInput/TextInput';
import Image from '../../Components/Image/Image';
import Container from '../../Components/Container/Container';
import Button from '../../Components/Button';
import { useRecoilState } from 'recoil';
import { usertoken, userdata, alert } from '../../shared/globalState';
import { Link, useHistory } from 'react-router-dom';
import { formValidator } from '../../helpers/formValidator';
import { encrypt } from '../../helpers/cryptoJs';
import { Box } from '@mui/material';

const Login = () => {
    const [userToken, setUserStateToken] = useRecoilState(usertoken);
    const [userData, setUserData] = useRecoilState(userdata);
    const [alertData, setAlertData] = useRecoilState(alert)
    const [userCred, setUserCred] = useState({ username: '', password: '' });
    const valueChange = (t, e) => {
        setUserCred({ ...userCred, [t]: e })
    }
    const history = useHistory()
    return (
        <>
            {/* <Container center column hidden margin="100px 30px"> */}

            <Box
                component="form"
                style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <Image
                    preview={false}
                    alt="Avatar logo"
                    src='./user-default.png' />
                <TextInput
                    label="Username"
                    value={userCred.username}
                    onChange={(e) => valueChange("username", e.target.value)}
                />
                <PassInput
                    label="Password"
                    value={userCred.password}
                    onChange={(e) => valueChange("password", e.target.value)}
                />
                <Button text="Login" onClick={async () => {
                    let res = await formValidator(userCred, "login", () => {
                        sessionStorage.setItem(process.env.REACT_APP_SECRET_TOKEN_KEY, encrypt("qwerty123"));
                        setUserStateToken(encrypt("qwerty123", process.env.REACT_APP_SECRET_CRYPTO_JS2))
                        setUserData({ name: "ralph", age: 23, job: 'software developer' })
                        history.push('/');
                    })
                    if (typeof (res) == "object") {
                        setAlertData(res)
                    }
                }
                } type="primary" />
                <p style={{ marginTop: '1rem' }}><Link to="/register">Don't have an account? register here</Link></p>
            </Box>
            {/* </Container> */}
        </>
    )
}

export default Login
