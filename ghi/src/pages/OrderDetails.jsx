import React from 'react';

import { DetailsContainer, Wrapper, Labels, Values, Container } from './style';

const OrderDetails = ({ order }) => {
    return (
        <Wrapper>
            <h1>Order Details</h1>
            <Container>
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
        </Wrapper>
    );
};

export default OrderDetails;
