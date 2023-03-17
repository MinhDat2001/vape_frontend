import ProductImageBlock from './product-image-block'
import ProductContentBlock from './product-content-block'


function Product() {

    return (
        <main className="main-content" id="PageContainer" role="main">
            <section id="product-wrapper">
                <div className="wrapper">
                    <div className="inner">
                        <div>
                            <div className="grid product-single flex-mb">
                                <ProductImageBlock/>
                                <ProductContentBlock/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Product
