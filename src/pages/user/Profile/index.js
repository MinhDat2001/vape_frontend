import classNames from 'classnames/bind';

import { Container, Row, Col } from 'react-bootstrap';

import styles from './css/user-profile.module.scss';

import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Profile() {
    return (
        <div className={cx(['user-profile'])}>
            <Container className={cx(['d-block', 'mh-0'])}>
                <Row className={cx(['p-0'])}>
                    <Col md={4} sm={12} style={{ minHeight: '120px' }}>
                        <div className={cx(['nav-box'])}>
                            <div className={cx(['top'])}>
                                <div className={cx(['title'])}>
                                    Trang tải khoản
                                </div>
                                <div className={cx(['welcome'])}>
                                    <span>Xin chào, </span>
                                    <span className={cx(['name'])}>
                                        Nguyễn Hùng
                                    </span>
                                    !
                                </div>
                            </div>
                            <ul className={cx(['list-link'])}>
                                <li>
                                    <Link className={cx(['active'])}>
                                        Thông tin tài khoản
                                    </Link>
                                </li>
                                <li>
                                    <Link>Đổi mật khẩu</Link>
                                </li>
                                <li>
                                    <Link to={'/history'}>
                                        Đơn hàng của bạn
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col md={8} sm={12} style={{ minHeight: '120px' }}>
                        <div className={cx('info-box')}>
                            <div className={cx(['title'])}>
                                Thông tin tài khoản
                            </div>
                            <div className={cx(['content'])}>
                                <ul className={cx(['list-info'])}>
                                    <li>
                                        <span className={cx(['label'])}>
                                            Họ tên:{' '}
                                        </span>
                                        <span className={cx(['info'])}>
                                            Nguyễn Văn Hùng
                                        </span>
                                    </li>
                                    <li>
                                        <span className={cx(['label'])}>
                                            Email:{' '}
                                        </span>
                                        <span className={cx(['info'])}>
                                            abc@gmail.com
                                        </span>
                                    </li>
                                    <li>
                                        <span className={cx(['label'])}>
                                            Số điện thoại:{' '}
                                        </span>
                                        <span className={cx(['info'])}>
                                            09123456789
                                        </span>
                                    </li>
                                    <li>
                                        <span className={cx(['label'])}>
                                            địa chỉ:{' '}
                                        </span>
                                        <span className={cx(['info'])}>
                                            Khu 2 hoàng cương thanh ba phú thọ
                                        </span>
                                    </li>
                                    <li>
                                        <span className={cx(['label'])}>
                                            Loại thành viên:{' '}
                                        </span>
                                        <span className={cx(['info'])}>
                                            Khách hàng
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Profile;
