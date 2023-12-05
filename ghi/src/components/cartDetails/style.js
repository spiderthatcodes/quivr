import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  top: 0vh;
  bottom: 0vh;
  right: 0;
  width: 20em;
  background: #333;
  color: #eee;
  padding: 1em;

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
