import axios from 'axios';
import classNames from 'classnames/bind';
import { useEffect } from 'react';

import { useState } from 'react';
import { useParams } from 'react-router-dom';

import styles from '~/pages/admin/Product/css/update-product.module.scss';
import { GET_CATEGORY_BY_ID, UPDATE_CATEGORY } from './api';

const cx = classNames.bind(styles);

const LOADING_IMG =
    'https://media3.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif';

function UpdateCategory() {
    const { categoryId } = useParams();

    const [formData, setFormData] = useState({
        id: 0,
        name: '',
        description: '',
    });

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
        if (token != null) {
            axios
                .get(GET_CATEGORY_BY_ID + '/' + categoryId, {
                    headers: { token },
                })
                .then((response) => {
                    // console.log(response);
                    if (response.status === 200) {
                        setFormData(response.data.data);
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
            case 'avatar':
                //validate ảnh
                setInputSrc(targerValue);
                setImageSrc(targerValue);
                break;
            default:
                break;
        }
    };

    const validate = () => {
        if (formData.name === '' || formData.description === '') {
            setValid({
                status: false,
                message: 'Các trường "Tên", "Mô tả" cần nhập đầy đủ',
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
        if (validate()) {
            // call api
            if (token !== undefined || token !== null || token.trim() !== '') {
                axios
                    .put(UPDATE_CATEGORY, formData, {
                        headers: { token },
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
                Chỉnh sửa thể loại
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

                {!valid.status && (
                    <div className={cx(['warning'])}>{valid.message}</div>
                )}
                {success && <div className={cx(['success'])}>{success}</div>}
                <div className={cx(['btn-submit'])} onClick={handleSubmit}>
                    Lưu thể loại
                </div>
            </div>
        </div>
    );
}

export default UpdateCategory;
