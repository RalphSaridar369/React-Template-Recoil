import React, { useState } from 'react';
import { UserOutlined, EyeInvisibleOutlined, EyeTwoTone, LockOutlined } from '@ant-design/icons';
import { TextInput, PassInput } from '../../Components/TextInput/TextInput';
import Image from '../../Components/Image/Image';
import Container from '../../Components/Container/Container';
import Button from '../../Components/Button';
import { useRecoilState } from 'recoil';
import {  alert } from '../../shared/globalState';
import { Link, useHistory } from 'react-router-dom';
import { formValidator } from '../../helpers/formValidator';
import { DatePicker } from 'antd';
import moment from 'moment'

const Register = () => {
    const [alertData, setAlertData] = useRecoilState(alert)
    const [userCred, setUserCred] = useState({ username: '', password: '', confirmpassword:'' });
    const valueChange = (t, e) => {
        setUserCred({ ...userCred, [t]: e })
    }
    const history = useHistory()
    return (
        <>
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
                <DatePicker defaultValue={moment('2015/01/01', 'YYYY/MM/DD')} format={'YYYY/MM/DD'} />
                <PassInput
                    placeholder="Password"
                    iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                    prefix={<LockOutlined />}
                    value={userCred.password}
                    onChange={(e) => valueChange("password", e.target.value)}
                />
                <PassInput
                    placeholder="Confirm Password"
                    iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                    prefix={<LockOutlined />}
                    value={userCred.confirmpassword}
                    onChange={(e) => valueChange("confirmpassword", e.target.value)}
                />
                <Button text="Register" onClick={async() => {
                    let res = await formValidator(userCred, "login", () => {
                        setAlertData({text:'user created successfully', type:'success'})
                    })
                    if(typeof(res)=="object"){
                        setAlertData(res)
                    }
                }
                } type="primary" />
                <p style={{marginTop:'1rem'}}><Link to="/login">Already have an account? login here</Link></p>
            </Container>
        </>
    )
}

export default Register
