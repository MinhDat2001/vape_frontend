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
            <Container>
                <section className={cx(['section-product'])}>
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
                                <div className={cx(['card'])}>
                                    <Tag />
                                </div>
                            </Col>
                            <Col lg={2} md={4} sm={6}>
                                <div className={cx(['card'])}>
                                    <Tag status={'new'} />
                                </div>
                            </Col>
                            <Col lg={2} md={4} sm={6}>
                                <div className={cx(['card'])}>
                                    <Tag />
                                </div>
                            </Col>
                            <Col lg={2} md={4} sm={6}>
                                <div className={cx(['card'])}>
                                    <Tag />
                                </div>
                            </Col>
                            <Col lg={2} md={4} sm={6}>
                                <div className={cx(['card'])}>
                                    <Tag />
                                </div>
                            </Col>
                        </Row>
                    </div>
                </section>
            </Container>
        </main>
    );
}

export default Home;
