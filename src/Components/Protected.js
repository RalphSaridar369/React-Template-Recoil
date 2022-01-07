import React,{useContext, useEffect} from 'react'
import { useHistory,Route } from 'react-router-dom';
import { AppContext } from '../AppContext';

const Protected = ({children,...props}) => {
    const history = useHistory();
    const {userData} = useContext(AppContext)
    useEffect(()=>{
        if(userData.username.length<1)
            history.push('/login');
    },[history])
    return <Route {...props} render={() => children} />
}

export default Protected
