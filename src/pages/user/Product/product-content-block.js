import ProductContentDes1 from './product-content-des1'
import ProductContentDes2 from './product-content-des2'
import ProductContentHeader from './product-content-header'
import React from 'react'
import './styles.css'

function ProductContentBlock() {
    const name = 'VAPOR STORM ARES SE POD KIT'

    const dataForDes1 =
        'Ares SE là phiên bản nâng cấp của Ares, chiếc pod mod được\n' +
        '                    mệnh danh là pod miniature thành công nhất với nhiều\n' +
        '                    thay đổi để mang đến những trải nghiệm vape tốt nhất.'

    const dataForDes2 =
        'Anh em còn nhớ sự hiện diện của chiếc “Pod tí hon” vào khoảng 3 năm về trước không ? 1 đồng chí rất nhỏ mà lại có võ - bé tí tẹo teo nhưng khi đưa lên miệng thử 1 hơi thì…' +
        'Ares của nhà VaporStorm từ trước đã được biết đến với cái tên “pod miniature thành công nhất”, với chất lượng sử dụng gần như ngang hàng với các thiết bị ở phân khúc cao hơn hoặc kích cỡ lớn hơn, không chỉ dừng lại ở đó, Ares còn được biết đến với khả năng sử dụng rất tốt cả juice freebase lẫn saltnic, với lượng vị đưa lên rất ấn tượng và bất ngờ. Đặc biệt nhất, là với kích cỡ nhỏ nhắn như vậy mà Ares vẫn có cơ chế đổi hơi hút từ DTL -> RDTL bằng cách đổi mặt cartridge, rất “đỉnh”.' +
        'Không dừng lại ở thành công của Ares, VS cho ra thêm bản “nâng cấp” dưới tên gọi “Ares SE” - phiên bản mới với cải tiến mới. Giữ nguyên các tiêu chuẩn về chất lượng như giá mềm mà chất lượng cao, Ares SE còn được điều chỉnh để thân thiện hơn với môi trường và cực kỳ ổn định trong suốt quá trình sử dụng.' +
        'Phần cartridge được cải tiến mức điện trở xuống thấp từ 1.3ohm xuống 1.0ohm, cho phép máy đốt công suất cao hơn, đưa vị và hương lên đậm hơn, nhiều khói hơn. Và đương nhiên rồi, độ ổn định pin cũng được điều chỉnh lại, cảm nhận được rất rõ trong quá trình sử dụng, giảm tải tối đa.' +
        'Giờ Ares không chỉ “nhỏ mà có võ nữa”, mà giờ Ares là “nhỏ và biết rất nhiều võ” luôn!!!'

    const img =
        'https://mega.com.vn/media/news/0306_tong-quan-ve-nhan-vat-yae-miko-genshin-impact.jpg'

    return (
        <div className="product-content">
            <ProductContentHeader name={name} />
            <ProductContentDes1 data={dataForDes1} />
            <ProductContentDes2 img={img} data={dataForDes2} />

            <h3>Đánh giá sản phẩm</h3>
        </div>
    )
}

export default ProductContentBlock
