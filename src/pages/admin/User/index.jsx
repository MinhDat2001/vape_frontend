import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '~/static/images/logo.png';
function User() {
    const [users, setUsers] = useState([
        {
            id: 1,
            avatar: logo,
            username: 'abc',
            password: 'abc',
            role: 'abc',
        },
        {
            id: 2,
            avatar: logo,
            username: 'abc',
            password: 'abc',
            role: 'abc',
        },
    ]);

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
                        <th></th>
                        <th>Tài khoản</th>
                        <th>Mật khẩu</th>
                        <th>Loại thành viên</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((item, index) => (
                        <tr key={index}>
                            <td width="12%">
                                <img
                                    className="product_img"
                                    src={item.avatar}
                                    alt="Ảnh user"
                                />
                            </td>
                            <td width="12%">{item.username}</td>
                            <td width="12%">{item.password}</td>
                            <td width="24%">{item.role}</td>

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
