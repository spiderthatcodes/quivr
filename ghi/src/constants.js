import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 12px;
  min-height: 80vh;
`;

export const Table = styled.table`
  width: 100%;
  max-width: 1200px;
  margin: auto;
  margin-bottom: 50px;
  padding: 12px;
  min-height: 60vh;
  background-color:#105469;
  
  *,
  *:before,
  *:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #105469;
    font-family: "Open Sans", sans-serif;
  }
  table {
    background: #E76215;
    border-radius: 0.25em;
    border-collapse: collapse;
    margin: 1em;
  }
  th {
    border-bottom: 1px solid #364043;
    color: #e2b842;
    font-size: 0.85em;
    font-weight: 600;
    padding: 0.5em 1em;
    text-align: left;
  }
  td {
    color: #fff;
    font-weight: 400;
    padding: 0.65em 1em;
  }
  .disabled td {
    color: #4f5f64;
  }
  tbody tr {
    transition: background 0.25s ease;
  }
  tbody tr:hover {
    background: #E76215;
  }
`;


export const OrderOptions = [
  "Order Received",
  "Foam being cut",
  "Sent to glassing",
  "Completed",
];
