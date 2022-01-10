import React, {useEffect} from 'react';
import { useLocation } from "react-router-dom";

const HomeDetailed = () =>{
    const location = useLocation();
    useEffect(() => {
        console.log("STATE: ",location)
    }, [])
    return(
        <div>{location.state.name}</div>
    )
}

export default HomeDetailed