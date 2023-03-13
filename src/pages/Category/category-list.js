function CategoryList({ data }) {
  const amount = 5;

  const categories = data.slice(0, amount);

  return (
    <div className="option categories">
      <div className="title">DANH MỤC SẢN PHẨM</div>
      <ul>
        {
          categories.map((item, index) => (<li key={index}><a href={"/category/" + item.id}>{item.name}</a></li>))
        }
      </ul>
    </div>
  );
}

export default CategoryList
