import classNames from 'classnames/bind';

import { useState } from 'react';

import styles from '~/pages/admin/Product/css/add-product.module.scss';

const cx = classNames.bind(styles);

const LOADING_IMG =
    'https://media3.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif';

function AddCategory() {
    const [formData, setFormData] = useState({
        name: '',
        descripstion: '',
        avatar: '',
    });

    const [valid, setValid] = useState({ status: true, message: '' });

    const [imageSrc, setImageSrc] = useState(LOADING_IMG);

    const [inputSrc, setInputSrc] = useState('');

    const handleOnChange = (e) => {
        const targetId = e.target.id;
        let targerValue = e.target.value;
        switch (targetId) {
            case 'name':
                setFormData({ ...formData, name: targerValue });
                break;
            case 'description':
                setFormData({ ...formData, descripstion: targerValue });
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
        if (formData.name === '' || formData.descripstion === '') {
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
            <h1>Thêm thể loại</h1>
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
                        value={formData.descripstion}
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

                {!valid.status && (
                    <div className={cx(['warning'])}>{valid.message}</div>
                )}
                <div className={cx(['btn-submit'])} onClick={handleSubmit}>
                    Thêm thể loại
                </div>
            </div>
        </div>
    );
}

export default AddCategory;
