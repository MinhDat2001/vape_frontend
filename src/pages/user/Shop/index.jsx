import CategoryList from './category-list';
import ProductList from './product-list';
import { useEffect, useState } from 'react';
import { CATEGORY_GET_ALL, PRODUCT_API } from './api';
import axios from 'axios';
function Shop() {
    const categoryId = 1;

    const [categories, setCategories] = useState([]);
    const [products, setProduct] = useState([]);

    const token =
        'Vape ' +
        document.cookie
            .split('; ')
            .find((row) => row.startsWith('token='))
            ?.split('=')[1];

    // console.log(token);
    // console.log(categories);

    useEffect(() => {
        if (token !== undefined || token !== null || token.trim() !== '')
            axios
                .get('http://localhost:8088/categories', {
                    headers: {
                        token: token,
                    },
                })
                .then((response) => {
                    setCategories(response.data.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        {
        }

        // lấy products
        axios
            .get(PRODUCT_API)
            .then((response) => {
                setProduct(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div className="main">
            <div className="container">
                <div className="row content">
                    <div className="col-md-4 d-none d-md-block options">
                        <CategoryList data={categories} />
                    </div>
                    <ProductList data={products} />
                </div>
            </div>
        </div>
    );
}

export default Shop;
