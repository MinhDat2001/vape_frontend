import axios from 'axios';
import classNames from 'classnames/bind';

import { useEffect, useState } from 'react';
import { GET_ALL_CATEGORY } from '../Category/api';
import { CREATE_PRODUCT } from './api';

import styles from './css/add-product.module.scss';

const cx = classNames.bind(styles);

const LOADING_IMG =
    'https://media3.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif';

function AddProduct() {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        avatar: 'abc',
        category_ids: [],
        quantity: 0,
        price: 0,
        images: [],
        details: [],
    });

    const [avatar, setAvatar] = useState(null);

    const [files, setFiles] = useState([]);

    const [categogies, setCategogies] = useState([]);

    const [valid, setValid] = useState({ status: true, message: '' });

    const [imageSrc, setImageSrc] = useState(LOADING_IMG);

    const [inputSrc, setInputSrc] = useState('');

    const [success, setSuccess] = useState('');

    const token =
        'Vape ' +
        document.cookie
            .split('; ')
            .find((row) => row.startsWith('token='))
            ?.split('=')[1];

    useEffect(() => {
        if (token !== undefined || token !== null || token.trim() !== '') {
            axios
                .get(GET_ALL_CATEGORY, {
                    headers: {
                        token: token,
                    },
                })
                .then((response) => {
                    if (response.status === 200) {
                        setCategogies(response.data.data);
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
                // setInputSrc(targerValue);
                // setImageSrc(targerValue);
                const file1 = e.target.files;
                if (file1.length !== 0) {
                    setAvatar(file1[0]);
                    setFormData({ ...formData, avatar: file1[0].name });
                }
                break;
            case 'images':
                //validate ảnh
                // setInputSrc(targerValue);
                // setImageSrc(targerValue);
                const file2 = e.target.files;
                const list = [];
                const listImagesName = [];
                if (file2.length !== 0) {
                    for (let i = 0; i < file2.length; i++) {
                        // console.log(file2[i]);
                        list.push(file2[i]);
                        listImagesName.push(file2[i].name);
                    }
                    setFiles(list);
                    setFormData({ ...formData, images: listImagesName });
                }
                break;
            default:
                break;
        }
    };

    // console.log(formData);

    const handleSelectCategory = (e) => {
        const targetId = Number.parseInt(e.target.id);
        const targetName = e.target.innerHTML.trim();
        const obj = { id: targetId, name: targetName };

        if (!formData.category_ids.some((item) => item === obj.id)) {
            setFormData({
                ...formData,
                category_ids: [...formData.category_ids, obj.id],
            });
        } else {
            setFormData({
                ...formData,
                category_ids: formData.category_ids.filter(
                    (item) => item !== obj.id
                ),
            });
        }
    };

    const validate = () => {
        if (formData.name === '' || formData.description === '') {
            setValid({
                status: false,
                message: 'Các trường "Tên", "Mô tả", cần nhập đầy đủ',
            });
            return false;
        } else {
            if (formData.category_ids.length === 0) {
                setValid({
                    status: false,
                    message: 'Phải chọn ít nhất 1 tag chứ',
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
            setSuccess('Đang đợi phản hồi...');
            // call api
            const sendFormData = new FormData();
            sendFormData.append('data', JSON.stringify(formData));
            sendFormData.append('avatar', avatar);
            for (let i = 0; i < files.length; i++) {
                sendFormData.append('files', files[i]); // imageFiles là một mảng chứa các tệp tin ảnh sản phẩm
            }

            if (token !== undefined || token !== null || token.trim() !== '') {
                axios
                    .post(CREATE_PRODUCT, sendFormData, {
                        headers: {
                            token: token,
                            'Content-Type':
                                'multipart/form-data; boundary=2a8ae6ad-f4ad-4d9a-a92c-6d217011fe0f',
                        },
                    })
                    .then((response) => {
                        setSuccess('Thêm thành công');
                        setTimeout(() => {
                            setSuccess('');
                        }, 5000);
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
                Thêm sản phẩm
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
                        type="file"
                        className={cx(['input-text'])}
                        files={[avatar]}
                        onChange={handleOnChange}
                    />
                    {/* <img
                        id="image"
                        src={imageSrc}
                        alt=""
                        width="150"
                        height="150"
                        onLoad={imageLoaded}
                        onError={imageError}
                    /> */}
                </div>
                <div className={cx(['input-feature'])}>
                    <div className={cx(['label'])}>Danh sách ảnh:</div>
                    <input
                        id="images"
                        placeholder="link"
                        type="file"
                        className={cx(['input-text'])}
                        multiple
                        files={files}
                        onChange={handleOnChange}
                    />
                    {/* <img
                        id="image"
                        src={imageSrc}
                        alt=""
                        width="150"
                        height="150"
                        onLoad={imageLoaded}
                        onError={imageError}
                    /> */}
                </div>
                <div className={cx(['input-feature'])}>
                    <div className={cx(['label'])}>Thể loại:</div>
                    <div className={cx(['categories-box'])}>
                        {categogies.map((item, index) => {
                            if (
                                formData.category_ids.some(
                                    (item1) => item1 === item.id
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
                </div>
                {!valid.status && (
                    <div className={cx(['warning'])}>{valid.message}</div>
                )}
                {success && <div className={cx(['success'])}>{success}</div>}

                <div className={cx(['btn-submit'])} onClick={handleSubmit}>
                    Thêm sản phẩm
                </div>
            </div>
        </div>
    );
}

export default AddProduct;
