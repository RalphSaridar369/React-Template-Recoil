import React, { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { usertoken, userdata } from '../../shared/globalState'
import { Alert } from 'antd'

const Home = () => {
    // const {user} = useContext(AppContext) 
    const [ userToken ] = useRecoilState(usertoken)
    const [ userData ] = useRecoilState(userdata)
    useEffect(()=>{
    },[userData])
    return (
        <div>
            {userToken && <h1>Hello and welcome, I am {userData.name} and I am {userData.age}, I work as a {userData.job},{"\n"} this what you see right here is data fetched from the recoil, a library smoother and simpler than redux, after login I saved both token and user data in recoil state items called atoms, even if you refresh, data will still be showing.</h1>}
            Home pages
        </div>
    )
}

export default Home
