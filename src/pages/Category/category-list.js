import { Link } from "react-router-dom";
function CategoryList({ data }) {
  const amount = 5;

  const categories = data.slice(0, amount);

  return (
    <div className="option categories">
      <div className="title">DANH MỤC SẢN PHẨM</div>
      <ul>
        {
          categories.map((item, index) => (<li key={index}><Link to={"/category/" + item.id}>{item.name}</Link></li>))
        }
      </ul>
    </div>
  );
}

export default CategoryList
