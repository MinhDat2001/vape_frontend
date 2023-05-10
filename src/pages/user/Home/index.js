import classNames from 'classnames/bind';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import { Container, Row, Col } from 'react-bootstrap';

import styles from './css/home.module.scss';

import { Link } from 'react-router-dom';

import Tag from './tag';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {
    GET_ALL_CATEGORY,
    GET_CATEGORY_BY_ID,
} from '~/pages/admin/Category/api';
import { GET_ALL_PRODUCT } from '~/pages/admin/Product/api';
import { PRODUCTS_BY_CATEGORY } from '../Shop/api';

const cx = classNames.bind(styles);

function Home() {
    const [categories, setCategories] = useState([]);

    const [products, setProducts] = useState([]);

    const [firstCate, setFirstCate] = useState({});

    const [firstCateProducts, setFirstCateProducts] = useState([]);

    const token =
        'Vape ' +
        document.cookie
            .split('; ')
            .find((row) => row.startsWith('token='))
            ?.split('=')[1];

    useEffect(() => {
        if (token !== undefined || token !== null || token.trim() !== '') {
            // call gọi categories
            axios
                .get(GET_ALL_CATEGORY)
                .then((response) => {
                    if (response.status === 200) {
                        setCategories(response.data.data);
                        // gọi cate đầu tiên
                        axios
                            .get(
                                GET_CATEGORY_BY_ID +
                                    '/' +
                                    response.data.data[0].id
                            )
                            .then((response) => {
                                if (response.status === 200) {
                                    setFirstCate(response.data.data);

                                    // gọi sản phẩm của cate đầu tiên
                                    const sendData = {
                                        key_search: '',
                                        page_number: '1',
                                        page_size: 6,
                                    };
                                    axios
                                        .post(
                                            PRODUCTS_BY_CATEGORY +
                                                '/' +
                                                response.data.data.id,
                                            sendData
                                        )
                                        .then((response) => {
                                            if (response.status === 200) {
                                                // console.log(response);
                                                setFirstCateProducts(
                                                    response.data.data.content
                                                );
                                            }
                                        })
                                        .catch((error) => {
                                            console.log(error);
                                        });
                                }
                            })
                            .catch((error) => {
                                console.log(error);
                            });
                    }
                })
                .catch((error) => {
                    console.log(error);
                });

            // gọi products
            axios
                .get(GET_ALL_PRODUCT)
                .then((response) => {
                    if (response.status === 200) {
                        const length = response.data.data.length;
                        if (length >= 6) {
                            setProducts(
                                response.data.data.slice(length - 6, length)
                            );
                        } else {
                            setProducts(response.data.data);
                        }
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }, []);

    // console.log(firstCateProducts);

    return (
        <main className={cx(['home'])}>
            <section className={cx(['section-product', 'top-seller'])}>
                <Container className={cx(['d-block', 'mh-0'])}>
                    <div className={cx(['top'])}>
                        <Link className={cx(['title'])} to="/product">
                            Sản phẩm Mới
                        </Link>
                        <Link className={cx(['more'])} to="/product">
                            <span>Xem thêm</span>
                            <FontAwesomeIcon icon={faArrowRight} />
                        </Link>
                    </div>
                    <div className={cx(['product-list'])}>
                        <Row>
                            {products.reverse().map((item, index) => (
                                <Col lg={2} md={4} sm={6} key={index}>
                                    <Link
                                        title={item.name}
                                        to={'/product/' + item.id}
                                    >
                                        <div className={cx(['card'])}>
                                            <div className={cx(['top'])}>
                                                <Tag status={'new'} />
                                                <img src={item.avatar} alt="" />
                                            </div>
                                            <div className={cx(['info'])}>
                                                <div className={cx(['name'])}>
                                                    {item.name}
                                                </div>
                                                <div className={cx(['price'])}>
                                                    {item.price.toLocaleString(
                                                        'vi-VN',
                                                        {
                                                            style: 'currency',
                                                            currency: 'VND',
                                                        }
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </Container>
            </section>
            <section className={cx(['section-product', 'popular-categories'])}>
                <Container className={cx(['d-block', 'mh-0'])}>
                    <div className={cx(['top'])}>
                        <Link className={cx(['title'])}>Danh mục phổ biến</Link>
                        <Link className={cx(['more'])} to={'/product'}>
                            <span>Xem thêm</span>
                            <FontAwesomeIcon icon={faArrowRight} />
                        </Link>
                    </div>
                    <div className={cx(['category-list'])}>
                        <Row>
                            {categories.map((item, index) => (
                                <Col xl={2} lg={3} md={4} sm={6} key={index}>
                                    <Link to={'/product'}>
                                        <div className={cx(['category-card'])}>
                                            <img
                                                src="https://i.pinimg.com/236x/f4/54/c5/f454c51311bdac71a761f60cc6085597.jpg"
                                                alt=""
                                            />
                                            <div className={cx(['name'])}>
                                                {item.name}{' '}
                                                <p>(493 Sản phẩm)</p>
                                            </div>
                                        </div>
                                    </Link>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </Container>
            </section>
            {/* <section className={cx(['section-product', 'sales'])}>
                <Container className={cx(['d-block', 'mh-0'])}>
                    <div className={cx(['top'])}>
                        <Link className={cx(['title'])}>Khuyến mãi</Link>
                        <Link className={cx(['more'])}>
                            <span>Xem thêm</span>
                            <FontAwesomeIcon icon={faArrowRight} />
                        </Link>
                    </div>
                    <div className={cx(['product-list'])}>
                        <Row>
                            <Col md={3} sm={6}>
                                <Link>
                                    <div className={cx(['card'])}>
                                        <div className={cx(['top'])}>
                                            <Tag status={'new'} />
                                            <img
                                                src="https://i.pinimg.com/236x/f4/54/c5/f454c51311bdac71a761f60cc6085597.jpg"
                                                alt=""
                                            />
                                        </div>
                                        <div className={cx(['info'])}>
                                            <div className={cx(['name'])}>
                                                Naked 100 Max - WATERMELON ( Dưa
                                                Hấu Lạnh ) - Salt Nicotine
                                            </div>
                                            <div className={cx(['price'])}>
                                                340.000₫
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </Col>
                            <Col md={3} sm={6}>
                                <Link>
                                    <div className={cx(['card'])}>
                                        <div className={cx(['top'])}>
                                            <Tag status={'new'} />
                                            <img
                                                src="https://i.pinimg.com/236x/f4/54/c5/f454c51311bdac71a761f60cc6085597.jpg"
                                                alt=""
                                            />
                                        </div>
                                        <div className={cx(['info'])}>
                                            <div className={cx(['name'])}>
                                                Naked 100 Max - WATERMELON ( Dưa
                                                Hấu Lạnh ) - Salt Nicotine
                                            </div>
                                            <div className={cx(['price'])}>
                                                340.000₫
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </Col>
                            <Col md={3} sm={6}>
                                <Link>
                                    <div className={cx(['card'])}>
                                        <div className={cx(['top'])}>
                                            <Tag status={'new'} />
                                            <img
                                                src="https://i.pinimg.com/236x/f4/54/c5/f454c51311bdac71a761f60cc6085597.jpg"
                                                alt=""
                                            />
                                        </div>
                                        <div className={cx(['info'])}>
                                            <div className={cx(['name'])}>
                                                Naked 100 Max - WATERMELON ( Dưa
                                                Hấu Lạnh ) - Salt Nicotine
                                            </div>
                                            <div className={cx(['price'])}>
                                                340.000₫
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </Col>
                            <Col md={3} sm={6}>
                                <Link>
                                    <div className={cx(['card'])}>
                                        <div className={cx(['top'])}>
                                            <Tag status={'new'} />
                                            <img
                                                src="https://i.pinimg.com/236x/f4/54/c5/f454c51311bdac71a761f60cc6085597.jpg"
                                                alt=""
                                            />
                                        </div>
                                        <div className={cx(['info'])}>
                                            <div className={cx(['name'])}>
                                                Naked 100 Max - WATERMELON ( Dưa
                                                Hấu Lạnh ) - Salt Nicotine
                                            </div>
                                            <div className={cx(['price'])}>
                                                340.000₫
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section> */}
            <section className={cx(['section-product', 'category'])}>
                <Container className={cx(['d-block', 'mh-0'])}>
                    <div className={cx(['top'])}>
                        <Link className={cx(['title'])}>{firstCate.name}</Link>
                        <Link className={cx(['more'])} to={'/product'}>
                            <span>Xem thêm</span>
                            <FontAwesomeIcon icon={faArrowRight} />
                        </Link>
                    </div>
                    <div className={cx(['category-display'])}>
                        <Row>
                            <Col sm={12} md={6} lg={8}>
                                <div className={cx(['product-list'])}>
                                    <Row>
                                        {firstCateProducts.map(
                                            (item, index) => (
                                                <Col
                                                    lg={3}
                                                    md={6}
                                                    sm={6}
                                                    key={index}
                                                >
                                                    <Link
                                                        title={item.name}
                                                        to={
                                                            'product/' + item.id
                                                        }
                                                    >
                                                        <div
                                                            className={cx([
                                                                'card',
                                                            ])}
                                                        >
                                                            <div
                                                                className={cx([
                                                                    'top',
                                                                ])}
                                                            >
                                                                <Tag
                                                                    status={''}
                                                                />
                                                                <img
                                                                    src={
                                                                        item.avatar
                                                                    }
                                                                    alt=""
                                                                />
                                                            </div>
                                                            <div
                                                                className={cx([
                                                                    'info',
                                                                ])}
                                                            >
                                                                <div
                                                                    className={cx(
                                                                        ['name']
                                                                    )}
                                                                >
                                                                    {item.name}
                                                                </div>
                                                                <div
                                                                    className={cx(
                                                                        [
                                                                            'price',
                                                                        ]
                                                                    )}
                                                                >
                                                                    {item.price.toLocaleString(
                                                                        'vi-VN',
                                                                        {
                                                                            style: 'currency',
                                                                            currency:
                                                                                'VND',
                                                                        }
                                                                    )}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </Col>
                                            )
                                        )}
                                    </Row>
                                </div>
                            </Col>
                            <Col md={6} lg={4} className="d-md-block d-sm-none">
                                <div className={cx(['image-box'])}>
                                    <img
                                        src="https://i.pinimg.com/236x/f4/54/c5/f454c51311bdac71a761f60cc6085597.jpg"
                                        alt=""
                                    />
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>
        </main>
    );
}

export default Home;
