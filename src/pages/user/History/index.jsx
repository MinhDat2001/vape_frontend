import classNames from 'classnames/bind';

import { Container, Row, Col } from 'react-bootstrap';

import styles from './css/history.module.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function History() {
    return (
        <div className={cx('history')}>
            <Container className={cx(['d-block', 'mh-0'])}>
                <h1>history</h1>
            </Container>
        </div>
    );
}

export default History;
