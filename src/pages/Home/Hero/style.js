import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  min-height: 100vh;

  margin-top: 70px;

  padding: 2rem 0;
  .banner-wrapper-row {
    width: 90%;
    max-width: 60rem;
    margin-left: auto;
    margin-right: auto;
    min-height: 100%;
    display: grid;
    grid-template-rows: auto auto;

    .left {
      margin: 2rem 0;
      text-align: center;
      padding: 2rem;
      @media (max-width: 72rem) {
        padding: 0rem 0;
        margin: 1rem 0;
      }
      h1 {
        @media (max-width: 768px) {
          font-size: 2rem;
          line-height: calc(2rem * 1.5);
        }
      }
    }
    .line {
      background: #865511;
      max-width: 100%;
      margin-left: auto;
      margin-right: auto;
      height: 1rem;
      margin-bottom: 2rem;
    }
    .right {
      display: flex;
      padding: 1em 0;
      justify-content: center;
      margin: 1rem 0;
      filter: drop-shadow(0.5em 0.5em 1em #050000);
      .card {
        display: flex;
        flex-direction: column;
        background: #424242;

        border-radius: 10px;
        color: #fafafa;
        @media (max-width: 72rem) {
          display: block;
        }
        max-width: 25rem;
        height: 100%;

        img {
          width: 100%;
          height: 350px;
          object-fit: cover;
          border-radius: 10px 10px 0px 0px;
          object-position: 80% 20%;
        }
        .card-body {
          padding: 1rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          a,
          h3,
          p {
            margin-top: 1rem;
            text-align: center;
          }
        }
      }
    }
  }
`;
