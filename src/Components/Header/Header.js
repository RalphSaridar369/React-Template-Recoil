import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { Drawer } from 'antd';
import { MenuOutlined, HomeOutlined, InfoCircleOutlined, LoginOutlined, DropboxOutlined} from '@ant-design/icons'
import { styles } from './HeaderStyle';

const links = [
    {name:'Home',
    path:"/",
    icon:<HomeOutlined style={styles.drawerItemIcon}/>,
    type:'normal'},
    
    {name:'Products',
    path:'/products',
    icon:<DropboxOutlined style={styles.drawerItemIcon}/>,
    type:'logged'},
    
    {name:'About',
    path:"/about",
    icon:<InfoCircleOutlined style={styles.drawerItemIcon}/>,
    type:'normal'},
    
    {name:'Login',
    path:'/login',
    icon:<LoginOutlined style={styles.drawerItemIcon}/>,
    type:'normal'},
    
]

const Header = () => {
    const [open,setOpen] = useState(false);
    const [logged,setLogged] = useState(false);

    return (
        <div style={styles.header}>
            <Link to="/">
                <img src='./logo.png' style={{height:'80px',width:'80px'}}/>
            </Link>
            <a onClick={()=>setOpen(!open)}>
                <MenuOutlined style={styles.burgerIcon}/>
            </a>
            <Drawer
            title="Basic Drawer"
            placement="right"
            closable={true}
            onClose={()=>setOpen(false)}
            visible={open}
            key="right"
            >
                <div style={styles.drawerContainer}>
                {links.map((item,index)=> item.type=="logged"?
                    logged?
                     <Link to={item.path} key={index} onClick={()=>setOpen(false)} style={styles.drawerItemContainer}>
                        {item.icon}
                        <h3 style={styles.drawerItemText}>{item.name}</h3>
                    </Link>:
                    null:
                     <Link to={item.path} key={index} onClick={()=>setOpen(false)} style={styles.drawerItemContainer}>
                        {item.icon}
                        <h3 style={styles.drawerItemText}>{item.name}</h3>
                    </Link>
                    )}
                </div>
            </Drawer>
        </div>
    )


}


export default Header
