import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '~/static/images/logo.png';
import { getAllCategory, GET_ALL_CATEGORY } from './api';
function AdminCategory() {
    const [categories, setCategories] = useState([]);

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
                        setCategories(response.data.data);
                    }
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
                    Thể loại sản phẩm
                </h1>
                <Link to={'/admin/category/add'} className="admin-page-btn">
                    Thêm
                </Link>
            </div>
            <table className="product_table">
                <thead>
                    <tr>
                        <th></th>
                        <th>Tên</th>
                        <th>Mô tả</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {categories.map((item, index) => (
                        <tr key={index}>
                            <td width="15%">
                                <img
                                    className="product_img"
                                    src={logo}
                                    alt="product"
                                />
                            </td>
                            <td width="20%">{item.name}</td>
                            <td width="24%">{item.description}</td>
                            <td width="10%">
                                <Link
                                    to={'/admin/category/' + item.id}
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

export default AdminCategory;
