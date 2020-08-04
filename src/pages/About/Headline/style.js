import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: 300px;
  padding: 25px 0;
  .row {
    max-width: 1100px;
    margin-left: auto;
    margin-right: auto;
    @media (max-width: 768px) {
      padding: 0 1rem;
    }
    h1,
    p {
      text-align: center;
    }
    h1 {
      text-align: center;
      font-size: 70px;

      line-height: calc(70px * 1.6);
    }
    p {
      font-size: 16px;
      line-height: calc(16px * 2);
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
    }
  }
`;
