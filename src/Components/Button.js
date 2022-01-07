import { Button } from 'antd';

const ButtonV = ({ text, onClick, ...props }) => {
    return (
        <Button onClick={onClick} {...props}>
            {text}
        </Button>
    )
}

export default ButtonV