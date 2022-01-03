import React from 'react';
import { UserOutlined, EyeInvisibleOutlined, EyeTwoTone, LockOutlined } from '@ant-design/icons';
import {TextInput, PassInput} from '../../Components/TextInput/TextInput';

const Login = () => {
    return (
        <div>
            <TextInput placeholder="Username" prefix={<UserOutlined />} />
            <PassInput
                placeholder="Password"
                iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                prefix={<LockOutlined />}
            />
        </div>
    )
}

export default Login
