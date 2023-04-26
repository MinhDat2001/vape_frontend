import React from 'react';
import './styles.css';

function ProductContentHeader(props) {
    return <h2 className='product-name'>{props.name}</h2>;
}

export default ProductContentHeader;
