import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '~/static/images/logo.png';
function AdminCategory() {
    const [products, setProducts] = useState([
        {
            id: 1,
            name: 'abc',
            description: 'abc',
            Category: 'CLC',
        },
        {
            id: 2,
            name: 'abc',
            description: 'abc',
            Category: 'CLC',
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
                    {products.map((item, index) => (
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
