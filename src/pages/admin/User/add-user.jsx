import classNames from 'classnames/bind';

import { useState } from 'react';

import styles from '~/pages/admin/Product/css/add-product.module.scss';

const cx = classNames.bind(styles);

const LOADING_IMG =
    'https://media3.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif';

function AddUser() {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        avatar: '',
        roles: [],
    });

    const [roles, setRoles] = useState([
        {
            id: 1,
            name: 'Người dùng',
        },
        {
            id: 2,
            name: 'Admin',
        },
    ]);

    const [valid, setValid] = useState({ status: true, message: '' });

    const [imageSrc, setImageSrc] = useState(LOADING_IMG);

    const [inputSrc, setInputSrc] = useState('');

    const handleOnChange = (e) => {
        const targetId = e.target.id;
        let targerValue = e.target.value;
        switch (targetId) {
            case 'username':
                setFormData({ ...formData, username: targerValue });
                break;
            case 'password':
                setFormData({ ...formData, password: targerValue });
                break;
                //validate số lượng
                if (targerValue === '') {
                    setFormData({ ...formData, price: 0 });
                } else {
                    targerValue = Number.parseInt(targerValue);
                    setFormData({ ...formData, price: targerValue });
                }

                break;
            case 'avatar':
                //validate ảnh
                setInputSrc(targerValue);
                setImageSrc(targerValue);
                break;
            default:
                break;
        }
    };

    const handleSelectRole = (e) => {
        const targetId = Number.parseInt(e.target.id);
        const targetName = e.target.innerHTML.trim();
        const obj = { id: targetId, name: targetName };

        if (!formData.categories.some((item) => item.id === obj.id)) {
            setFormData({
                ...formData,
                categories: [...formData.categories, obj],
            });
        } else {
            setFormData({
                ...formData,
                categories: formData.categories.filter(
                    (item) => item.id !== obj.id
                ),
            });
        }
    };

    const validate = () => {
        if (formData.username === '' || formData.password === '') {
            setValid({
                status: false,
                message: 'Các trường "Tài khoản", "Mật khẩu" cần nhập đầy đủ',
            });
            return false;
        } else {
            if (formData.roles.length === 0) {
                setValid({
                    status: false,
                    message: 'Phải chọn ít nhất 1 loại người dùng chứ',
                });
                return false;
            }
        }
        setValid({
            status: true,
            message: '',
        });
        return true;
    };

    const handleSubmit = (e) => {
        if (validate()) {
            // call api
        }
    };

    const imageLoaded = (e) => {
        if (imageSrc !== LOADING_IMG)
            setFormData({ ...formData, avatar: imageSrc });
    };

    const imageError = (e) => {
        setImageSrc(LOADING_IMG);
        setFormData({
            ...formData,
            avatar: '',
        });
    };

    return (
        <div className={cx(['add-product'])}>
            <h1
                style={{
                    fontWeight: 'bold',
                }}
            >
                Thêm người dùng
            </h1>
            <div className={cx(['content'])}>
                <div className={cx(['input-feature'])}>
                    <div className={cx(['label'])}>Tài khoản:</div>
                    <input
                        id="username"
                        placeholder="Tài khoản"
                        type="text"
                        className={cx(['input-text'])}
                        value={formData.username}
                        onChange={handleOnChange}
                    />
                </div>
                <div className={cx(['input-feature'])}>
                    <div className={cx(['label'])}>Mật khẩu:</div>
                    <input
                        id="password"
                        placeholder="Mật khẩu"
                        type="text"
                        className={cx(['input-text'])}
                        value={formData.password}
                        onChange={handleOnChange}
                    />
                </div>
                <div className={cx(['input-feature'])}>
                    <div className={cx(['label'])}>Hình đại diện:</div>
                    <input
                        id="avatar"
                        placeholder="link"
                        type="text"
                        className={cx(['input-text'])}
                        value={inputSrc}
                        onChange={handleOnChange}
                    />
                    <img
                        id="image"
                        src={imageSrc}
                        alt=""
                        width="150"
                        height="150"
                        onLoad={imageLoaded}
                        onError={imageError}
                    />
                </div>
                <div className={cx(['input-feature'])}>
                    <div className={cx(['label'])}>Loại người dùng:</div>
                    <div className={cx(['categories-box'])}>
                        {roles.map((item, index) => {
                            if (
                                formData.roles.some(
                                    (item1) => item1.id === item.id
                                )
                            ) {
                                return (
                                    <div
                                        id={item.id}
                                        key={index}
                                        className={cx(['tag', 'selected'])}
                                        onClick={handleSelectRole}
                                    >
                                        {item.name}
                                    </div>
                                );
                            } else {
                                return (
                                    <div
                                        id={item.id}
                                        key={index}
                                        className={cx(['tag'])}
                                        onClick={handleSelectRole}
                                    >
                                        {item.name}
                                    </div>
                                );
                            }
                        })}
                    </div>
                </div>
                {!valid.status && (
                    <div className={cx(['warning'])}>{valid.message}</div>
                )}
                <div className={cx(['btn-submit'])} onClick={handleSubmit}>
                    Thêm Người dùng
                </div>
            </div>
        </div>
    );
}

export default AddUser;
