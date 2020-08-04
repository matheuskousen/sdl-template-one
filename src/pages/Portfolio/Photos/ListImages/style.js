import styled from "styled-components";

export const Ul = styled.ul`
  background: #f5f5f5;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

export const Li = styled.li`
  position: relative;
  overflow: hidden;
  display: flex;
  margin: 0.2rem;
  &:nth-child(1) {
    grid-column: 3/ 1;
    grid-row: 1/ 3;
  }
  &:nth-child(2) {
    grid-column: 3/ 3;
  }

  &:nth-child(4) {
    grid-column: 1 /1;
  }

  &:nth-child(6) {
    grid-column: 2 /4;
    grid-row: 3 / 5;
  }
  img {
    width: 100%;
    height: 100%;
    transition: 1s transform ease;
    &:hover {
      transform: scale(1.2, 1.2);
    }
  }
`;
