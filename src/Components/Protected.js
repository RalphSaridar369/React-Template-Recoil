import React,{useState, useEffect} from 'react'
import { useHistory,Route } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { checkLogged } from '../helpers/checkLogged';
import { decrypt } from '../helpers/cryptoJs';
import { usertoken } from '../shared/globalState';
import { Redirect } from 'react-router-dom';

const Protected = ({children,...props}) => {
    const history = useHistory();
    const localtoken = sessionStorage.getItem(process.env.REACT_APP_SECRET_TOKEN_KEY)
    const [ userToken,setUserToken ] = useState('')
    const [ userStateToken, setUserStateToken ] = useRecoilState(usertoken)

    useEffect(()=>{
        if(!checkLogged(sessionStorage.getItem(process.env.REACT_APP_SECRET_TOKEN_KEY),userStateToken))
             history.push('/login');
        // if(localtoken === null || localtoken === "")
        //     history.push('/login');
        // else if(decrypt(localtoken) !== userStateToken)
        //     history.push('/login');
        else
            setUserToken(localtoken)
    },[localtoken, history, userStateToken])
    if(userToken.length>0)
        return <Route {...props} render={() => children} />
    else
        return <Redirect to="login" />
}

export default Protected
