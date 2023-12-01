import styled from 'styled-components';

export const Wrapper = styled.div`
    max-width: 1200px;
    margin: auto;
    padding: 12px;
    min-height: 80vh;
`;

export const Table = styled.table`
    width: 100%;
    font-size: 18px;

    td {
        background-color: rgb(255, 255, 255, 0.4);
        padding: 16px;
        color: #132734;
    }

    table,
    th,
    td {
        border: 3px solid #5c728e;
    }

    th {
        padding: 22px;
        color: #5c728e;
        background-color: rgb(255, 255, 255, 0.6);
    }
`;
