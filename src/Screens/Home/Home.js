import React, { useEffect,useContext } from 'react'
import { AppContext } from '../../AppContext'

const Home = () => {
    const {user} = useContext(AppContext) 
    useEffect(()=>{
        console.log("USER:",user)
    })
    return (
        <div>
            Home pages
        </div>
    )
}

export default Home
