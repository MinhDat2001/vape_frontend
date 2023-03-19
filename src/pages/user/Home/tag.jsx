import React from 'react';
import styles from './css/home.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function Tag({ status }) {
    switch (status) {
        case 'hot':
            return <div className={cx(['tag'])}>Hot</div>;
        case 'new':
            return (
                <div
                    className={cx(['tag'])}
                    style={{ backgroundColor: 'green' }}
                >
                    New
                </div>
            );
        default:
            return (
                <div
                    className={cx(['tag'])}
                    style={{
                        display: 'none',
                    }}
                >
                    Hot
                </div>
            );
    }
}

export default Tag;
