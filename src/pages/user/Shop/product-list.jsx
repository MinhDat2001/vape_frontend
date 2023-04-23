import './product_list.css';
import ProductCard from './product-card';
import { Form } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { PRODUCT_API } from './api';

function ProductList({ data, page }) {
    const [currentPage, setCurrentPage] = useState(1);

    const [data1, setData1] = useState([]);

    const [search, setSearch] = useState(['']);

    const [sort, setSort] = useState(['']);

    // sử dụng cho chuyển trang
    useEffect(() => {
        // lấy products
        // axios
        //     .get(PRODUCT_API)
        //     .then((response) => {
        //         setData1(response.data);
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     });
    }, [currentPage]);

    // sử dụng cho chuyển sort
    useEffect(() => {
        // lấy products
        // axios
        //     .get(PRODUCT_API)
        //     .then((response) => {
        //         setData1(response.data);
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     });
    }, [sort]);

    const amountShow = 9;
    const products = data;
    const totalPage = Math.ceil(data.length / 9);

    // const pageArray = Array.from(
    //     { length: totalPage },
    //     (_, index) => index + 1
    // );

    const pageArray = [1, 2, 3, 4, 5];

    // console.log({
    //     currentPage: currentPage,
    //     amountShow: amountShow,
    //     products: products,
    //     totalPage: totalPage,
    //     pageArray: pageArray,
    // });

    const handleClick = (e) => {
        const pageSelected = Number.parseInt(e.target.innerHTML);
        setCurrentPage(pageSelected);
    };

    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearch(value);
    };

    const handleSubmitSearch = (e) => {
        // call api search
        // set lai data
        setSearch('');
    };

    const handleSortSelect = (e) => {
        const value = e.target.value;
        setSort(value);
    };

    return (
        <div className="col-md-8 product-list">
            <div className="top">
                <div className="title">Sản phẩm mới</div>

                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search ......"
                        aria-label="Recipient's username"
                        value={search}
                        onChange={handleSearchChange}
                    />
                    <div
                        className="input-group-append"
                        onClick={handleSubmitSearch}
                    >
                        <span className="input-group-text">
                            <i className="fa fa-search"></i>
                        </span>
                    </div>
                </div>
                <div className="sort">
                    <label htmlFor="" className="d-inline-block">
                        Sắp xếp theo:
                    </label>
                    <div className="sort-options">
                        <Form.Select
                            id="sort-option"
                            size="sm"
                            className="d-inline-block"
                            onChange={handleSortSelect}
                        >
                            <option value={'default'}>Mặc định</option>
                            <option value={'price ascending'}>
                                Giá tăng dần
                            </option>
                            <option value={'price descending'}>
                                Giá giảm dần
                            </option>
                        </Form.Select>
                    </div>
                </div>
            </div>
            <div className="product-display row">
                {products
                    .slice(
                        (currentPage - 1) * amountShow,
                        (currentPage - 1) * amountShow + amountShow
                    )
                    .map((item, index) => (
                        <ProductCard key={index} product={item} />
                    ))}
            </div>
            <div className="paginationBox">
                <ul className="pagination">
                    {pageArray.map((page, index) => {
                        if (page === currentPage)
                            return (
                                <li key={index}>
                                    <div
                                        className="button-page pageActive"
                                        // onClick={handleClick}
                                    >
                                        {page}
                                    </div>
                                </li>
                            );
                        else
                            return (
                                <li key={index}>
                                    <div
                                        className="button-page"
                                        onClick={handleClick}
                                    >
                                        {page}
                                    </div>
                                </li>
                            );
                    })}
                </ul>
            </div>
        </div>
    );
}

export default ProductList;
