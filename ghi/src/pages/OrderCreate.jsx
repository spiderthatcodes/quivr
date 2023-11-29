import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetTokenQuery } from '../app/authSlice';
import { Wrapper } from './style';

const OrderCreate = () => {
    const navigate = useNavigate();
    const { data: account, isLoading } = useGetTokenQuery();

    useEffect(() => {
        if (!isLoading && !account) {
            navigate('/');
        }
    }, [account, isLoading, navigate]);

    return <Wrapper>OrderCreate</Wrapper>;
};

export default OrderCreate;
