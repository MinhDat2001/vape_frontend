import classNames from 'classnames/bind';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import { Container, Row, Col } from 'react-bootstrap';

import styles from './css/home.module.scss';

import { Link } from 'react-router-dom';

import Tag from './tag';

const cx = classNames.bind(styles);

function Home() {
    return (
        <main className={cx(['home'])}>
            <section className={cx(['section-product', 'top-seller'])}>
                <Container>
                    <div className={cx(['top'])}>
                        <Link className={cx(['title'])}>Sản phẩm nổi bật</Link>
                        <Link className={cx(['more'])}>
                            <span>Xem thêm</span>
                            <FontAwesomeIcon icon={faArrowRight} />
                        </Link>
                    </div>
                    <div className={cx(['product-list'])}>
                        <Row>
                            <Col lg={2} md={4} sm={6}>
                                <Link
                                    title="Naked 100 Max - WATERMELON ( Dưa
                                                Hấu Lạnh ) - Salt Nicotine"
                                >
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
                            <Col lg={2} md={4} sm={6}>
                                <Link
                                    title="Naked 100 Max - WATERMELON ( Dưa
                                                Hấu Lạnh ) - Salt Nicotine"
                                >
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
                            <Col lg={2} md={4} sm={6}>
                                <Link
                                    title="Naked 100 Max - WATERMELON ( Dưa
                                                Hấu Lạnh ) - Salt Nicotine"
                                >
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
                            <Col lg={2} md={4} sm={6}>
                                <Link
                                    title="Naked 100 Max - WATERMELON ( Dưa
                                                Hấu Lạnh ) - Salt Nicotine"
                                >
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
            </section>
            <section className={cx(['section-product', 'popular-categories'])}>
                <Container>
                    <div className={cx(['top'])}>
                        <Link className={cx(['title'])}>Danh mục phổ biến</Link>
                        <Link className={cx(['more'])}>
                            <span>Xem thêm</span>
                            <FontAwesomeIcon icon={faArrowRight} />
                        </Link>
                    </div>
                    <div className={cx(['category-list'])}>
                        <Row>
                            <Col xl={2} lg={3} md={4} sm={6}>
                                <Link>
                                    <div className={cx(['category-card'])}>
                                        <img
                                            src="https://i.pinimg.com/236x/f4/54/c5/f454c51311bdac71a761f60cc6085597.jpg"
                                            alt=""
                                        />
                                        <div className={cx(['name'])}>
                                            sản phẩm mới <p>(493 Sản phẩm)</p>
                                        </div>
                                    </div>
                                </Link>
                            </Col>
                            <Col xl={2} lg={3} md={4} sm={6}>
                                <Link>
                                    <div className={cx(['category-card'])}>
                                        <img
                                            src="https://i.pinimg.com/236x/f4/54/c5/f454c51311bdac71a761f60cc6085597.jpg"
                                            alt=""
                                        />
                                        <div className={cx(['name'])}>
                                            sản phẩm mới <p>(493 Sản phẩm)</p>
                                        </div>
                                    </div>
                                </Link>
                            </Col>
                            <Col xl={2} lg={3} md={4} sm={6}>
                                <Link>
                                    <div className={cx(['category-card'])}>
                                        <img
                                            src="https://i.pinimg.com/236x/f4/54/c5/f454c51311bdac71a761f60cc6085597.jpg"
                                            alt=""
                                        />
                                        <div className={cx(['name'])}>
                                            sản phẩm mới <p>(493 Sản phẩm)</p>
                                        </div>
                                    </div>
                                </Link>
                            </Col>
                            <Col xl={2} lg={3} md={4} sm={6}>
                                <Link>
                                    <div className={cx(['category-card'])}>
                                        <img
                                            src="https://i.pinimg.com/236x/f4/54/c5/f454c51311bdac71a761f60cc6085597.jpg"
                                            alt=""
                                        />
                                        <div className={cx(['name'])}>
                                            sản phẩm mới <p>(493 Sản phẩm)</p>
                                        </div>
                                    </div>
                                </Link>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>
            <section className={cx(['section-product', 'sales'])}>
                <Container>
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
            </section>
            <section className={cx(['section-product', 'category'])}>
                <Container>
                    <div className={cx(['top'])}>
                        <Link className={cx(['title'])}>Tinh dầu</Link>
                        <Link className={cx(['more'])}>
                            <span>Xem thêm</span>
                            <FontAwesomeIcon icon={faArrowRight} />
                        </Link>
                    </div>
                    <div className={cx(['category-display'])}>
                        <Row>
                            <Col sm={12} md={6} lg={8}>
                                <div className={cx(['product-list'])}>
                                    <Row>
                                        <Col lg={3} md={6} sm={6}>
                                            <Link
                                                title="Naked 100 Max - WATERMELON ( Dưa
                                                Hấu Lạnh ) - Salt Nicotine"
                                            >
                                                <div className={cx(['card'])}>
                                                    <div
                                                        className={cx(['top'])}
                                                    >
                                                        <Tag status={'new'} />
                                                        <img
                                                            src="https://i.pinimg.com/236x/f4/54/c5/f454c51311bdac71a761f60cc6085597.jpg"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div
                                                        className={cx(['info'])}
                                                    >
                                                        <div
                                                            className={cx([
                                                                'name',
                                                            ])}
                                                        >
                                                            Naked 100 Max -
                                                            WATERMELON ( Dưa Hấu
                                                            Lạnh ) - Salt
                                                            Nicotine
                                                        </div>
                                                        <div
                                                            className={cx([
                                                                'price',
                                                            ])}
                                                        >
                                                            340.000₫
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </Col>
                                        <Col lg={3} md={6} sm={6}>
                                            <Link
                                                title="Naked 100 Max - WATERMELON ( Dưa
                                                Hấu Lạnh ) - Salt Nicotine"
                                            >
                                                <div className={cx(['card'])}>
                                                    <div
                                                        className={cx(['top'])}
                                                    >
                                                        <Tag status={'new'} />
                                                        <img
                                                            src="https://i.pinimg.com/236x/f4/54/c5/f454c51311bdac71a761f60cc6085597.jpg"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div
                                                        className={cx(['info'])}
                                                    >
                                                        <div
                                                            className={cx([
                                                                'name',
                                                            ])}
                                                        >
                                                            Naked 100 Max -
                                                            WATERMELON ( Dưa Hấu
                                                            Lạnh ) - Salt
                                                            Nicotine
                                                        </div>
                                                        <div
                                                            className={cx([
                                                                'price',
                                                            ])}
                                                        >
                                                            340.000₫
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </Col>
                                        <Col lg={3} md={6} sm={6}>
                                            <Link
                                                title="Naked 100 Max - WATERMELON ( Dưa
                                                Hấu Lạnh ) - Salt Nicotine"
                                            >
                                                <div className={cx(['card'])}>
                                                    <div
                                                        className={cx(['top'])}
                                                    >
                                                        <Tag status={'new'} />
                                                        <img
                                                            src="https://i.pinimg.com/236x/f4/54/c5/f454c51311bdac71a761f60cc6085597.jpg"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div
                                                        className={cx(['info'])}
                                                    >
                                                        <div
                                                            className={cx([
                                                                'name',
                                                            ])}
                                                        >
                                                            Naked 100 Max -
                                                            WATERMELON ( Dưa Hấu
                                                            Lạnh ) - Salt
                                                            Nicotine
                                                        </div>
                                                        <div
                                                            className={cx([
                                                                'price',
                                                            ])}
                                                        >
                                                            340.000₫
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </Col>
                                        <Col lg={3} md={6} sm={6}>
                                            <Link
                                                title="Naked 100 Max - WATERMELON ( Dưa
                                                Hấu Lạnh ) - Salt Nicotine"
                                            >
                                                <div className={cx(['card'])}>
                                                    <div
                                                        className={cx(['top'])}
                                                    >
                                                        <Tag status={'new'} />
                                                        <img
                                                            src="https://i.pinimg.com/236x/f4/54/c5/f454c51311bdac71a761f60cc6085597.jpg"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div
                                                        className={cx(['info'])}
                                                    >
                                                        <div
                                                            className={cx([
                                                                'name',
                                                            ])}
                                                        >
                                                            Naked 100 Max -
                                                            WATERMELON ( Dưa Hấu
                                                            Lạnh ) - Salt
                                                            Nicotine
                                                        </div>
                                                        <div
                                                            className={cx([
                                                                'price',
                                                            ])}
                                                        >
                                                            340.000₫
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </Col>
                                        <Col lg={3} md={6} sm={6}>
                                            <Link
                                                title="Naked 100 Max - WATERMELON ( Dưa
                                                Hấu Lạnh ) - Salt Nicotine"
                                            >
                                                <div className={cx(['card'])}>
                                                    <div
                                                        className={cx(['top'])}
                                                    >
                                                        <Tag status={'new'} />
                                                        <img
                                                            src="https://i.pinimg.com/236x/f4/54/c5/f454c51311bdac71a761f60cc6085597.jpg"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div
                                                        className={cx(['info'])}
                                                    >
                                                        <div
                                                            className={cx([
                                                                'name',
                                                            ])}
                                                        >
                                                            Naked 100 Max -
                                                            WATERMELON ( Dưa Hấu
                                                            Lạnh ) - Salt
                                                            Nicotine
                                                        </div>
                                                        <div
                                                            className={cx([
                                                                'price',
                                                            ])}
                                                        >
                                                            340.000₫
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </Col>
                                        <Col lg={3} md={6} sm={6}>
                                            <Link
                                                title="Naked 100 Max - WATERMELON ( Dưa
                                                Hấu Lạnh ) - Salt Nicotine"
                                            >
                                                <div className={cx(['card'])}>
                                                    <div
                                                        className={cx(['top'])}
                                                    >
                                                        <Tag status={'new'} />
                                                        <img
                                                            src="https://i.pinimg.com/236x/f4/54/c5/f454c51311bdac71a761f60cc6085597.jpg"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div
                                                        className={cx(['info'])}
                                                    >
                                                        <div
                                                            className={cx([
                                                                'name',
                                                            ])}
                                                        >
                                                            Naked 100 Max -
                                                            WATERMELON ( Dưa Hấu
                                                            Lạnh ) - Salt
                                                            Nicotine
                                                        </div>
                                                        <div
                                                            className={cx([
                                                                'price',
                                                            ])}
                                                        >
                                                            340.000₫
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </Col>
                                        <Col lg={3} md={6} sm={6}>
                                            <Link
                                                title="Naked 100 Max - WATERMELON ( Dưa
                                                Hấu Lạnh ) - Salt Nicotine"
                                            >
                                                <div className={cx(['card'])}>
                                                    <div
                                                        className={cx(['top'])}
                                                    >
                                                        <Tag status={'new'} />
                                                        <img
                                                            src="https://i.pinimg.com/236x/f4/54/c5/f454c51311bdac71a761f60cc6085597.jpg"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div
                                                        className={cx(['info'])}
                                                    >
                                                        <div
                                                            className={cx([
                                                                'name',
                                                            ])}
                                                        >
                                                            Naked 100 Max -
                                                            WATERMELON ( Dưa Hấu
                                                            Lạnh ) - Salt
                                                            Nicotine
                                                        </div>
                                                        <div
                                                            className={cx([
                                                                'price',
                                                            ])}
                                                        >
                                                            340.000₫
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </Col>
                                        <Col lg={3} md={6} sm={6}>
                                            <Link
                                                title="Naked 100 Max - WATERMELON ( Dưa
                                                Hấu Lạnh ) - Salt Nicotine"
                                            >
                                                <div className={cx(['card'])}>
                                                    <div
                                                        className={cx(['top'])}
                                                    >
                                                        <Tag status={'new'} />
                                                        <img
                                                            src="https://i.pinimg.com/236x/f4/54/c5/f454c51311bdac71a761f60cc6085597.jpg"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div
                                                        className={cx(['info'])}
                                                    >
                                                        <div
                                                            className={cx([
                                                                'name',
                                                            ])}
                                                        >
                                                            Naked 100 Max -
                                                            WATERMELON ( Dưa Hấu
                                                            Lạnh ) - Salt
                                                            Nicotine
                                                        </div>
                                                        <div
                                                            className={cx([
                                                                'price',
                                                            ])}
                                                        >
                                                            340.000₫
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </Col>
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
