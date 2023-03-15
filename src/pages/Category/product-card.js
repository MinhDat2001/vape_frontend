import { Link } from "react-router-dom";

function ProductCard({ product }) {

    const formattedPrice = Number(product.price).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
    return (
        <div className="product-item col-md-4 col-6">
            <div className="card">
                <Link to={"/product/" + product.id}>
                    <div className="img">
                        <img className="card-img"
                            src={product.avatar}
                            alt="" />
                    </div>
                    <div className="card-body">
                        <div className="name">
                            {product.name}
                        </div>
                        <div className="price">{formattedPrice}</div>
                    </div>
                </Link>

            </div>
        </div>
    );
}

export default ProductCard
