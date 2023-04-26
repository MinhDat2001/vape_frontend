import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '~/static/images/logo.png';
import { USER_GET_ALL } from './api';

function User() {
    const [users, setUsers] = useState([
        {
            id: 1,
            avatar: logo,
            username: 'abc1',
            password: 'abc',
            role: ['user'],
            name: 'Hùng',
            phone: '123456',
        },
        {
            id: 2,
            avatar: logo,
            username: 'abc2',
            password: 'abc',
            role: ['admin'],
            name: 'Trang',
            phone: '12434',
        },
    ]);

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
    }, []);

    return (
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
                        <th>Tài khoản</th>
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
                            <td width="12%">{item.username}</td>
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
                                <Link className="admin-page-btn">Xóa</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default User;
