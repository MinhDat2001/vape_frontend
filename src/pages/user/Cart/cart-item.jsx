import classNames from 'classnames/bind';

import styles from './css/cart.module.scss';

import { Container, Row, Col } from 'react-bootstrap';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

export default function CartItem({ product }) {
    const [item, setItem] = useState(product);

    const handleClick = (event) => {
        const element = event.target;
        switch (element.id) {
            case 'decrease':
                if (item.quantity > 1) {
                    setItem({
                        ...item,
                        quantity: item.quantity - 1,
                    });
                }
                break;
            case 'increase':
                setItem({
                    ...item,
                    quantity: item.quantity + 1,
                });
                break;
            case 'delete':
                console.log('xoas');
                break;
            default:
                break;
        }
    };
    return (
        <Row className={cx(['cart-item'])}>
            <Col sm={6}>
                <div className={cx(['info'])}>
                    <img
                        src={item.img}
                        alt="Ảnh"
                        width={'150px'}
                        height={'150px'}
                    />
                    <div className={cx(['name'])}>
                        <p>{item.name}</p>
                        <button id="delete" onClick={handleClick}>
                            Xóa
                        </button>
                    </div>
                </div>
            </Col>
            <Col sm={2}>
                <div className={cx(['price'])}>
                    {Number(item.price).toLocaleString('vi-VN', {
                        style: 'currency',
                        currency: 'VND',
                    })}
                </div>
            </Col>
            <Col sm={2}>
                <div className={cx(['quantity'])}>
                    <div>
                        <div
                            id="decrease"
                            className={cx(['box', 'button'])}
                            onClick={handleClick}
                        >
                            -
                        </div>
                        <div className={cx(['box', 'center'])}>
                            {item.quantity}
                        </div>
                        <div
                            id="increase"
                            className={cx(['box', 'button'])}
                            onClick={handleClick}
                        >
                            +
                        </div>
                    </div>
                </div>
            </Col>
            <Col sm={2}>
                <div className={cx(['price'])}>
                    {Number(item.price * item.quantity).toLocaleString(
                        'vi-VN',
                        {
                            style: 'currency',
                            currency: 'VND',
                        }
                    )}
                </div>
            </Col>
        </Row>
    );
}
