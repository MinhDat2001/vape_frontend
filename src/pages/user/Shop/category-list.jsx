import './product_list.css';
import { Link } from 'react-router-dom';
function CategoryList({ data, current, handleSelectCate }) {
    const amount = 5;

    const categories = data.slice(0, amount);

    return (
        <div className="option categories">
            <div className="title">DANH MỤC SẢN PHẨM</div>
            <ul>
                {categories.map((item, index) => {
                    if (item.id !== current) {
                        return (
                            <li key={index}>
                                {/* <Link to={'./category/' + item.id}>
                                    {item.name}
                                </Link> */}
                                <Link
                                    onClick={() => {
                                        handleSelectCate(item.id);
                                    }}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        );
                    } else {
                        return (
                            <li key={index}>
                                {/* <Link
                                    to={'./category/' + item.id}
                                    className={'active'}
                                >
                                    {item.name}
                                </Link> */}
                                <Link className={'active'}>{item.name}</Link>
                            </li>
                        );
                    }
                })}
            </ul>
        </div>
    );
}

export default CategoryList;
