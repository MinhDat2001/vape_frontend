import CategoryList from "./category-list";
import ProductList from "../Product/product-list";

function Category({page}) {
    return (
        <div className="main">
            <div className="container">
                <div className="breadcrumb">
                    <ul>
                        <li>
                            <a href=".">Trang chủ</a>
                            <span>/</span>
                        </li>
                        <li>
                            <a href=".">Trang chủ</a>
                            <span>/</span>
                        </li>
                        <li>
                            <a href=".">Trang chủ</a>
                        </li>
                    </ul>
                </div>

                <div className="row content">
                    <div className="col-md-4 d-none d-md-block options">
                        <CategoryList />
                    </div>
                    <ProductList page={page}/>
                </div>
            </div>

        </div>
    );
}

export default Category
