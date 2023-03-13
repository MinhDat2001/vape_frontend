import ProductCard from './product-card'
function ProductList({ data, page }) {

    const currentPage = 1;
    const amountShow = 9;
    const products = data;
    const totalPage = Math.ceil(data.length / 9);
    const pageArray = Array.from({ length: totalPage }, (_, index) => index + 1);


    console.log({
        currentPage: currentPage,
        amountShow: amountShow,
        products: products,
        totalPage: totalPage,
        pageArray: pageArray,
    });

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
                {products.slice((currentPage - 1) * amountShow, (currentPage - 1) * amountShow + amountShow)
                    .map((item, index) => <ProductCard key={index} product={item} />)}

            </div>
            <div className="pagination-box">
                <ul className="pagination">
                    {pageArray.map((page, index) => {
                        if(page == currentPage) return (<li key={index}><a href="" className="page-active">{page}</a></li>)
                        else return (<li key={index}><a href="" className="">{page}</a></li>)
                    })}
                </ul>
            </div>
        </div>
    );
}

export default ProductList
