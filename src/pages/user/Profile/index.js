import classNames from 'classnames/bind';

import { Col } from 'react-bootstrap';

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
                    console.log(response.data)
                    document.getElementById("info_display_name").innerHTML= response.data.data.name
                    document.getElementById("info_display_email").innerHTML= response.data.data.email
                    document.getElementById("info_display_phone").innerHTML= response.data.data.phone
                    document.getElementById("info_display_address").innerHTML= response.data.data.address
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
                                    <span id='info_display_name' className={cx(['info'])}>
                                    </span>
                                </li>
                                <li>
                                    <span className={cx(['label'])}>
                                        Email:{' '}
                                    </span>
                                    <span id='info_display_email' className={cx(['info'])}>
                                    </span>
                                </li>
                                <li>
                                    <span className={cx(['label'])}>
                                        Số điện thoại:{' '}
                                    </span>
                                    <span id='info_display_phone' className={cx(['info'])}>
                                    </span>
                                </li>
                                <li>
                                    <span className={cx(['label'])}>
                                        địa chỉ:{' '}
                                    </span>
                                    <span id='info_display_address' className={cx(['info'])}>
                                    </span>
                                </li>
                                <li>
                                    <span className={cx(['label'])}>
                                        Loại thành viên:{' '}
                                    </span>
                                    <span id='info_display_role' className={cx(['info'])}>
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
