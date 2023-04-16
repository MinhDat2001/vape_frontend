import ProductContentBlock from './product-content-block'
import ProductImageGallery from './product-image-gallery'
import React from 'react'
import './styles.css'

function Product() {
    const images = [
        { src: 'https://picsum.photos/id/1018/300/500/', alt: 'Đỏ' },
        { src: 'https://picsum.photos/id/1015/300/500/', alt: 'Vàng' },
        { src: 'https://picsum.photos/id/1019/300/500/', alt: 'Đen' },
        { src: 'https://picsum.photos/id/1016/300/500/', alt: 'Xanh' },
    ]

    return (
        <div className="main">
            <ProductImageGallery images={images} />
            <ProductContentBlock />
        </div>
    )
}

export default Product
