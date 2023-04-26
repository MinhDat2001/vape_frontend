import axios from 'axios';
import React from 'react';
import { DELETE_CATEGORY } from '../Category/api';
import { DELETE_PRODUCT } from './api';

export default function Notify({ notify, myCallBack, updateCallBack }) {
    // console.log(notify.obj);

    const token =
        'Vape ' +
        document.cookie
            .split('; ')
            .find((row) => row.startsWith('token='))
            ?.split('=')[1];

    const handleSelect = (e) => {
        const id = e.target.id;
        switch (id) {
            case 'po':
                // call api xóa obj trong notify
                switch (notify.feature) {
                    case 'product':
                        if (
                            token !== undefined ||
                            token !== null ||
                            token.trim() !== ''
                        ) {
                            alert('Đang đợi kết quả');
                            axios
                                .delete(DELETE_PRODUCT + '/' + notify.obj.id, {
                                    headers: {
                                        token: token,
                                    },
                                })
                                .then((response) => {
                                    if (
                                        response.status === 200 &&
                                        response.data.status === 0
                                    ) {
                                        alert('Xóa thành công');
                                        myCallBack({
                                            ...notify,
                                            visible: false,
                                            message: '',
                                            obj: {},
                                        });
                                        // updateCallBack();
                                    } else {
                                        alert('Xóa không thành công');
                                        myCallBack({
                                            ...notify,
                                            visible: false,
                                            message: '',
                                            obj: {},
                                        });
                                    }
                                })
                                .catch((error) => {
                                    console.log(error);
                                    alert('Xóa không thành công');
                                });
                        }
                        break;
                    case 'category':
                        if (
                            token !== undefined ||
                            token !== null ||
                            token.trim() !== ''
                        ) {
                            alert('Đang đợi kết quả');
                            axios
                                .delete(DELETE_CATEGORY + '/' + notify.obj.id, {
                                    headers: {
                                        token: token,
                                    },
                                })
                                .then((response) => {
                                    if (response.status === 200) {
                                        // setCategories(response.data.data);
                                        alert('Xóa thành công');
                                        myCallBack({
                                            ...notify,
                                            visible: false,
                                            message: '',
                                            obj: {},
                                        });
                                        // updateCallBack();
                                    } else {
                                        alert('Xóa không thành công');
                                        myCallBack({
                                            ...notify,
                                            visible: false,
                                            message: '',
                                            obj: {},
                                        });
                                    }
                                })
                                .catch((error) => {
                                    console.log(error);
                                });
                        }
                        break;
                    case 'user':
                        // console.log('user');
                        break;
                    default:
                        break;
                }
                // myCallBack({ ...notify, visible: false, message: '', obj: {} });
                break;
            case 'ne':
                myCallBack({ ...notify, visible: false, message: '', obj: {} });
                break;
            default:
                break;
        }
    };
    if (notify.visible) {
        return (
            <div className="notify">
                <div className="box-notify">
                    <div className="notify-box-top">{notify.message}</div>
                    <div className="notify-box-bot">
                        <div
                            id="po"
                            className="notify-btn notify-po"
                            onClick={handleSelect}
                        >
                            Có
                        </div>
                        <div
                            id="ne"
                            className="notify-btn notify-ne"
                            onClick={handleSelect}
                        >
                            Không
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        return;
    }
}
