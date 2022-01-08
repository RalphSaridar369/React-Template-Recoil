import React from 'react'
import { useRecoilState } from 'recoil'
import { alert } from '../../shared/globalState'

const Products = () => {
    const [alertData, setAlertData] = useRecoilState(alert)
    return (
        <div onClick={()=>setAlertData({text:"Successfully clicked",type:'success'})}>
            Products Page
        </div>
    )
}

export default Products
