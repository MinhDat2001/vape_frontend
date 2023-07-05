import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '~/static/images/logo.png';
import Notify from '../Product/notify';
import { USER_GET_ALL } from './api';

function User() {
    const [users, setUsers] = useState([]);

    const [notify, setNotify] = useState({
        visible: false,
        message: '',
        obj: {},
        feature: 'user',
    });

    const myCallBack = (notifyChanged) => {
        setNotify(notifyChanged);
    };

    const updateCallBack = () => {
        this.forceUpdate();
    };

    const token =
        'Vape ' +
        document.cookie
            .split('; ')
            .find((row) => row.startsWith('token='))
            ?.split('=')[1];

    useEffect(() => {
        if (token !== undefined || token !== null || token.trim() !== '') {
            axios
                .get(USER_GET_ALL, { headers: { token: token } })
                .then((response) => {
                    setUsers(response.data.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }, [notify]);

    return (
        <div style={{ position: 'relative', height: '100%' }}>
            <div className="product_content">
                <div
                    className="contain_add"
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}
                >
                    <h1
                        style={{
                            fontWeight: 'bold',
                        }}
                    >
                        Danh sách User
                    </h1>
                    <Link to={'/admin/user/add'} className="admin-page-btn">
                        Thêm
                    </Link>
                </div>
                <table className="product_table">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Ảnh</th>
                            <th>Email</th>
                            <th>Tên</th>
                            <th>Số điện thoại</th>
                            <th>Loại thành viên</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((item, index) => (
                            <tr key={index}>
                                {/* id */}
                                <td width="10%">{item.id}</td>
                                {/* avatar */}
                                <td width="12%">
                                    <img
                                        className="product_img"
                                        src={item.avatar}
                                        alt="Ảnh user"
                                    />
                                </td>
                                <td width="12%">{item.email}</td>
                                <td width="12%">{item.name}</td>
                                <td width="12%">{item.phone}</td>
                                <td width="12%">{item.role}</td>
                                <td width="10%">
                                    <Link
                                        to={'/admin/user/' + item.id}
                                        className="admin-page-btn"
                                    >
                                        Chỉnh sửa
                                    </Link>
                                </td>
                                <td width="10%">
                                    <Link
                                        className="admin-page-btn"
                                        onClick={(e) => {
                                            setNotify({
                                                ...notify,
                                                visible: true,
                                                message:
                                                    'Bạn có chắc muốn xóa người dùng ' +
                                                    item.id +
                                                    ' không?',
                                                obj: item,
                                            });
                                        }}
                                    >
                                        Xóa
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Notify
                notify={notify}
                myCallBack={myCallBack}
                updateCallBack={updateCallBack}
            ></Notify>
        </div>
    );
}

export default User;
