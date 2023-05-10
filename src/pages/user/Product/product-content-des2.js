import React from 'react';
import './styles.css';
import { addCart } from '~/pages/Host';
import axios from 'axios';
const token = document.cookie
        .split('; ')
        .find((row) => row.startsWith('token='))
        ?.split('=')[1];
function ProductContentDes2(props) {
    async function CallAddCart(){
        var dataSend = {
            productId:window.location.href.split("/")[4],
            quantity:1
        }
        console.log(dataSend)
        axios.post(addCart, dataSend, {
                mode: 'cors',
                headers: {
                    token: 'Vape ' + token,
                },
            })
            .then((response) => {
                if (response.data.status === 0) {
                    window.alert(response.data.message)
                    console.log(response.data)
                } else {
                }
            })
            .catch(function (error) {
            });
    }
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

            <button onClick={CallAddCart} className='order-btn'> Đặt hàng</button>
        </div>
    );
}

export default ProductContentDes2;
