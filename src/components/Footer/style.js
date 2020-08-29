import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  font-family: "Marcellus", serif;
  .content {
    max-width: 80rem;
    margin-left: auto;
    margin-right: auto;
    padding-top: 3cm;

    .row {
      display: grid;
      grid-template-columns: repeat(4, 2fr);
      @media (max-width: 768px) {
        display: block;
      }
      .col {
        @media (max-width: 768px) {
          display: block;
          padding: 1rem 2rem;
        }
        ol {
          li {
            margin-bottom: 1rem;
          }
        }
      }
      .col-1 {
        display: flex;

        justify-content: center;
        @media (max-width: 768px) {
          justify-content: flex-start;
        }
        img {
          max-width: 4rem;
        }

        h3 {
          font-family: "Marcellus", serif;
          margin-top: 0.5cm;
        }
      }
      .col-2 {
        ol {
          padding: 0 2rem;
          @media (max-width: 768px) {
            padding: 0 0rem;
          }
        }
      }
    }
  }

  .footer-text {
    text-align: center;
    padding: 2.5rem;
  }
`;
