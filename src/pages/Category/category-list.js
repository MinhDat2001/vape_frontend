import { useState, useEffect } from "react";
import axios from 'axios';

function CategoryList() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get('https://626d69e8034ec185d332c052.mockapi.io/categories')
          .then(response => {
            setCategories(response.data);
          })
          .catch(error => {
            console.log(error);
          });
      }, []);

    return (
        <div className="option categories">
            <div className="title">DANH MỤC SẢN PHẨM</div>
            <ul>
                {
                    categories.map((item, index) => (<li key={index}><a href={item.link}>{item.name}</a></li>))
                }
            </ul>
        </div>
    );
}

export default CategoryList
