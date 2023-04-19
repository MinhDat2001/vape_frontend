import ProductContentBlock from './product-content-block';
import ProductImageGallery from './product-image-gallery';
import React from 'react';
import './styles.css';

function Product() {
    const images = [
        {
            src: 'https://bizweb.dktcdn.net/thumb/1024x1024/100/247/296/products/aio-ss.jpg?v=1663564865957',
            alt: 'Trắng',
        },
        {
            src: 'https://bizweb.dktcdn.net/thumb/1024x1024/100/247/296/products/aio-rainbow.jpg?v=1663564875150',
            alt: 'Xanh',
        },
        {
            src: 'https://bizweb.dktcdn.net/thumb/1024x1024/100/247/296/products/aio-black-b997f43b-7707-494d-9826-77cf8b809aed.jpg?v=1663564882503',
            alt: 'Đen',
        },
        {
            src: 'https://bizweb.dktcdn.net/thumb/1024x1024/100/247/296/products/aio-gumetal.jpg?v=1663564891667',
            alt: 'Xám',
        },
    ];

    return (
        <div className="mainn">
            <div className="main">
                <ProductImageGallery images={images} />
                <ProductContentBlock />
            </div>
        </div>
    );
}

export default Product;
