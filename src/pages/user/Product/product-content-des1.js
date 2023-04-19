import React from 'react';
import Button from 'react-bootstrap/Button';
import './styles.css';

function ProductContentDes1({ product }) {
    const handleOrderClick = () => {
        // Xử lý sự kiện click đặt hàng
    };

    return (
        <div>
            <div className="mota mota1 thanh-phan">
                <p style={{ textAlign: 'justify' }}>
                    <span style={{ fontSize: 14 }}>{product.data}</span>
                </p>
            </div>

            <div className="product-details">
                <div className="product-list">
                    <p className="product-info">Hãng: {product.brand}</p>
                    <p className="product-info">Giá: {product.price}</p>
                    <p className="product-info">
                        Khối lượng: {product.weight}g
                    </p>
                    <p className="product-info">
                        Dung tích: {product.eJuiceCapacity}ml
                    </p>
                    <p className="product-info">
                        Thời lượng pin: {product.batteryLife}
                    </p>
                </div>

                <button className="btn" onClick={handleOrderClick}>
                    Đặt hàng
                </button>
            </div>
        </div>
    );
}

export default ProductContentDes1;
