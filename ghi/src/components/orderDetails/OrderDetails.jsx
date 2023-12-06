import { useState, useEffect } from 'react';
import ReviewModal from '../reviewModal/ReviewModal';
import { useGetReviewByIdQuery } from '../../app/reviewsSlice';
import {
    DetailsContainer,
    Labels,
    Values,
    Container,
    H1,
    AddReview,
} from './style';

const Star = () => <p>&#x2606;</p>;

const OrderDetails = ({ order, showDetails, setShowDetails, status, role }) => {
    const [showModal, setShowModal] = useState(false);
    const { data: review } = useGetReviewByIdQuery(order.order_id);
    console.log(review.rating);

    return (
        <>
            {showModal && (
                <ReviewModal
                    setShowModal={setShowModal}
                    shaper={order.surfboard_shaper}
                    orderId={order.order_id}
                />
            )}
            {showDetails && (
                <Container>
                    <H1 onClick={() => setShowDetails(false)}>X</H1>
                    {order && (
                        <DetailsContainer>
                            <Labels>
                                <p>Order Date:</p>
                                <p>Order Status:</p>
                                <p>Construction:</p>
                                <p>Description:</p>
                                <p>Fin Count:</p>
                                <p>Fin System:</p>
                                <p>Glassing:</p>
                                <p>Length:</p>
                                <p>Model:</p>
                                <p>Tail Style:</p>
                                <p>Thickness:</p>
                                <p>Width:</p>
                            </Labels>
                            <Values>
                                <p>{order.date}</p>
                                <p>{order.order_status}</p>
                                <p>{order.surfboard_construction}</p>
                                <p>{order.surfboard_desc}</p>
                                <p>{order.surfboard_fin_count}</p>
                                <p>{order.surfboard_fin_system}</p>
                                <p>{order.surfboard_glassing}</p>
                                <p>{order.surfboard_length}</p>
                                <p>{order.surfboard_model}</p>
                                <p>{order.surfboard_tail_style}</p>
                                <p>{order.surfboard_thickness}</p>
                                <p>{order.surfboard_width}</p>
                            </Values>
                        </DetailsContainer>
                    )}
                    {!order.reviewed &&
                        status === 'Completed' &&
                        role === 'customer' && (
                            <AddReview onClick={() => setShowModal(true)}>
                                Add Review
                            </AddReview>
                        )}
                    {order.reviewed && review && (
                        <div>
                            <p>{review.title}</p>
                            <p>{review.description}</p>
                            {/* still need to render stars */}
                        </div>
                    )}
                </Container>
            )}
        </>
    );
};

export default OrderDetails;
