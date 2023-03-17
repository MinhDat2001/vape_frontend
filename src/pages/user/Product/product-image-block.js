import ProductImage from './product-image'

function ProductImageBlock() {
    const imgs = ["https://i2.wp.com/gi-builds.sfo3.digitaloceanspaces.com/characters/yae_miko/header_image.png?strip=all&quality=10&w=900", "https://i2.wp.com/gi-builds.sfo3.digitaloceanspaces.com/characters/yae_miko/header_image.png?strip=all&quality=10&w=900", "https://i2.wp.com/gi-builds.sfo3.digitaloceanspaces.com/characters/yae_miko/header_image.png?strip=all&quality=10&w=900", "https://i2.wp.com/gi-builds.sfo3.digitaloceanspaces.com/characters/yae_miko/header_image.png?strip=all&quality=10&w=900", "https://i2.wp.com/gi-builds.sfo3.digitaloceanspaces.com/characters/yae_miko/header_image.png?strip=all&quality=10&w=900"];

    const imgComponents = imgs.map((img) => {
        return (<li>
            <a>
                <ProductImage key={img} img={img}/>
            </a>
        </li>);
    });

    return (<div className="grid__item flex-it order-1 large--three-twelfths medium--one-whole small--one-whole">
        <div className="grid__item pd-left0  product-single__photos false">
            {imgComponents}
        </div>
    </div>)
}

export default ProductImageBlock
