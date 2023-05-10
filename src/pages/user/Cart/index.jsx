import classNames from 'classnames/bind';

import { Container, Row, Col } from 'react-bootstrap';

import styles from './css/cart.module.scss';
import CartItem from './cart-item';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getCart } from '~/pages/Host';
import axios from 'axios';
import { vnpay } from '~/pages/Host';

const cx = classNames.bind(styles);
function Cart() {
    const token = document.cookie
        .split('; ')
        .find((row) => row.startsWith('token='))
        ?.split('=')[1];
    const [data, setData] = useState([]);
    useEffect(() => {
        axios
            .get(getCart, {
                mode: 'cors',
                headers: {
                    token: 'Vape ' + token,
                },
            })
            .then((response) => {
                console.log(response.data);
                setData(response.data.data);
                let total = 0;
                response.data.data.forEach((item) => (total += item.price));
                setTotalPrice(total);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const [totalPrice, setTotalPrice] = useState(0);
    const handlePayment = (e) => {
        const id = e.target.id;
        if (id === 'paypal') {
        }
        if (id === 'vnpay') {
            let total = 0;
            data.forEach((item) => (total += item.price));
            const randomNumber = Math.floor(Math.random() * 1001);
            const sendData1 = {
                vnp_Ammount: total * 100,
                vnp_OrderInfo: 'Don hang mua vape',
                vnp_OrderType: 'hang',
                vnp_TxnRef: randomNumber,
            };
            console.log(sendData1);

            axios
                .post(vnpay, sendData1, {
                    headers: {
                        token: 'Vape ' + token,
                    },
                })
                .then((response) => {
                    console.log(response);
                    window.location.href = response.data;
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    };

    return (
        <div className={cx('cart')}>
            <Container className={cx(['d-block', 'mh-0'])}>
                <div className={cx(['title'])}>Giỏ hàng của bạn</div>
                <div className={cx(['cart-table'])}>
                    <Row className={cx(['cart-header'])}>
                        <Col sm={6}>
                            <div className={cx(['feature-name'])}>
                                Thông tin sản phẩm
                            </div>
                        </Col>
                        <Col sm={2}>
                            <div className={cx(['feature-name', 'center'])}>
                                Đơn giá
                            </div>
                        </Col>
                        <Col sm={2}>
                            <div className={cx(['feature-name', 'center'])}>
                                Số lượng
                            </div>
                        </Col>
                        <Col sm={2}>
                            <div className={cx(['feature-name', 'center'])}>
                                Thành tiền
                            </div>
                        </Col>
                    </Row>

                    {data.map((item, index) => (
                        <CartItem key={index} product={item} />
                    ))}
                </div>
                <div className={cx(['total-bill'])}>
                    <Row
                        className={cx(['p-0'])}
                        style={{ justifyContent: 'end' }}
                    >
                        <Col sm={4} className={cx(['p-0'])}>
                            <div className={cx(['total-price'])}>
                                <span>Tổng tiền: </span>
                                <span className={cx(['price'])}>
                                    {Number(totalPrice).toLocaleString(
                                        'vi-VN',
                                        {
                                            style: 'currency',
                                            currency: 'VND',
                                        }
                                    )}
                                </span>
                            </div>
                            <div className={cx(['pay-button'])}>
                                <Link id="paypal" onClick={handlePayment}>
                                    Thanh toán Paypal
                                </Link>
                            </div>
                            <div className={cx(['pay-button'])}>
                                <Link id="vnpay" onClick={handlePayment}>
                                    Thanh toán VNPay
                                </Link>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
}

export default Cart;
