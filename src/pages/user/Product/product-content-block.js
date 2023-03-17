import ProductContentDes1 from "./product-content-des1"
import ProductContentDes2 from "./product-content-des2"
import ProductContentDes3 from "./product-content-des3"
import ProductContentHeader from "./product-content-header"

function ProductContentBlock() {
    const dataForDes1 = "Ares SE là phiên bản nâng cấp của Ares, chiếc pod mod được\n" +
        "                    mệnh danh là pod miniature thành công nhất với nhiều\n" +
        "                    thay đổi để mang đến những trải nghiệm vape tốt nhất.";

    return (
        <div className="grid__item  flex-it order-3 large--seven-twelfths medium--one-whole">
            <div className="product-content product-content-center">
                <ProductContentHeader />
                <ProductContentDes1 data = {dataForDes1}/>
                <ProductContentDes2 />
                <ProductContentDes3 />                
                <div className="grid">
                    <div id="review-product">
                        <div className="review-product-title text-center">
                            <h3>Đánh giá sản phẩm</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductContentBlock
