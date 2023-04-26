import classNames from 'classnames/bind';

import { Container, Row, Col } from 'react-bootstrap';

import styles from './css/user-profile.module.scss';

import { Link } from 'react-router-dom';
import { getUser } from '~/pages/Host';
import axios from 'axios';

const cx = classNames.bind(styles);

function ProfileLayout({ children }) {
    
    const token = document.cookie
        .split('; ')
        .find((row) => row.startsWith('token='))
        ?.split('=')[1];
    var username="";
    if (token !== undefined || token !== null || token.trim() !== '') {
        // console.log('token:' + token);
        window.onload = axios
            .get(getUser, {
                mode: 'cors',
                headers: {
                    token: 'Vape ' + token,
                },
            })
            .then((response) => {
                if (response.data.status === 0) {
                    document.getElementById("name_info").innerHTML= response.data.data.name
                } else {
                }
            })
            .catch(function (error) {
            });
    }
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
                                    <span id="name_info" className={cx(['name'])}>
                                        
                                    </span>
                                    !
                                </div>
                            </div>
                            <ul className={cx(['list-link'])}>
                                <li>
                                    <Link to={'/profile'}>
                                        Thông tin tài khoản
                                    </Link>
                                </li>
                                <li>
                                    <Link to={'/change-info'}>Đổi mật khẩu</Link>
                                </li>
                                <li>
                                    <Link to={'/history'}>
                                        Đơn hàng của bạn
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    { children }
                </Row>
            </Container>
        </div>
    );
}

export default ProfileLayout;
