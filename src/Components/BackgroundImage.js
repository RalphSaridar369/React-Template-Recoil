import React from 'react';

const BG = ({ children,className, ...props }) => {

    const styles = {
        display: 'flex',
        flexDirection: props.row ? 'row' : 'column',
        ...props.margin && { margin: props.margin },
        ...props.padding && { padding: props.padding },
        ...props.center && { alignItems: 'center', justifyContent: 'center' },
        ...props.centerV && { alignItems: 'center' },
        ...props.centerH && { justifyContent: 'center' },
        ...props.space && { justifyContent: 'space-between' },
        height: props.height ? props.height : '100vh',
        width: props.width ? props.width : '100vw',
        ...props.color && { backgroundColor: props.color },
        ...props.bg && {
            backgroundImage: `url(${props.bg})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
        }
    }
    return (
        <div className={className} style={styles}>
            {children}
        </div>
    )
}

export default BG