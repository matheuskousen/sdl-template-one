import styled from "styled-components";

export const Article = styled.article`
  width: 100%;
  background: #212121;
  color: #424242;

  @media (min-width: 768px) {
    gap: 1rem;
    padding: 1rem 0;
  }
  .row {
    max-width: 70rem;
    margin-left: auto;
    margin-right: auto;
    display: grid;

    @media (min-width: 768px) {
      gap: 1rem;
      padding: 0 1em;
    }

    grid-template-columns: repeat(
      auto-fill,
      minmax(var(--auto-grid-min-size, 30rem), 1fr)
    );
    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
    }

    .col-left {
      @media (max-width: 768px) {
        order: 1;
      }
      .col-post-content {
        h2 {
          color: #9e9e9e !important;
          line-height: 1.2 !important;
          @media (max-width: 768px) {
            text-align: center;
            margin-top: 1rem;
            padding: 1cm 1rem;
            line-height: 1.4;
          }

          text-align: start;
          font-size: 48px;
          line-height: calc(48px * 2);
          letter-spacing: -0.05rem;
          color: #424242;
        }

        p {
          margin-top: 0.9rem;
          font-size: 17px;
          line-height: calc(17px * 2);
          letter-spacing: -0.06rem;
          color: #9e9e9e;
          @media (max-width: 768px) {
            padding: 0 1rem;
            margin-bottom: 1rem;
          }
        }
      }
    }
    .col-right {
      display: flex;
      @media (max-width: 768px) {
        order: 0;
      }
    }
  }

  .why {
    margin-top: 0rem;
    padding-top: 1cm;

    width: 100%;
    .row__why {
      max-width: 70rem;
      margin-left: auto;
      margin-right: auto;

      .why__headline {
        max-width: 50rem;
        margin-left: auto;
        margin-right: auto;
        background: #212121;
        @media (max-width: 768px) {
          padding: 0 1rem;
        }
        img {
          width: 100%;
        }
        h3,
        p {
          letter-spacing: -0.08rem;
          text-align: center;
          color: #9e9e9e;
        }
        h3 {
          font-size: 28px;
          line-height: calc(28px * 2);
          padding-top: 2rem;
        }
        p {
          font-size: 16px;
          line-height: calc(16px * 1.6);

          margin-top: 1rem;
          padding-bottom: 2rem;
        }
      }
    }

    .groud-cards {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1rem;
      padding: 5rem 0;
      @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
      }

      .card {
        max-width: 20rem;
        margin-left: auto;
        margin-right: auto;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background: #0c0c0c;
        padding: 2rem 0;
        @media (max-width: 768px) {
          margin-top: 2rem;
        }
        &:nth-child(2) {
          filter: drop-shadow(1rem 1rem #212020);
        }

        &:nth-child(1) {
          filter: drop-shadow(-1rem 1rem #212020);
        }

        &:nth-child(3) {
          filter: drop-shadow(1rem 1rem #212020);
          @media (max-width: 768px) {
            filter: drop-shadow(-1rem 1rem #212020);
          }
        }
        img {
          max-width: 5rem;
          margin-left: auto;
          margin-right: auto;
          transition: 1s ease;
          &:hover {
            transform: scale(1.1, 1.1);
          }
        }

        .card-body {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 0 1.5em;
          margin-top: 1em;

          h4,
          p {
            letter-spacing: -0.08rem;

            text-align: center;
          }
          h4 {
            font-size: 28px;
            line-height: calc(28px * 2);
          }
          p {
            font-size: 15px;
            line-height: calc(15px * 1.6);

            margin-top: 1rem;
          }
        }
      }
    }
  }
`;
