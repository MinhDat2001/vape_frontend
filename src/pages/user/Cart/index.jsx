import classNames from 'classnames/bind';

import { Container, Row, Col } from 'react-bootstrap';

import styles from './css/cart.module.scss';
import CartItem from './cart-item';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Cart() {
    const [data, setData] = useState({
        listItem: [
            {
                img: 'https://i.pinimg.com/236x/d2/a6/18/d2a618aeee3bbf580164d25babe74a29.jpg',
                name: 'MR JUICER - MADX BULL ( TĂNG LỰC LẠNH ) - SALT \n NICOTINE',
                price: 120000,
                quantity: 2,
            },
            {
                img: 'https://i.pinimg.com/236x/d2/a6/18/d2a618aeee3bbf580164d25babe74a29.jpg',
                name: 'MR JUICER - MADX BULL ( TĂNG LỰC LẠNH ) - SALT \n NICOTINE',
                price: 120000,
                quantity: 2,
            },
        ],
        total: 480000,
    });
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

                    {data.listItem.map((item, index) => (
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
                                <span>Tổng tiền:</span>
                                <span className={cx(['price'])}>
                                    {Number(data.total).toLocaleString(
                                        'vi-VN',
                                        {
                                            style: 'currency',
                                            currency: 'VND',
                                        }
                                    )}
                                </span>
                            </div>
                            <div className={cx(['pay-button'])}>
                                <Link>Thanh toán</Link>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
}

export default Cart;
