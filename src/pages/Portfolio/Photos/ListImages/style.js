import styled from "styled-components";

export const Ul = styled.ul`
  background: #212121;
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(var(--auto-grid-min-size, 25rem), 1fr)
  );
`;

export const Li = styled.li`
  position: relative;
  overflow: hidden;
  display: flex;
  margin: 0.2rem;

  img {
    width: 100%;
    height: 100%;
    transition: 1s transform ease;
    &:hover {
      transform: scale(1.2, 1.2);
    }
  }
`;
