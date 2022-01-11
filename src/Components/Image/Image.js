import React from 'react';

const ImageComponent =(props)=> {

  const styles = {
      margin:'0px 0px 100px 0'
  }

  return (
      <img
        style={styles}
        width={200}
        {...props}
      />
  );
}

export default ImageComponent