import classNames from 'classnames/bind';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import { Container, Row, Col } from 'react-bootstrap';

import styles from './css/cart.module.scss';

import { Link } from 'react-router-dom';
import CartItem from './cart-item';

const cx = classNames.bind(styles);

function Cart() {
    const listItem = [
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
    ];
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

                    {listItem.map((item, index) => (
                        <CartItem key={index} product={item} />
                    ))}
                </div>
            </Container>
        </div>
    );
}

export default Cart;
