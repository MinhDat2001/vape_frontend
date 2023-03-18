import React from 'react';
import styles from './css/home.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function Tag({ status }) {
    switch (status) {
        case 'new':
            return <div className={cx(['tag'])}>New</div>;
        case 'hot':
            return <div className={cx(['tag'])}>Hot</div>;
        default:
            break;
    }
}

export default Tag;
