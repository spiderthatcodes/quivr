import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
    top: 15vh;
    bottom: 25vh;
    right: 0;
    width: 25em;
    background: #072c42;
    color: #eee;
    padding: 1em;
    border: 1px solid black;
    border-radius: 8px;
    padding: 0 16px;
    font-weight: bold;

  h2 {
    text-align: end;
    font-size: 16px;
    color: white;

    td {
      line-height: 1.4;
      margin: 2em 0 0 0;
    }
  }
`;

export const CartContainer = styled.div`
  display: flex;
  gap: 20px;
  overflow: auto;
`;
