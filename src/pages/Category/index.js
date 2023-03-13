import CategoryList from "./category-list";
import ProductList from "./product-list";
import { useEffect, useState } from "react";
import { CATEGORY_API, PRODUCT_API } from "./api";
import axios from "axios";
function Category() {
    const categoryId = 1;

    const [categories, setCategory] = useState([]);
    const [products, setProduct] = useState([]);

    useEffect(() => {
        // lấy categories
        axios.get(CATEGORY_API)
            .then(response => {
                setCategory(response.data);
            })
            .catch(error => {
                console.log(error);
            });

        // lấy products
        axios.get(PRODUCT_API)
            .then(response => {
                setProduct(response.data);
            })
            .catch(error => {
                console.log(error);
            })
    }, []);

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
                        <CategoryList data={categories}/>
                    </div>
                    <ProductList data={products}/>
                </div>
            </div>

        </div>
    );
}

export default Category
