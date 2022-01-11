import React, {useEffect} from 'react';
import { useLocation } from "react-router-dom";

const HomeDetailed = () =>{
    const location = useLocation();
    useEffect(() => {
        console.log("STATE: ",location)
    }, [])
    return(
            <div className='home__container'>
                <h1>Here I am getting data from state sent via route</h1>
                <div>{location.state.name}</div>
            </div>
    )
}

export default HomeDetailed