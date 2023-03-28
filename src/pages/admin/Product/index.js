import logo from '~/static/images/logo.png'
import './product.css'
function Product() {
    var productContent = (
        <div className="product_content">
            <div className='contain_add'><button>Thêm</button></div>
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
                        <td width="12%"><img className='product_img' src={logo} alt = "product"/></td>
                        <td width="12%">S1200</td>
                        <td width="24%">Ngon bổ rẻ</td>
                        <td width="8%"><input type="number" value="100" readOnly/></td>
                        <td width="12%">12000 vnđ</td>
                        <td width="12%">Chất lượng cao</td>
                        <td width="10%"><button>Chỉnh sửa</button></td>
                        <td width="10%"><button>Xóa</button></td>
                    </tr>
                    <tr>
                        <td width="12%"><img className='product_img' src={logo} alt = "product"/></td>
                        <td width="12%">S1200</td>
                        <td width="24%">Ngon bổ rẻ</td>
                        <td width="8%"><input type="number" value="100" readOnly/></td>
                        <td width="12%">12000 vnđ</td>
                        <td width="12%">Chất lượng cao</td>
                        <td width="10%"><button>Chỉnh sửa</button></td>
                        <td width="10%"><button>Xóa</button></td>
                    </tr>
                    <tr>
                        <td width="12%"><img className='product_img' src={logo} alt = "product"/></td>
                        <td width="12%">S1200</td>
                        <td width="24%">Ngon bổ rẻ</td>
                        <td width="8%"><input type="number" value="100" readOnly/></td>
                        <td width="12%">12000 vnđ</td>
                        <td width="12%">Chất lượng cao</td>
                        <td width="10%"><button>Chỉnh sửa</button></td>
                        <td width="10%"><button>Xóa</button></td>
                    </tr>
                    <tr>
                        <td width="12%"><img className='product_img' src={logo} alt = "product"/></td>
                        <td width="12%">S1200</td>
                        <td width="24%">Ngon bổ rẻ</td>
                        <td width="8%"><input type="number" value="100" readOnly/></td>
                        <td width="12%">12000 vnđ</td>
                        <td width="12%">Chất lượng cao</td>
                        <td width="10%"><button>Chỉnh sửa</button></td>
                        <td width="10%"><button>Xóa</button></td>
                    </tr>
                    <tr>
                        <td width="12%"><img className='product_img' src={logo} alt = "product"/></td>
                        <td width="12%">S1200</td>
                        <td width="24%">Ngon bổ rẻ</td>
                        <td width="8%"><input type="number" value="100" readOnly/></td>
                        <td width="12%">12000 vnđ</td>
                        <td width="12%">Chất lượng cao</td>
                        <td width="10%"><button>Chỉnh sửa</button></td>
                        <td width="10%"><button>Xóa</button></td>
                    </tr>
                    <tr>
                        <td width="12%"><img className='product_img' src={logo} alt = "product"/></td>
                        <td width="12%">S1200</td>
                        <td width="24%">Ngon bổ rẻ</td>
                        <td width="8%"><input type="number" value="100" readOnly/></td>
                        <td width="12%">12000 vnđ</td>
                        <td width="12%">Chất lượng cao</td>
                        <td width="10%"><button>Chỉnh sửa</button></td>
                        <td width="10%"><button>Xóa</button></td>
                    </tr>
                    <tr>
                        <td width="12%"><img className='product_img' src={logo} alt = "product"/></td>
                        <td width="12%">S1200</td>
                        <td width="24%">Ngon bổ rẻ</td>
                        <td width="8%"><input type="number" value="100" readOnly/></td>
                        <td width="12%">12000 vnđ</td>
                        <td width="12%">Chất lượng cao</td>
                        <td width="10%"><button>Chỉnh sửa</button></td>
                        <td width="10%"><button>Xóa</button></td>
                    </tr>
                    <tr>
                        <td width="12%"><img className='product_img' src={logo} alt = "product"/></td>
                        <td width="12%">S1200</td>
                        <td width="24%">Ngon bổ rẻ</td>
                        <td width="8%"><input type="number" value="100" readOnly/></td>
                        <td width="12%">12000 vnđ</td>
                        <td width="12%">Chất lượng cao</td>
                        <td width="10%"><button>Chỉnh sửa</button></td>
                        <td width="10%"><button>Xóa</button></td>
                    </tr>
                    <tr>
                        <td width="12%"><img className='product_img' src={logo} alt = "product"/></td>
                        <td width="12%">S1200</td>
                        <td width="24%">Ngon bổ rẻ</td>
                        <td width="8%"><input type="number" value="100" readOnly/></td>
                        <td width="12%">12000 vnđ</td>
                        <td width="12%">Chất lượng cao</td>
                        <td width="10%"><button>Chỉnh sửa</button></td>
                        <td width="10%"><button>Xóa</button></td>
                    </tr>
                    <tr>
                        <td width="12%"><img className='product_img' src={logo} alt = "product"/></td>
                        <td width="12%">S1200</td>
                        <td width="24%">Ngon bổ rẻ</td>
                        <td width="8%"><input type="number" value="100" readOnly/></td>
                        <td width="12%">12000 vnđ</td>
                        <td width="12%">Chất lượng cao</td>
                        <td width="10%"><button>Chỉnh sửa</button></td>
                        <td width="10%"><button>Xóa</button></td>
                    </tr>
                    <tr>
                        <td width="12%"><img className='product_img' src={logo} alt = "product"/></td>
                        <td width="12%">S1200</td>
                        <td width="24%">Ngon bổ rẻ</td>
                        <td width="8%"><input type="number" value="100" readOnly/></td>
                        <td width="12%">12000 vnđ</td>
                        <td width="12%">Chất lượng cao</td>
                        <td width="10%"><button>Chỉnh sửa</button></td>
                        <td width="10%"><button>Xóa</button></td>
                    </tr>
                    <tr>
                        <td width="12%"><img className='product_img' src={logo} alt = "product"/></td>
                        <td width="12%">S1200</td>
                        <td width="24%">Ngon bổ rẻ</td>
                        <td width="8%"><input type="number" value="100" readOnly/></td>
                        <td width="12%">12000 vnđ</td>
                        <td width="12%">Chất lượng cao</td>
                        <td width="10%"><button>Chỉnh sửa</button></td>
                        <td width="10%"><button>Xóa</button></td>
                    </tr>
                    <tr>
                        <td width="12%"><img className='product_img' src={logo} alt = "product"/></td>
                        <td width="12%">S1200</td>
                        <td width="24%">Ngon bổ rẻ</td>
                        <td width="8%"><input type="number" value="100" readOnly/></td>
                        <td width="12%">12000 vnđ</td>
                        <td width="12%">Chất lượng cao</td>
                        <td width="10%"><button>Chỉnh sửa</button></td>
                        <td width="10%"><button>Xóa</button></td>
                    </tr>
                    <tr>
                        <td width="12%"><img className='product_img' src={logo} alt = "product"/></td>
                        <td width="12%">S1200</td>
                        <td width="24%">Ngon bổ rẻ</td>
                        <td width="8%"><input type="number" value="100" readOnly/></td>
                        <td width="12%">12000 vnđ</td>
                        <td width="12%">Chất lượng cao</td>
                        <td width="10%"><button>Chỉnh sửa</button></td>
                        <td width="10%"><button>Xóa</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
    return productContent
}

export default Product
