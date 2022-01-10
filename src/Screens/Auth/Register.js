import React, { useState } from 'react';
import { TextInput, PassInput } from '../../Components/TextInput/TextInput';
import Image from '../../Components/Image/Image';
import Container from '../../Components/Container/Container';
import BackgroundImage from '../../Components/BackgroundImage';
import Button from '../../Components/Button';
import { useRecoilState } from 'recoil';
import { alert } from '../../shared/globalState';
import { Link, useHistory } from 'react-router-dom';
import { formValidator } from '../../helpers/formValidator';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import './Auth.scss';

const Register = () => {
    const [alertData, setAlertData] = useRecoilState(alert)
    const [userCred, setUserCred] = useState({ username: '', password: '', confirmpassword: '', dateOfBirth: null });
    const valueChange = (t, e) => {
        setUserCred({ ...userCred, [t]: e })
    }
    const history = useHistory()
    return (
        <>
        <BackgroundImage className='auth__container' bg='./bg.jpg'>
            <div className='login__container'>
                <Image
                    preview={false}
                    alt="Avatar logo"
                    src='./user-default.png' />
                <TextInput
                    label="Username"
                    value={userCred.username}
                    onChange={(e) => valueChange("username", e.target.value)}
                />
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                        disableFuture
                        label="Date of birth"
                        openTo="year"
                        views={['year', 'month', 'day']}
                        value={userCred.dateOfBirth}
                        onChange={(newValue) => {
                            valueChange("dateOfBirth",newValue);
                        }}
                        renderInput={(params) => <TextInput {...params} />}
                    />
                </LocalizationProvider>
                <PassInput
                    label="Password"
                    value={userCred.password}
                    onChange={(e) => valueChange("password", e.target.value)}
                />
                <PassInput
                    label="Confirm Password"
                    value={userCred.confirmpassword}
                    onChange={(e) => valueChange("confirmpassword", e.target.value)}
                />
                <Button text="Register" onClick={async () => {
                    let res = await formValidator(userCred, "login", () => {
                        setAlertData({ text: 'user created successfully', type: 'success' })
                    })
                    if (typeof (res) == "object") {
                        setAlertData(res)
                    }
                }
                } type="primary" />
                <p className='login__container__link'><Link to="/login">Already have an account? login here</Link></p>
            </div>
            </BackgroundImage>
        </>
    )
}

export default Register
