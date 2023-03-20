import React from 'react'
import './styles.css'

import ProductImage from './product-image'

function ProductImageBlock() {
    const imgs = [
        'https://i2.wp.com/gi-builds.sfo3.digitaloceanspaces.com/characters/yae_miko/header_image.png?strip=all&quality=10&w=900',
        'https://i2.wp.com/gi-builds.sfo3.digitaloceanspaces.com/characters/yae_miko/header_image.png?strip=all&quality=10&w=900',
        'https://i2.wp.com/gi-builds.sfo3.digitaloceanspaces.com/characters/yae_miko/header_image.png?strip=all&quality=10&w=900',
        'https://i2.wp.com/gi-builds.sfo3.digitaloceanspaces.com/characters/yae_miko/header_image.png?strip=all&quality=10&w=900',
        'https://i2.wp.com/gi-builds.sfo3.digitaloceanspaces.com/characters/yae_miko/header_image.png?strip=all&quality=10&w=900',
    ]

    const imgComponents = imgs.map((img) => {
        return (
            <li>
                <a>
                    <ProductImage key={img} img={img} />
                </a>
            </li>
        )
    })

    return (
        <div className="grid__item pd-left0  product-single__photos false">
            {imgComponents}
        </div>
    )
}

export default ProductImageBlock
