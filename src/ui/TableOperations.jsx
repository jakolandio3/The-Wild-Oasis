import styled from "styled-components";

const TableOperations = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  @media screen and (max-width: 600px) {
    gap: 0px;
    font-size: 0.5rem;
    margin: 2px;
  }
`;

export default TableOperations;
