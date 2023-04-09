import ProductContentTable from '~/pages/user/Product/product-content-table'
import React from 'react'
import './styles.css'

function ProductContentDes2(props) {
    const img =
        'https://mega.com.vn/media/news/0306_tong-quan-ve-nhan-vat-yae-miko-genshin-impact.jpg'

    return (
        <div className="mota mota2">
            <img className="img-des" alt="" src={img} />

            <div className="mota mota1">
                <p style={{ whiteSpace: 'pre-wrap' }}>{props.data}</p>
            </div>

            <h2>
                <span style={{ fontSize: 20, fontWeight: 'bold' }}>
                    Hộp bao gồm:
                </span>
            </h2>

            <p>
                <span style={{ fontSize: 14 }}>
                    <div className="thanh-phan">
                        1 Ares SE Pod Mod
                        <br />1 pod rỗng
                        <br />1 dây sạc USB Type-C
                        <br />1 hướng dẫn sử dụng
                    </div>
                </span>
            </p>
            <ProductContentTable />
        </div>
    )
}

export default ProductContentDes2
