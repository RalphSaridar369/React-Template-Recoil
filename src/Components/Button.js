import Button from '@mui/material/Button';

const ButtonV = ({ text, onClick, ...props }) => {
    return (
        <Button onClick={onClick} variant="contained" {...props}>
            {text}
        </Button>
    )
}

export default ButtonV