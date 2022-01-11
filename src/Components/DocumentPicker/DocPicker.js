import React from 'react';
import {Button} from '@mui/material'
import '../Components.scss';

const DocPicker = ({startIcon,endIcon,text,...props}) => {
    return (
        <Button
            variant="contained"
            component="label"
            startIcon={startIcon}
            endIcon={endIcon}
            className='docpicker'
        >
            {text}
            <input
                type="file"
                hidden
                {...props}
            />
        </Button>
    )
}

export default DocPicker