import classNames from 'classnames/bind';

import { Container, Row, Col } from 'react-bootstrap';

import styles from './css/update-product.module.scss';

const cx = classNames.bind(styles);

function UpdateProduct() {
    return <div className={cx(['update-product'])}></div>;
}

export default UpdateProduct;
