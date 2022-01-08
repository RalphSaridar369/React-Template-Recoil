import React, { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Drawer } from 'antd';
import { MenuOutlined, HomeOutlined, InfoCircleOutlined, LoginOutlined, LogoutOutlined, DropboxOutlined } from '@ant-design/icons'
import { styles } from './HeaderStyle';
import { checkLogged } from '../../helpers/checkLogged';
import { useRecoilState } from 'recoil';
import { usertoken } from '../../shared/globalState';
import { ClearAll } from '../../helpers/clearAll';
import { AlertBox } from '../Alert/Alert';


const Header = () => {
    
    const [open, setOpen] = useState(false);
    const [logged, setLogged] = useState(false);
    const [userStateToken, setUserStateToken] = useRecoilState(usertoken)
    const userTokenRef = useRef(userStateToken);
    
    useEffect(() => {
        console.log("Header: ",userStateToken)
        userTokenRef.current = userStateToken;
        if(userTokenRef.current.length>0)
            setLogged(true)
        else
            setLogged(false)
    }, [userStateToken])


    const links = [
        {
            name: 'Home',
            path: "/",
            icon: <HomeOutlined style={styles.drawerItemIcon} />,
            type: 'normal'
        },
    
        {
            name: 'Products',
            path: '/products',
            icon: <DropboxOutlined style={styles.drawerItemIcon} />,
            type: 'logged'
        },
    
        {
            name: 'About',
            path: "/about",
            icon: <InfoCircleOutlined style={styles.drawerItemIcon} />,
            type: 'normal'
        },
    
        {
            name: logged ? 'Logout' : 'Login',
            path: logged ? '/' : '/login',
            onclick: () =>{
                if(logged){
                    ClearAll();
                    setUserStateToken('');
                    setLogged(false);
                }
                setOpen(false)
            },
            icon: logged ? <LogoutOutlined style={styles.drawerItemIcon} /> : <LoginOutlined style={styles.drawerItemIcon} />,
            type: 'normal'
        },
    ]

    return (
        <>
        <div style={styles.header}>
            <Link to="/">
                <img src='./logo.png' style={{ height: '80px', width: '80px' }} alt="Logo Image" />
            </Link>
            <a onClick={() => setOpen(!open)}>
                <MenuOutlined style={styles.burgerIcon} />
            </a>
            <Drawer
                title="Basic Drawer"
                placement="right"
                closable={true}
                onClose={() => setOpen(false)}
                visible={open}
                key="right"
            >
                <div style={styles.drawerContainer}>
                    {links.map((item, index) => item.type == "logged" ?
                        logged ?
                            <Link to={item.path} key={index} onClick={() => { item.onclick? item.onclick():setOpen(false) }} style={styles.drawerItemContainer}>
                                {item.icon}
                                <h3 style={styles.drawerItemText}>{item.name}</h3>
                            </Link> :
                            null :
                        <Link to={item.path} key={index} onClick={() => { item.onclick? item.onclick():setOpen(false) }} style={styles.drawerItemContainer}>
                            {item.icon}
                            <h3 style={styles.drawerItemText}>{item.name}</h3>
                        </Link>
                    )}
                </div>
            </Drawer>
        </div>
        </>
    )


}


export default Header
