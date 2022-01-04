import React from 'react';
import { Image } from 'antd';

const ImageComponent =(props)=> {

  const styles = {
      margin:'0px 0px 100px 0'
  }

  return (
      <Image
        style={styles}
        width={200}
        {...props}
      />
  );
}

export default ImageComponent