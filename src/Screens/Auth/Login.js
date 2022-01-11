import React, { useState } from 'react';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { TextInput, PassInput } from '../../Components/TextInput/TextInput';
import Image from '../../Components/Image/Image';
import BackgroundImage from '../../Components/BackgroundImage';
import Button from '../../Components/Button';
import { useRecoilState } from 'recoil';
import { usertoken, userdata, alert } from '../../shared/globalState';
import { Link, useHistory } from 'react-router-dom';
import { formValidator } from '../../helpers/formValidator';
import { encrypt } from '../../helpers/cryptoJs';
import './Auth.scss';

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
            <BackgroundImage className='auth__container' bg='./bg.jpg'>
                <div className='login__container'>
                    <Image
                        alt="Avatar logo"
                        src='./user-default.png' />
                    <TextInput
                        label="Username"
                        value={userCred.username}
                        onChange={(e) => valueChange("username", e.target.value)}
                        startIcon={<PersonOutlineIcon />}
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
                    <p><Link to="/register"  className='login__container__link'>Don't have an account? register here</Link></p>
                </div>
            </BackgroundImage>
        </>
    )
}

export default Login
