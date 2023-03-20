import ProductImageBlock from './product-image-block'
import ProductContentBlock from './product-content-block'
import React from 'react'
import './styles.css'

function Product() {
    return (
        <div className="main">
            <ProductImageBlock />
            <ProductContentBlock />
        </div>
    )
}

export default Product
