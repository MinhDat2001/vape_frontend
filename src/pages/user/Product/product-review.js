import React, { useState } from 'react';
import './styles.css';

function ProductReview({ username }) {
    console.log(username);
    const [reviews, setReviews] = useState([
        {
            id: 1,
            name: 'Nguyen Van A',
            avatar: 'https://via.placeholder.com/50',
            rating: 4,
            comment: 'Sản phẩm chất lượng, giá cả phải chăng',
            replies: [
                {
                    id: 1,
                    name: 'Tran Thi B',
                    avatar: 'https://via.placeholder.com/50',
                    comment: 'Cảm ơn bạn đã chia sẻ',
                },
            ],
        },
        {
            id: 2,
            name: 'Tran Thi B',
            avatar: 'https://via.placeholder.com/50',
            rating: 5,
            comment: 'Sản phẩm rất tốt, cảm ơn shop',
            replies: [],
        },
        {
            id: 3,
            name: 'Le Van C',
            avatar: 'https://via.placeholder.com/50',
            rating: 3,
            comment: 'Sản phẩm ổn, nhưng chưa đúng mong đợi',
            replies: [],
        },
    ]);

    const [rating, setRating] = useState('');
    const [review, setReview] = useState('');

    const [replyForms, setReplyForms] = useState(reviews.map(() => false));

    const handleSubmit = (event) => {
        event.preventDefault();
        const newComment = {
            id: reviews.length + 1,
            name: username,
            avatar: 'https://via.placeholder.com/50',
            rating,
            comment: review,
            replies: [],
        };
        setReviews([...reviews, newComment]);
        setRating('');
        setReview('');
    };

    const handleReply = (index, reply) => {
        const updatedReviews = [...reviews];
        updatedReviews[index].replies.push(reply);
        setReviews(updatedReviews);
        const updatedReplyForms = [...replyForms];
        updatedReplyForms[index] = false;
        setReplyForms(updatedReplyForms);
    };

    const toggleReplyForm = (index) => {
        const updatedReplyForms = [...replyForms];
        updatedReplyForms[index] = !updatedReplyForms[index];
        setReplyForms(updatedReplyForms);
    };

    function ReplyForm({ onSubmit, username }) {
        const [comment, setComment] = useState('');

        const handleSubmit = (event) => {
            event.preventDefault();
            onSubmit({
                name: username,
                avatar: 'https://via.placeholder.com/50',
                comment,
            });
            setComment('');
        };

        return (
            <form className="reply-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Viết bình luận của bạn..."
                    value={comment}
                    onChange={(event) => setComment(event.target.value)}
                    required
                />
                <button type="submit">Đăng bình luận</button>
            </form>
        );
    }

    return (
        <div className="main-reviews">
            <div className="product-reviews">
                <h2>Đánh giá và bình luận sản phẩm</h2>
                {reviews.map((review, index) => (
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
                            <div className="replies">
                                {review.replies.map((reply) => (
                                    <div
                                        className="review reply"
                                        key={reply.id}
                                    >
                                        <div className="avatar">
                                            <img
                                                src={reply.avatar}
                                                alt={reply.name}
                                            />
                                        </div>
                                        <div className="content">
                                            <div className="name">
                                                {reply.name}
                                            </div>
                                            <div className="comment">
                                                {reply.comment}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="reply-button">
                                <button onClick={() => toggleReplyForm(index)}>
                                    Phản hồi
                                </button>
                            </div>
                            {replyForms[index] && (
                                <ReplyForm
                                    onSubmit={(reply) =>
                                        handleReply(index, reply)
                                    }
                                    username={username}
                                />
                            )}
                        </div>
                    </div>
                ))}
            </div>

            <div className="product-review">
                <h2>Đánh giá sản phẩm</h2>
                <form className="review-form" onSubmit={handleSubmit}>
                    <div className="rating">
                        <label>Điểm đánh giá:</label>
                        <select
                            value={rating}
                            onChange={(event) => setRating(event.target.value)}
                            required
                        >
                            <option value="">--Chọn điểm đánh giá--</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                    <div className="comment">
                        <label>Nhận xét của bạn:</label>
                        <textarea
                            value={review}
                            onChange={(event) => setReview(event.target.value)}
                            required
                        />
                    </div>
                    <button type="submit">Gửi đánh giá</button>
                </form>
            </div>
        </div>
    );
}

export default ProductReview;
