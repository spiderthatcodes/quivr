import React from 'react';
import {
    DetailsContainer,
    Labels,
    Values,
    Container,
    H1,
} from '../pages/style';

const OrderDetails = ({ order, showDetails, setShowDetails }) => {
    return (
        <>
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
                </Container>
            )}
        </>
    );
};

export default OrderDetails;
