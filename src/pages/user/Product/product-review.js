import React, { useState } from 'react'
import './styles.css'

function ProductReview() {
    const [rating, setRating] = useState('')
    const [review, setReview] = useState('')

    const reviews = [
        {
            id: 1,
            name: 'Nguyen Van A',
            avatar: 'https://via.placeholder.com/50',
            rating: 4,
            comment: 'Sản phẩm chất lượng, giá cả phải chăng',
        },
        {
            id: 2,
            name: 'Tran Thi B',
            avatar: 'https://via.placeholder.com/50',
            rating: 5,
            comment: 'Sản phẩm rất tốt, cảm ơn shop',
        },
        {
            id: 3,
            name: 'Le Van C',
            avatar: 'https://via.placeholder.com/50',
            rating: 3,
            comment: 'Sản phẩm ổn, nhưng chưa đúng mong đợi',
        },
    ]

    const handleSubmit = (event) => {
        event.preventDefault()
        // làm sau :v
    }

    return (
        <div className="main-reviews">
            <div className="product-reviews">
                <h2>Đánh giá và bình luận sản phẩm</h2>
                {reviews.map((review) => (
                    <div className="review" key={review.id}>
                        <div className="avatar">
                            <img src={review.avatar} alt={review.name} />
                        </div>
                        <div className="content">
                            <div className="name">{review.name}</div>
                            <div className="rating">
                                {[...Array(review.rating)].map((_, i) => (
                                    <span key={i} className="star" />
                                ))}
                            </div>
                            <div className="comment">{review.comment}</div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="product-review">
                <h2>Đánh giá sản phẩm</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="rating">Điểm đánh giá:</label>
                    <select
                        id="rating"
                        value={rating}
                        onChange={(event) => setRating(event.target.value)}
                    >
                        <option value="">Chọn điểm đánh giá</option>
                        <option value="5">5 sao</option>
                        <option value="4">4 sao</option>
                        <option value="3">3 sao</option>
                        <option value="2">2 sao</option>
                        <option value="1">1 sao</option>
                    </select>
                    <label htmlFor="review">Nhận xét:</label>
                    <textarea
                        id="review"
                        value={review}
                        onChange={(event) => setReview(event.target.value)}
                        rows="5"
                    />
                    <button type="submit">Đăng nhận xét</button>
                </form>
            </div>
        </div>
    )
}

export default ProductReview
