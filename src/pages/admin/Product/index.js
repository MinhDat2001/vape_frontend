import { Link } from 'react-router-dom';
import logo from '~/static/images/logo.png';
import './product.css';
function Product() {
    return (
        <div className="product_content">
            <div className="contain_add">
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
                    <tr>
                        <td width="12%">
                            <img
                                className="product_img"
                                src={logo}
                                alt="product"
                            />
                        </td>
                        <td width="12%">S1200</td>
                        <td width="24%">Ngon bổ rẻ</td>
                        <td width="8%">
                            <input type="number" value="100" readOnly />
                        </td>
                        <td width="12%">12000 vnđ</td>
                        <td width="12%">Chất lượng cao</td>
                        <td width="10%">
                            <Link
                                to={'/admin/product/1'}
                                className="admin-page-btn"
                            >
                                Chỉnh sửa
                            </Link>
                        </td>
                        <td width="10%">
                            <Link className="admin-page-btn">Xóa</Link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Product;
