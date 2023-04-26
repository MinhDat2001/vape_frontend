import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '~/static/images/logo.png';
import { GET_ALL_PRODUCT } from './api';
import Notify from './notify';
import './product.css';
function Product() {
    const [products, setProducts] = useState([]);

    const [notify, setNotify] = useState({
        visible: false,
        message: '',
        obj: {},
        feature: 'product',
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
                .get(GET_ALL_PRODUCT, {
                    headers: {
                        token: token,
                    },
                })
                .then((response) => {
                    if (response.status === 200) {
                        // console.log(response.data.data);
                        setProducts(response.data.data);
                    }
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
                                <td width="12%">-----</td>
                                <td width="10%">
                                    <Link
                                        to={'/admin/product/' + item.id}
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
                                                    'Bạn có chắc muốn xóa sản phẩm ' +
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

export default Product;
