import classNames from 'classnames/bind';

import { Container, Row, Col } from 'react-bootstrap';

import styles from './css/user-profile.module.scss';

import ProfileLayout from '~/components/Layout/ProfileLayout';
import { getUser } from '~/pages/Host';
import axios from 'axios';

const cx = classNames.bind(styles);
function Profile() {
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
                    // document.getElementById("name_info").innerHTML= response.data.name
                } else {
                }
            })
            .catch(function (error) {
            });
    }
    return (
        
            <ProfileLayout>
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
                                    <span  className={cx(['info'])}>
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
            </ProfileLayout>
    );
}

export default Profile;
