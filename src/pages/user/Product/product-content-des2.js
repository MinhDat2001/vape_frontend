import React from 'react';
import './styles.css';

function ProductContentDes2(props) {

    return (
        <div className="mota mota2">

            <div className="properties">
                <p style={{ whiteSpace: 'pre-wrap' }}> Giá: {props.price}</p>
            </div>
            <div className="properties">
                <p style={{ whiteSpace: 'pre-wrap' }}> Số lượng: {props.quantity}</p>
            </div>

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

            <button className='order-btn'> Đặt hàng</button>
        </div>
    );
}

export default ProductContentDes2;
