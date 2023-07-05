import ProductContentBlock from './product-content-block';
import ProductImageGallery from './product-image-gallery';
import React, { useEffect, useState } from 'react';
import './styles.css';
import { getProduct } from '~/pages/Host';
import axios from 'axios';

import { Container, Row, Col } from 'react-bootstrap';
function Product() {
    var id = window.location.pathname.split('/')[2];
    const [image, setImage] = useState([]);
    useEffect(
        () =>
            function callUser() {
                axios
                    .get(getProduct + id, {
                        mode: 'cors',
                        headers: {},
                    })
                    .then((response) => {
                        if (response.data.status === 0) {
                            setImage(response.data.data.images);
                        } else {
                        }
                    })
                    .catch(function () {});
            },
        []
    );
    var images = [];

    for (var i = 0; i < image.length; i++) {
        images.push({
            src: image.link,
        });
    }

    return (
        <div className="mainn">
            <div className="main">
                <Container className="d-block mh-0">
                    <Row className="p-0">
                        <Col md={7} sm={12} style={{ minHeight: '120px' }}>
                            <ProductImageGallery images={image} />
                        </Col>
                        <Col md={5} sm={12} style={{ minHeight: '120px' }}>
                            <ProductContentBlock />
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default Product;
