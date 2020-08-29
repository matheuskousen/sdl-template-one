import styled from "styled-components";

export const Section = styled.section`
  display: grid;
  grid-template: auto auto / 1.1fr 1.4fr;

  @media (max-width: 900px) {
    grid-template: auto / 1fr;
    padding: 0;
  }
  max-width: 70rem;
  margin-left: auto;
  padding: 1.5cm 0;
  margin-right: auto;

  .headline-contact {
    background: url(https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)
        no-repeat,
      50% 50%;
    background-size: cover;
    background-attachment: fixed;
    position: relative;
    &::after {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background: #2c2c2c;
      opacity: 0.8;
    }
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    text-align: center;
    @media (max-width: 900px) {
      padding: 1cm;
    }

    h2,
    p,
    .logo {
      z-index: 2;
    }
    h2 {
    }

    p {
      padding: 1cm 2cm;
    }

    .logo {
      width: 100%;

      margin-top: 1cm;
      display: flex;
      justify-content: center;
      img {
        width: 5rem;
      }
    }
  }
`;
