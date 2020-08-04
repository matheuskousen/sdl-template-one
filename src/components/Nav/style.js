import styled, { css } from "styled-components";

export const Container = styled.nav`
  width: 100%;
  padding: 0 4em;
  background: #212121;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 1068;
  left: 0;
  @media (max-width: 72rem) {
    padding: 0 1em;
  }

  .logo {
    display: block;
    margin: 0;
    line-height: 1.2em;
    a {
      margin: 0;
      img {
        width: 50px;
        line-height: calc(50px * 1.5);
        @media (max-width: 72rem) {
          width: 40px;
          line-height: calc(40px * 1.5);
        }
      }
    }
  }
  ul.btn-mobile-toggle {
    height: 70px;
    width: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    li {
      width: 40px;
      height: 4px;
      background: #f5f5f5;
      &:nth-child(2) {
        margin-top: 0.5rem;
      }
    }
    @media (min-width: 72rem) {
      display: none;
    }
  }
`;

export const ListLinks = styled.ul`
  @media (max-width: 72rem) {
    display: flex;
    position: fixed;
    transition: 400ms all ease 0s;
    background: #212121;
    width: 0%;
    height: 100vh;
    overflow: hidden;
    right: 0;
    top: 0;
    z-index: -1;
    color: white;
    flex-direction: column;
    justify-content: space-evenly;

    ${(props) =>
      props.isOpen &&
      css`
        width: 100%;
        transition: 1s all ease 0s;
      `}
  }
  display: flex;
  align-items: center;
`;

export const Li = styled.li`
  @media (max-width: 768px) {
    text-align: end;
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: flex-end;
    padding-right: ${({ isMovingtoRight }) =>
      isMovingtoRight ? "1em" : "150rem"};
    align-items: center;
    opacity: ${({ isOpacity }) => (isOpacity ? 1 : 0)};
    transition: 1s all cubic-bezier(0.075, 0.82, 0.165, 1) 0s;
    transition-delay: ${({ delay }) => `${delay}ms`};

    a {
      font-size: 40px;
      margin-left: -1rem;
      border-right: 2px solid red;
      padding-right: 2rem;
      letter-spacing: 10px;
    }
  }

  margin: 0 10px;
`;
