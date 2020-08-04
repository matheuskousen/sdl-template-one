import styled from "styled-components";

export const Container = styled.section`
  width: 100%;

  .row {
    width: 100%;
    max-width: 80rem;
    margin-left: auto;
    margin-right: auto;
    padding: 5rem 0;
    @media (max-width: 72rem) {
      padding: 0rem 0;
    }
    .title {
      max-width: 25rem;
      text-align: center;
      margin-left: auto;
      margin-right: auto;
    }
    .Infos {
      display: grid;
      grid-template-columns: 1fr 1fr;
      margin: 4rem;
      @media (max-width: 72rem) {
        display: block;
        width: 100%;
        margin: 2rem 0 !important;
      }
      .col-image,
      .col-text {
        padding: 0 1rem;
        @media (max-width: 72rem) {
          padding: 2rem 0rem;
          width: 100%;
        }
      }
      .col-image {
        display: flex;
        @media (max-width: 72rem) {
          order: 0 !important;
        }

        img {
          width: 100%;
          object-fit: cover;
        }
      }
      .col-text {
        @media (max-width: 72rem) {
          padding: 0 1rem;
        }
        p {
          margin-top: 1rem;
        }
      }
    }
  }
`;
