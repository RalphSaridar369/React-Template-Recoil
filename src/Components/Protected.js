import React,{useEffect} from 'react'
import { useNavigate, Route } from 'react-router-dom';

const Protected = (props) => {
    const navigate = useNavigate();
    useEffect(()=>{
        if(!JSON.parse(localStorage.getItem("User"))){
            navigate('/login');
        }
    },[navigate])
    return (
        <Route
        {...props}
        element={props.element}/>
    )
}

export default Protected
