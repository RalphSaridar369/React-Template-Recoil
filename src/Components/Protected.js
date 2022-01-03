import React,{useEffect} from 'react'
import { useHistory,Route } from 'react-router-dom';

const Protected = ({children,...props}) => {
    const history = useHistory();
    useEffect(()=>{
        if(!JSON.parse(localStorage.getItem("User"))){
            history.push('/login');
            alert(1234)
        }
    },[history])
    return <Route {...props} render={() => children} />
}

export default Protected
