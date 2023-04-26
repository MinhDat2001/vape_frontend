import CategoryList from './category-list';
import ProductList from './product-list';
import { useEffect, useState } from 'react';
import { CATEGORY_GET_ALL } from './api';
import axios from 'axios';
import { useParams } from 'react-router-dom';
function Shop() {
    const token =
        'Vape ' +
        document.cookie
            .split('; ')
            .find((row) => row.startsWith('token='))
            ?.split('=')[1];

    const [categories, setCategories] = useState([]);

    const [currentCategory, setCurrentCategory] = useState(1);

    const { categoryId } = useParams();

    const sendCurrent = 1;
    if (categoryId !== null) {
        // setCurrentCategory(categoryId);
        // const sendCurrent = categoryId;
    }

    useEffect(() => {
        // call api
        if (token !== undefined || token !== null || token.trim() !== '') {
            axios
                .get(CATEGORY_GET_ALL, {
                    headers: {
                        token: token,
                    },
                })
                .then((response) => {
                    setCategories(response.data.data);
                    // setCurrentCategory(response.data.data[0].id);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }, []);

    const handleSelectCate = (cate) => {
        setCurrentCategory(cate);
    };

    return (
        <div className="main">
            <div
                className="container d-block"
                style={{ marginTop: '100px', marginBottom: '100px' }}
            >
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
