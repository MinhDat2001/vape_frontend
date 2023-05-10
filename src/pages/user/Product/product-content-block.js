import ProductContentDes2 from './product-content-des2';
import ProductContentHeader from './product-content-header';
import React, { useEffect, useState } from 'react';
import './styles.css';
import ProductReview from './product-review';
import { getProduct } from '~/pages/Host';
import axios from 'axios';

function ProductContentBlock() {
    var id = window.location.pathname.split('/')[2];
    const [product, setProduct] = useState({});
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
                            setProduct(response.data.data);
                        } else {
                        }
                    })
                    .catch(function (error) {});
            },
        []
    );

    const userName = 'hung';

    return (
        <div className="product-content">
            <ProductContentHeader name={product.name} />
            <ProductContentDes2
                price={product.price}
                quantity={product.quantity}
                data={product.description}
            />
            <ProductReview username={userName} />
        </div>
    );
}

export default ProductContentBlock;
