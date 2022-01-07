import React from 'react';

const Container = ({children,...props}) =>{

    const styles = {
        display:'flex',
        flexDirection:props.row?'row':'column',
        ...props.center?{margin:props.margin}:{margin:'40px 30px'},
        ...props.center && {alignItems:'center',justifyContent:'center'},
        ...props.centerV && {alignItems:'center'},
        ...props.centerH && {justifyContent:'center'},
        ...props.space && {justifyContent:'space-between'},
        ...props.height && {height:props.height},
    }

    return (
        <div style={styles}>
            {children}
        </div>
    )
}

export default Container