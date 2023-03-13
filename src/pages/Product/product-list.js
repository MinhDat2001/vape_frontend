import ProductCard from './product-card'
import Page from './page';
import { useState, useEffect } from 'react';
import axios from 'axios';
function ProductList({ page }) {

    const amountItem = 9;
    // const itemFrom = (page - 1) * amountItem;

    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('https://626d69e8034ec185d332c052.mockapi.io/products')
            .then(response => {
                setProducts(response.data.slice(0, amountItem));
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    // const products = [
    //     {
    //         id: 1,
    //         name: "Naked 100 Max - WATERMELON ( Dưa Hấu Lạnh ) - Salt Nicotine",
    //         imgSrc: "https://khoinguonsangtao.vn/wp-content/uploads/2022/06/avatar-facebook-nu-tao-ky-hieu-tay-1.png",
    //         price: "340.000₫",
    //         link: "./"
    //     },
    //     {
    //         id: 2,
    //         name: "Naked 100 Max - WATERMELON ( Dưa Hấu Lạnh ) - Salt Nicotine",
    //         imgSrc: "https://khoinguonsangtao.vn/wp-content/uploads/2022/06/avatar-facebook-nu-tao-ky-hieu-tay-1.png",
    //         price: "340.000₫",
    //         link: "./"
    //     },
    //     {
    //         id: 3,
    //         name: "Naked 100 Max - WATERMELON ( Dưa Hấu Lạnh ) - Salt Nicotine",
    //         imgSrc: "https://khoinguonsangtao.vn/wp-content/uploads/2022/06/avatar-facebook-nu-tao-ky-hieu-tay-1.png",
    //         price: "340.000₫",
    //         link: "./"
    //     },
    //     {
    //         id: 4,
    //         name: "Naked 100 Max - WATERMELON ( Dưa Hấu Lạnh ) - Salt Nicotine",
    //         imgSrc: "https://khoinguonsangtao.vn/wp-content/uploads/2022/06/avatar-facebook-nu-tao-ky-hieu-tay-1.png",
    //         price: "340.000₫",
    //         link: "./"
    //     },
    //     {
    //         id: 5,
    //         name: "Naked 100 Max - WATERMELON ( Dưa Hấu Lạnh ) - Salt Nicotine",
    //         imgSrc: "https://khoinguonsangtao.vn/wp-content/uploads/2022/06/avatar-facebook-nu-tao-ky-hieu-tay-1.png",
    //         price: "340.000₫",
    //         link: "./"
    //     },
    //     {
    //         id: 6,
    //         name: "Naked 100 Max - WATERMELON ( Dưa Hấu Lạnh ) - Salt Nicotine",
    //         imgSrc: "https://khoinguonsangtao.vn/wp-content/uploads/2022/06/avatar-facebook-nu-tao-ky-hieu-tay-1.png",
    //         price: "340.000₫",
    //         link: "./"
    //     }
    // ]

    const pages = [1, 2, 3];

    return (
        <div className="col-md-8 product-list">
            <div className="top">
                <div className="title">Sản phẩm mới</div>
                <div className="sort">
                    <label htmlFor="">Sắp xếp theo:</label>
                    <div className="sort-by"></div>
                </div>
            </div>
            <div className="product-display row">
                {products.map((item, index) => <ProductCard key={index} product={item} />)}

            </div>
            <div className="pagination-box">
                <ul className="pagination">
                    {
                        pages.map((item, index) => {
                            return (item === page) ? <Page key={index} page={item} active /> : <Page key={index} page={item} active={false} />;
                        })
                    }
                </ul>
            </div>
        </div>
    );
}

export default ProductList
