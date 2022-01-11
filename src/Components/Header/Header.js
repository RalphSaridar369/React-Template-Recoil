import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Drawer } from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import CheckBoxOutlineBlankOutlinedIcon from '@mui/icons-material/CheckBoxOutlineBlankOutlined';
import { styles } from './HeaderStyle';
import { useRecoilState } from 'recoil';
import { usertoken } from '../../shared/globalState';
import { ClearAll } from '../../helpers/clearAll';


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
            icon: <HomeOutlinedIcon fontSize="large" sx={{color:'black'}} />,
            type: 'normal'
        },
    
        {
            name: 'Products',
            path: '/products',
            icon: <CheckBoxOutlineBlankOutlinedIcon fontSize="large" sx={{color:'black'}} />,
            type: 'logged'
        },
    
        {
            name: 'About',
            path: "/about",
            icon: <InfoOutlinedIcon fontSize="large" sx={{color:'black'}} />,
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
            icon: logged ? <LogoutOutlinedIcon fontSize="large" sx={{color:'black'}} /> : <LoginOutlinedIcon fontSize="large" sx={{color:'black'}} />,
            type: 'normal'
        },
    ]

    return (
        <>
        <div style={styles.header}>
            <Link to="/">
                <img src={require('./logo.png')} style={{ height: '80px', width: '80px' }} alt="Logo Image" />
            </Link>
            <a onClick={() => setOpen(!open)}>
                <MenuOutlinedIcon  fontSize="large" />
            </a>
            <Drawer
                anchor="right"
                onClose={() => setOpen(false)}
                open={open}
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
