import React, { useState } from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

function ProductImageGallery(props) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleImageClick = (event, index) => {
        setCurrentIndex(index);
    };

    const images = props.images.map((img) => {
        return {
            original: img.link,
            thumbnail: img.link,
            thumbnailLabel: img.alt,
            originalTitle: img.alt,
            originalAlt: img.alt,
        };
    });

    return (
        <div className="product-image-gallery">
            <div className="product-image-gallery-main">
                <ImageGallery
                    items={images}
                    showPlayButton={false}
                    showFullscreenButton={false}
                    showNav={false}
                    startIndex={currentIndex}
                    onClick={handleImageClick}
                />
            </div>
        </div>
    );
}

export default ProductImageGallery;
