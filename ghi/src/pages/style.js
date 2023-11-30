import styled from 'styled-components';

export const Wrapper = styled.div`
    max-width: 1200px;
    margin: auto;
    padding: 12px;
    min-height: 80vh;
`;

export const SignUp = styled.p`
    cursor: pointer;
    color: #df7357;
    text-align: center;
`;

export const AccountForm = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    background-color: #0d5274;
    color: #f7e7be;
    text-align: center;
    align-items: center;
    padding: 32px 80px;
    border-radius: 8px;
    text-align: left;

    h1 {
        text-align: center;
    }

    button {
        margin: 18px 0;
        background-color: rgb(253, 137, 64);
        padding: 12px 24px;
        color: #fff;
        border-radius: 4px;
        letter-spacing: 1px;
        font-weight: bold;
        border: none;
    }

    input {
        width: 20vw;
    }
`;

export const DetailsContainer = styled.div`
    display: flex;
    gap: 20px;
`;

export const Labels = styled.div``;

export const Values = styled.div``;

export const Container = styled.div`
    position: fixed;
    top: 20vh;
    bottom: 20vh;
    right: 0;
    width: 20em;
    background: #333;
    color: #eee;
    padding: 1em;
    border: 1px solid black;
    opacity: 0.75;
`;

export const H1 = styled.h1`
    text-align: end;
    font-size: 16px;
`;

export const UserContainer = styled.div``;
