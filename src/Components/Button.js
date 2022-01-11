import Button from '@mui/material/Button';
import './Components.scss';

const ButtonV = ({ text, onClick, startIcon, endIcon, ...props }) => {
    return (
        <Button onClick={onClick}
            startIcon={startIcon}
            endIcon={endIcon} 
            variant="contained"
            className='button' {...props}>
            {text}
        </Button>
    )
}

export default ButtonV