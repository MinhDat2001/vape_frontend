import CategoryList from './category-list';
import ProductList from './product-list';
import { useEffect, useState } from 'react';
import { CATEGORY_GET_ALL, PRODUCTS_BY_CATEGORY } from './api';
import axios from 'axios';
function Shop() {
    const [categories, setCategories] = useState([]);
    const [currentCategory, setCurrentCategory] = useState(1);

    const token =
        'Vape ' +
        document.cookie
            .split('; ')
            .find((row) => row.startsWith('token='))
            ?.split('=')[1];

    // console.log(token);
    // console.log(categories);
    // console.log(currentCategory);
    // console.log(currentCategory);

    useEffect(() => {
        if (token !== undefined || token !== null || token.trim() !== '') {
            axios
                .get(CATEGORY_GET_ALL, {
                    headers: {
                        token: token,
                    },
                })
                .then((response) => {
                    setCategories(response.data.data);
                    setCurrentCategory(response.data.data[0].id);
                })
                .catch((error) => {
                    console.log(error);
                });
        }

        // lấy products
        // if (token !== undefined || token !== null || token.trim() !== '') {
        //     const url = PRODUCTS_BY_CATEGORY + '/' + currentCategory.id;
        //     axios
        //         .get(url, {
        //             headers: {
        //                 token: token,
        //             },
        //         })
        //         .then((response) => {
        //             // setProduct(response.data);
        //             console.log(response);
        //         })
        //         .catch((error) => {
        //             console.log(error);
        //         });
        // }
    }, []);

    const handleSelectCate = (cate) => {
        setCurrentCategory(cate);
    };

    return (
        <div className="main">
            <div className="container">
                <div className="row content">
                    <div className="col-md-4 d-none d-md-block options">
                        <CategoryList
                            data={categories}
                            current={currentCategory}
                            handleSelectCate={handleSelectCate}
                        />
                    </div>
                    <ProductList categoryId={currentCategory} />
                </div>
            </div>
        </div>
    );
}

export default Shop;
