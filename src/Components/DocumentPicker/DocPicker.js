import React from 'react';
import {Button} from '@mui/material'

const DocPicker = ({startIcon,endIcon,...props}) => {
    return (
        <Button
            variant="contained"
            component="label"
            startIcon={startIcon}
            endIcon={endIcon}
        >
            Upload File
            <input
                type="file"
                hidden
                {...props}
            />
        </Button>
    )
}

export default DocPicker