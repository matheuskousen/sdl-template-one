import styled from "styled-components";

export const Container = styled.section`
  padding: 1.5cm 0;
  @media (max-width: 900px) {
    padding: 0cm;
    border: none;
  }

  h1 {
    text-align: center;
    color: #212121;
    padding: 3rem 2rem;
  }
  form {
    width: 95%;
    max-width: 30rem;
    margin-left: auto;
    margin-right: auto;
    padding: 1rem 0.5em;
    border: 1px solid transparent;
    display: flex;
    flex-direction: column;

    label {
      width: 100%;
    }
    input,
    button,
    textarea {
      outline: none;
    }

    input,
    textarea {
      background: #efefef;
      border: none;
      border: 1px solid black;
      width: 100%;
      color: #eeeeee;
      transition: 0.2s;
      padding: 0.8rem;
      color: #2c2c2c;

      &::placeholder {
        color: #212121;
      }
      &:hover,
      &:active {
        background: #e6f5fd;
        font-size: 1.2rem;
        cursor: pointer;
      }
    }

    input {
      margin: 0rem 0 0.5rem 0;
    }
    textarea {
      margin-top: 0.5rem;
      resize: vertical;
    }
    button {
      margin-top: 1rem;
      background: #2c2c2c;
      border: none;
      color: #f5f5f5;
      padding: 0.5rem 0.75rem;
      cursor: pointer;
    }
  }
`;
