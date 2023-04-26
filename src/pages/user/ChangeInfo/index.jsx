import classNames from 'classnames/bind';

import { Col } from 'react-bootstrap';

import styles from './css/changeinfo.module.scss';
import { useState, useMemo } from 'react';

import ProfileLayout from '~/components/Layout/ProfileLayout';
import { getUser } from '~/pages/Host';
import axios from 'axios';

const cx = classNames.bind(styles);
function ChangeInfo() {
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
                    document.getElementById("name").value= response.data.data.name
                    document.getElementById("email").value= response.data.data.email
                    document.getElementById("phone").value= response.data.data.phone
                    document.getElementById("address").value= response.data.data.address
                } else {
                }
            })
            .catch(function (error) {
            });
    }
    const [data, setData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
    });

    const [valid, setValid] = useState({ status: true, message: '' });

    const handleChange = (e) => {
        const value = e.target.value.trim();
        const id = e.target.id;
        switch (id) {
            case 'name':
                setData({ ...data, name: value });
                break;
            case 'email':
                setData({ ...data, email: value });
                break;
            case 'phone':
                setData({ ...data, phone: value });
                break;
            case 'address':
                setData({ ...data, address: value });
                break;
            default:
                break;
        }
    };

    const StatusValidate = useMemo(() => {
        return (status, message) => {
            return { status: status, message: message };
        };
    }, []);

    const validateEmail = useMemo(() => {
        return (email) => {
            const re = /\S+@\S+\.\S+/;
            return re.test(String(email).toLowerCase());
        };
    }, []);

    const validatePhoneNumber = useMemo(() => {
        return (phoneNumber) => {
            const re = /^[0-9]{10}$/;
            return re.test(phoneNumber);
        };
    }, []);

    const validate = () => {
        if (
            data.name === '' ||
            data.email === '' ||
            data.address === '' ||
            data.phone === ''
        ) {
            return StatusValidate(false, 'Các trường cần nhập đầy đủ');
        }
        if (!validateEmail(data.email) || !validatePhoneNumber(data.phone)) {
            return StatusValidate(
                false,
                'Kiểm tra lại định dạng email và số điện thoại'
            );
        }
        return StatusValidate(true, '');
    };

    const handleClick = (e) => {
        const vld = validate();
        if (vld.status === true) {
            // call api
        }
        setValid(vld);
    };

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
    
                                            <input
                                                id="name"
                                                type="text"
                                                className={cx(['info'])}
                                                value={data.name}
                                                onChange={handleChange}
                                            />
                                        </li>
                                        <li>
                                            <span className={cx(['label'])}>
                                                Email:{' '}
                                            </span>
                                            <input
                                                id="email"
                                                type="text"
                                                className={cx(['info'])}
                                                value={data.email}
                                                onChange={handleChange}
                                            />
                                        </li>
                                        <li>
                                            <span className={cx(['label'])}>
                                                Số điện thoại:{' '}
                                            </span>
                                            <input
                                                id="phone"
                                                type="text"
                                                className={cx(['info'])}
                                                value={data.phone}
                                                onChange={handleChange}
                                            />
                                        </li>
                                        <li>
                                            <span className={cx(['label'])}>
                                                địa chỉ:{' '}
                                            </span>
                                            <input
                                                id="address"
                                                type="text"
                                                className={cx(['info'])}
                                                value={data.address}
                                                onChange={handleChange}
                                            />
                                        </li>
                                    </ul>
                                    {!valid.status && (
                                        <div className={cx(['warning'])}>
                                            {valid.message}
                                        </div>
                                    )}
    
                                    <div
                                        id="submit"
                                        className={cx(['button-submit'])}
                                        onClick={handleClick}
                                    >
                                        Lưu
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </ProfileLayout>
    );
}

export default ChangeInfo;
