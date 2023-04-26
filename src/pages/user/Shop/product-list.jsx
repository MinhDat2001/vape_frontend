import './product_list.css';
import ProductCard from './product-card';
import { Form } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { PRODUCTS_BY_CATEGORY } from './api';

function ProductList({ categoryId }) {
    const [cateId, setCateId] = useState(categoryId);

    const [currentPage, setCurrentPage] = useState(1);

    const [totalPage, setTotalPage] = useState(1);

    const [data, setData] = useState([]);

    const [search, setSearch] = useState('');

    const [sort, setSort] = useState(['']);

    const [title, setTitle] = useState('Danh sách sản phẩm');

    if (cateId !== categoryId) {
        setCateId(categoryId);
        setCurrentPage(1);
    }

    const token =
        'Vape ' +
        document.cookie
            .split('; ')
            .find((row) => row.startsWith('token='))
            ?.split('=')[1];

    // call api lấy sản phẩm
    const handleGetProducts = () => {
        const sendData = {
            key_search: search,
            page_number: currentPage,
            page_size: 3,
        };

        if (token !== undefined || token !== null || token.trim() !== '') {
            const url = PRODUCTS_BY_CATEGORY + '/' + cateId;
            // console.log(category);
            axios
                .post(url, sendData, {
                    headers: {
                        token: token,
                        'Content-Type': 'application/json',
                    },
                })
                .then((response) => {
                    // console.log(response.data.data);
                    setData(response.data.data.content);
                    setTotalPage(response.data.data.totalPages);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    };

    // sử dụng cho chuyển trang và thay đổi category
    useEffect(() => {
        // lấy products
        handleGetProducts();
    }, [currentPage, cateId]);

    // sử dụng cho chuyển sort
    useEffect(() => {}, [sort]);

    let pageArray = [];
    for (let i = 1; i <= totalPage; ++i) {
        pageArray = [...pageArray, i];
    }

    const handleClick = (e) => {
        const pageSelected = Number.parseInt(e.target.innerHTML);
        setCurrentPage(pageSelected);
    };

    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearch(value);
    };

    const handleSubmitSearch = (e) => {
        setCurrentPage(1);

        // call api search
        handleGetProducts();

        if (search !== '') {
            setTitle('Kết quả cho tìm kiếm "' + search + '"');
        } else {
            setTitle('Danh sách sản phẩm');
        }
    };

    const handleSortSelect = (e) => {
        const value = e.target.value;
        setSort(value);
    };

    return (
        <div className="col-md-8 product-list">
            <div className="top">
                <div
                    className="title"
                    style={{
                        marginTop: '0.5rem',
                    }}
                >
                    {title}
                </div>

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
                {data.map((item, index) => (
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
