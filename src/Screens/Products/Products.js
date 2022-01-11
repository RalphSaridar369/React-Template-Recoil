import React, { useState } from 'react'
import { useRecoilState } from 'recoil'
import { alert } from '../../shared/globalState'
import DocPicker from '../../Components/DocumentPicker/DocPicker'
import './Products.scss';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import { validateDoc } from '../../helpers/documentValidator';

const Products = () => {
    const [alertData, setAlertData] = useRecoilState(alert)
    const [document, setDocument] = useState('');
    return (
        <div className='products__container'>
            <h3>Page to upload products </h3>
            <p>This page is for file/image upload</p>
            <DocPicker
                text="Upload doc"
                onChange={(e) => {
                    let res = validateDoc(e,"pdf");
                    if(!res){
                        window.alert("error in extension");
                        setDocument();
                    }
                    else
                        setDocument(e.target.files[0]);
                }}
                startIcon={<DeleteIcon/>}
                endIcon={<SendIcon/>} />
            <DocPicker
                text="Upload image"
                onChange={(e) => {
                    let res = validateDoc(e,"img");
                    if(!res){
                        window.alert("error in extension");
                        setDocument();
                    }
                    else
                        setDocument(e.target.files[0]);
                    console.log(e.target.files[0])
                }}/>
            <p onClick={()=>console.log(document)}>press here</p>
        </div>
    )
}

export default Products
