import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: 300px;
  padding: 2em 0;

  transition: 1s all ease 0s;
`;

export const Row = styled.section`
  max-width: 50rem;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;

  h1,
  p {
    text-align: center;
  }

  p {
    max-width: 25rem;
    margin: 0 auto 0 auto;
    margin-top: 1em;
    font-size: 17px;
    line-height: calc(17px * 1.5);
    letter-spacing: -0.04em;
  }
`;

export const Title = styled.h1`
  font-size: 75px;
  line-height: calc(75px * 1.5);
  margin-bottom: ${({ isvaluescroll }) => `${isvaluescroll}rem`};
`;
