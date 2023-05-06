import axios from 'axios';
import classNames from 'classnames/bind';
import { useEffect } from 'react';

import { useState } from 'react';
import { useParams } from 'react-router-dom';

import styles from '~/pages/admin/Product/css/update-product.module.scss';
import { GET_ALL_PRODUCT } from '../Product/api';
import { USER_GET_BY_ID, USER_UPDATE } from './api';

const cx = classNames.bind(styles);

const LOADING_IMG =
    'https://media3.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif';

function UpdateUser() {
    const { userId } = useParams();

    const [formData, setFormData] = useState({});

    const token =
        'Vape ' +
        document.cookie
            .split('; ')
            .find((row) => row.startsWith('token='))
            ?.split('=')[1];

    useEffect(() => {
        console.log(USER_GET_BY_ID + userId);
        axios
            .get(USER_GET_BY_ID + userId, {
                headers: {
                    token: token,
                },
            })
            .then((response) => setFormData(response.data.data))
            .catch((e) => console.log(e));
    }, []);

    // const [roles, setRoles] = useState([
    //     {
    //         id: 1,
    //         name: 'USER',
    //     },
    //     {
    //         id: 2,
    //         name: 'ADMIN',
    //     },
    // ]);

    const [valid, setValid] = useState({ status: true, message: '' });

    const [imageSrc, setImageSrc] = useState(LOADING_IMG);

    const [inputSrc, setInputSrc] = useState('');

    const [success, setSuccess] = useState('');

    const handleOnChange = (e) => {
        const targetId = e.target.id;
        let targetValue = e.target.value;
        switch (targetId) {
            case 'email':
                setFormData({ ...formData, email: targetValue });
                break;
            case 'password':
                setFormData({ ...formData, password: targetValue });
                break;
            case 'avatar':
                //validate ảnh
                setInputSrc(targetValue);
                setImageSrc(targetValue);
                break;
            case 'city':
                const selectedOption = e.target.options[e.target.selectedIndex];
                const code = selectedOption.getAttribute('code');
                const value = selectedOption.value;
                setCity({
                    code: code,
                    name: value,
                });
                if (code == 0) {
                    setDistricts([]);
                    setWards([]);
                    setDistrict({ code: '0', name: '' });
                    setWard({ code: '0', name: '' });
                } else {
                    axios
                        .get(
                            'https://provinces.open-api.vn/api/p/' +
                                code +
                                '?depth=2'
                        )
                        .then((response) => {
                            setDistricts(response.data.districts);
                        })
                        .catch((error) => console.log(error));
                }
                break;
            case 'district':
                const selectedOption1 =
                    e.target.options[e.target.selectedIndex];
                const code1 = selectedOption1.getAttribute('code');
                const value1 = selectedOption1.value;
                setDistrict({
                    code: code1,
                    name: value1,
                });
                if (code1 == 0) {
                    setWards([]);
                    setWard({ code: '0', name: '' });
                } else {
                    axios
                        .get(
                            'https://provinces.open-api.vn/api/d/' +
                                code1 +
                                '?depth=2'
                        )
                        .then((response) => {
                            setWards(response.data.wards);
                        })
                        .catch((error) => console.log(error));
                }
                break;
            case 'ward':
                const selectedOption2 =
                    e.target.options[e.target.selectedIndex];
                const code2 = selectedOption2.getAttribute('code');
                const value2 = selectedOption2.value;
                setWard({
                    code: code2,
                    name: value2,
                });
                break;
            case 'home':
                setFormData({ ...formData, address: targetValue });
                break;
            case 'phone':
                setFormData({ ...formData, phone: targetValue });
                break;
            case 'name':
                setFormData({ ...formData, name: targetValue });
                break;
            default:
                break;
        }
    };

    const handleSelectRole = (e) => {
        const targetId = Number.parseInt(e.target.id);
        const targetName = e.target.innerHTML.trim();
        const obj = { id: targetId, name: targetName };

        if (!formData.roles.some((item) => item.id === obj.id)) {
            setFormData({
                ...formData,
                roles: [...formData.roles, obj],
            });
        } else {
            setFormData({
                ...formData,
                roles: formData.roles.filter((item) => item.id !== obj.id),
            });
        }
    };

    const validate = () => {
        if (
            formData.name === '' ||
            formData.email === '' ||
            formData.phone === '' ||
            formData.address === ''
        ) {
            setValid({
                status: false,
                message: 'Các trường cần nhập đầy đủ',
            });
            return false;
        }
        setValid({
            status: true,
            message: '',
        });
        return true;
    };

    const handleSubmit = (e) => {
        setSuccess('Đang đợi phản hồi...');

        if (validate()) {
            const sendData = {
                email: formData.email,
                name: formData.name,
                phone: formData.phone,
                address:
                    formData.address +
                    ' ' +
                    ward.name +
                    ' ' +
                    district.name +
                    ' ' +
                    city.name,
            };

            console.log(sendData);

            const token =
                'Vape ' +
                document.cookie
                    .split('; ')
                    .find((row) => row.startsWith('token='))
                    ?.split('=')[1];

            axios
                .post(USER_UPDATE, sendData, { headers: { token: token } })
                .then((response) => {
                    console.log(response);
                    setSuccess('Sửa thành công');
                    setTimeout(() => {
                        setSuccess('');
                    }, 5000);
                })
                .catch((e) => console.log(e));
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

    const [cities, setCities] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [wards, setWards] = useState([]);

    const [city, setCity] = useState({ code: '', name: '' });
    const [district, setDistrict] = useState({ code: '', name: '' });
    const [ward, setWard] = useState({ code: '', name: '' });

    useEffect(() => {
        axios
            .get('https://provinces.open-api.vn/api/')
            .then((response) => {
                setCities(response.data);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <div className={cx(['add-product'])}>
            <h1
                style={{
                    fontWeight: 'bold',
                }}
            >
                Sửa người dùng
            </h1>
            <div className={cx(['content'])}>
                <div className={cx(['input-feature'])}>
                    <div className={cx(['label'])}>Họ và tên:</div>
                    <input
                        id="name"
                        placeholder="Họ và tên"
                        type="text"
                        className={cx(['input-text'])}
                        value={formData.name}
                        onChange={handleOnChange}
                    />
                </div>
                <div className={cx(['input-feature'])}>
                    <div className={cx(['label'])}>Email:</div>
                    <input
                        id="email"
                        placeholder="Tài khoản"
                        type="text"
                        className={cx(['input-text'])}
                        value={formData.email}
                        onChange={handleOnChange}
                    />
                </div>
                {/* <div className={cx(['input-feature'])}>
                    <div className={cx(['label'])}>Mật khẩu:</div>
                    <input
                        id="password"
                        placeholder="Mật khẩu"
                        type="text"
                        className={cx(['input-text'])}
                        value={formData.password}
                        onChange={handleOnChange}
                    />
                </div> */}
                <div className={cx(['input-feature'])}>
                    <div className={cx(['label'])}>Số điện thoại:</div>
                    <input
                        id="phone"
                        placeholder="Số điện thoại"
                        type="text"
                        className={cx(['input-text'])}
                        value={formData.phone}
                        onChange={handleOnChange}
                    />
                </div>
                {/* <div className={cx(['input-feature'])}>
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
                </div> */}
                {/* <div className={cx(['input-feature'])}>
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
                </div> */}
                <div className={cx(['input-feature'])}>
                    <div className={cx(['label'])}>Tỉnh/Thành phố:</div>
                    <select
                        onChange={handleOnChange}
                        id="city"
                        className={cx(['input-text'])}
                        value={city.name}
                    >
                        <option value={''} code="0">
                            Chọn
                        </option>
                        {cities.map((item, index) => (
                            <option
                                code={item.code}
                                key={item.codename}
                                value={item.name}
                            >
                                {item.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className={cx(['input-feature'])}>
                    <div className={cx(['label'])}>Huyện:</div>
                    <select
                        onChange={handleOnChange}
                        id="district"
                        className={cx(['input-text'])}
                    >
                        {districts.length > 0 ? (
                            districts.map((item, index) => (
                                <option
                                    code={item.code}
                                    key={item.codename}
                                    value={item.name}
                                >
                                    {item.name}
                                </option>
                            ))
                        ) : (
                            <option code="0" value="">
                                Chọn
                            </option>
                        )}
                    </select>
                </div>
                <div className={cx(['input-feature'])}>
                    <div className={cx(['label'])}>Xã:</div>
                    <select
                        onChange={handleOnChange}
                        id="ward"
                        className={cx(['input-text'])}
                    >
                        {wards.length > 0 ? (
                            wards.map((item, index) => (
                                <option
                                    code={item.code}
                                    key={item.codename}
                                    value={item.name}
                                >
                                    {item.name}
                                </option>
                            ))
                        ) : (
                            <option value={''} code="0">
                                Chọn
                            </option>
                        )}
                    </select>
                </div>
                <div className={cx(['input-feature'])}>
                    <div className={cx(['label'])}>Địa chỉ nhà:</div>
                    <input
                        id="home"
                        placeholder="Địa chỉ nhà"
                        type="text"
                        className={cx(['input-text'])}
                        value={formData.address}
                        onChange={handleOnChange}
                    />
                </div>
                {/* <div className="contain">
                    <label className="label">Tỉnh/Thành phố</label>
                    <select onChange={callDistrict} id="city" className="input">
                        <option>Chọn</option>
                    </select>
                </div>
                <div className="contain">
                    <label className="label">Quận/Huyện</label>
                    <select onChange={callWard} id="district" className="input">
                        <option>Chọn</option>
                    </select>
                </div>
                <div className="contain">
                    <label className="label">Xã/Phường</label>
                    <select id="ward" className="input">
                        <option>Chọn</option>
                    </select>
                </div> */}

                {!valid.status && (
                    <div className={cx(['warning'])}>{valid.message}</div>
                )}
                {success && <div className={cx(['success'])}>{success}</div>}
                <div className={cx(['btn-submit'])} onClick={handleSubmit}>
                    Sửa thông tin người dùng
                </div>
            </div>
        </div>
    );
}

export default UpdateUser;
