import React from 'react';
import './styles.css';

function ProductImage(props) {
    return (<img
        alt=""
        height={466}
        src={props.img}
        width={292}
    />)
}

export default ProductImage
