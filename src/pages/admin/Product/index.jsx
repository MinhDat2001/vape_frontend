import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '~/static/images/logo.png';
import './product.css';
function Product() {
    const [products, setProducts] = useState([
        {
            id: 1,
            avatar: logo,
            name: 'abc',
            description: 'abc',
            quantity: 10,
            price: 12000,
            Category: 'CLC',
        },
        {
            id: 2,
            avatar: logo,
            name: 'abc',
            description: 'abc',
            quantity: 10,
            price: 12000,
            Category: 'CLC',
        },
    ]);

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
                        Danh sách sản phẩm
                    </h1>
                    <Link to={'/admin/product/add'} className="admin-page-btn">
                        Thêm
                    </Link>
                </div>
                <table className="product_table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Tên</th>
                            <th>Mô tả</th>
                            <th>Số lượng</th>
                            <th>Giá</th>
                            <th>Danh mục</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((item, index) => (
                            <tr key={index}>
                                <td width="12%">
                                    <img
                                        className="product_img"
                                        src={item.avatar}
                                        alt="product"
                                    />
                                </td>
                                <td width="12%">{item.name}</td>
                                <td width="24%">{item.description}</td>
                                <td width="8%">
                                    <input
                                        type="number"
                                        value={item.quantity}
                                        readOnly
                                    />
                                </td>
                                <td width="12%">{item.price} vnđ</td>
                                <td width="12%">{item.Category}</td>
                                <td width="10%">
                                    <Link
                                        to={'/admin/product/' + item.id}
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
            <div className="notify">
                <div className="box-notify">
                    <div className="notify-box-top">
                        Bạn có chắc muốn xóa sản phẩm 1 không ?
                    </div>
                    <div className="notify-box-bot">
                        <div className="notify-btn notify-po">Có</div>
                        <div className="notify-btn notify-ne">Không</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;
