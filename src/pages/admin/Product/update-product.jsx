import axios from 'axios';
import classNames from 'classnames/bind';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GET_PRODUCT_BY_ID, UPDATE_PRODUCT } from './api';

import styles from './css/update-product.module.scss';

const cx = classNames.bind(styles);

const LOADING_IMG =
    'https://media3.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif';

function UpdateProduct() {
    const { productId } = useParams();

    //call api gọi sản phẩm
    const [formData, setFormData] = useState({
        id: 0,
        name: '',
        avatar: '',
        quantity: 0,
        price: 0,
        description: '0',
        product_details: [],
        images: [],
        votes: [],
    });

    //call api gọi category
    const [categogies, setCategogies] = useState([
        {
            id: 1,
            name: 'Sách',
        },
        {
            id: 2,
            name: 'Đồ chơi',
        },
        {
            id: 3,
            name: 'Đồ ăn',
        },
        {
            id: 4,
            name: 'Thuốc phiện',
        },
    ]);

    const [valid, setValid] = useState({ status: true, message: '' });

    const [success, setSuccess] = useState('');

    const [imageSrc, setImageSrc] = useState(LOADING_IMG);

    const [inputSrc, setInputSrc] = useState('');

    const token =
        'Vape ' +
        document.cookie
            .split('; ')
            .find((row) => row.startsWith('token='))
            ?.split('=')[1];

    useEffect(() => {
        if (token !== undefined || token !== null || token.trim() !== '') {
            axios
                .get(GET_PRODUCT_BY_ID + '/' + productId, {
                    headers: {
                        token: token,
                    },
                })
                .then((response) => {
                    if (response.status === 200) {
                        setFormData(response.data.data);
                        setInputSrc(response.data.data.avatar);
                        setImageSrc(response.data.data.avatar);
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }, []);

    const handleOnChange = (e) => {
        const targetId = e.target.id;
        let targerValue = e.target.value;
        switch (targetId) {
            case 'name':
                setFormData({ ...formData, name: targerValue });
                break;
            case 'description':
                setFormData({ ...formData, description: targerValue });
                break;
            case 'price':
                //validate giá
                if (targerValue === '') {
                    setFormData({ ...formData, price: 0 });
                } else {
                    targerValue = Number.parseFloat(targerValue);
                    setFormData({ ...formData, price: targerValue });
                }

                break;
            case 'quantity':
                //validate số lượng
                if (targerValue === '') {
                    setFormData({ ...formData, quantity: 0 });
                } else {
                    targerValue = Number.parseInt(targerValue);
                    setFormData({ ...formData, quantity: targerValue });
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

    const handleSelectCategory = (e) => {
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
        if (
            formData.name === '' ||
            formData.description === '' ||
            formData.avatar === ''
        ) {
            setValid({
                status: false,
                message: 'Các trường "Tên", "Mô tả" cần nhập đầy đủ',
            });
            return false;
        } else {
            // if (formData.categories.length === 0) {
            //     setValid({
            //         status: false,
            //         message: 'Phải chọn ít nhất 1 tag chứ',
            //     });
            //     return false;
            // }
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
            // call api
            if (token !== undefined || token !== null || token.trim() !== '') {
                axios
                    .put(UPDATE_PRODUCT + '/' + formData.id, formData, {
                        headers: {
                            token: token,
                        },
                    })
                    .then((response) => {
                        if (response.status === 200) {
                            setSuccess('Sửa thành công');
                            setTimeout(() => {
                                setSuccess('');
                            }, 5000);
                        }
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }
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
                Sửa sản phẩm
            </h1>
            <div className={cx(['content'])}>
                <div className={cx(['input-feature'])}>
                    <div className={cx(['label'])}>Name:</div>
                    <input
                        id="name"
                        placeholder="Tên"
                        type="text"
                        className={cx(['input-text'])}
                        value={formData.name}
                        onChange={handleOnChange}
                    />
                </div>
                <div className={cx(['input-feature'])}>
                    <div className={cx(['label'])}>Mô tả:</div>
                    <input
                        id="description"
                        placeholder="Mô tả"
                        type="text"
                        className={cx(['input-text'])}
                        value={formData.description}
                        onChange={handleOnChange}
                    />
                </div>
                <div className={cx(['input-feature'])}>
                    <div className={cx(['label'])}>Giá:</div>
                    <input
                        id="price"
                        placeholder="Giá"
                        type="number"
                        min="0"
                        pattern="\d+"
                        className={cx(['input-text'])}
                        value={formData.price}
                        onChange={handleOnChange}
                    />
                </div>
                <div className={cx(['input-feature'])}>
                    <div className={cx(['label'])}>Số lượng:</div>
                    <input
                        id="quantity"
                        placeholder="Số lượng"
                        type="number"
                        min="0"
                        pattern="\d+"
                        className={cx(['input-text'])}
                        value={formData.quantity}
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
                {/* <div className={cx(['input-feature'])}>
                    <div className={cx(['label'])}>Thể loại:</div>
                    <div className={cx(['categories-box'])}>
                        {categogies.map((item, index) => {
                            if (
                                formData.categories.some(
                                    (item1) => item1.id === item.id
                                )
                            ) {
                                return (
                                    <div
                                        id={item.id}
                                        key={index}
                                        className={cx(['tag', 'selected'])}
                                        onClick={handleSelectCategory}
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
                                        onClick={handleSelectCategory}
                                    >
                                        {item.name}
                                    </div>
                                );
                            }
                        })}
                    </div>
                </div> */}
                {!valid.status && (
                    <div className={cx(['warning'])}>{valid.message}</div>
                )}
                {success && <div className={cx(['success'])}>{success}</div>}
                <div className={cx(['btn-submit'])} onClick={handleSubmit}>
                    Lưu
                </div>
            </div>
        </div>
    );
}

export default UpdateProduct;
