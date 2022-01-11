import React, {useState} from 'react';
import { TextField,IconButton,InputAdornment,OutlinedInput } from '@mui/material'; 
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import '../Components.scss';

const styles = {
    margin:'10px 0',
}

export const TextInput = ({startIcon,endIcon,...props}) => {
    return (
        <TextField style={styles} className="input" size="small" 
        InputProps={(startIcon || endIcon) && {
          startAdornment: <InputAdornment position="start">{startIcon}</InputAdornment>,
          endAdornment: <InputAdornment position="end">{endIcon}</InputAdornment>,
        }}{...props}/>
        )
}

export const PassInput = ({startIcon,endIcon,...props}) => {
        const [show,setShow] = useState(false)
    return (
        <TextField style={styles} className="input" size="small" 
        type={show?'text':'password'}
        InputProps={{
          startAdornment: startIcon && <InputAdornment position="start">{startIcon}</InputAdornment>,
          endAdornment: <InputAdornment position="end"><IconButton onClick={()=>setShow(!show)}>{show?<VisibilityOff />:<Visibility />}</IconButton></InputAdornment>,
        }}{...props}/>
        )
}
