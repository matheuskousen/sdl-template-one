import styled from "styled-components";

export const Container = styled.section`
  max-width: 60rem;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 3em;
  border-top: 1px solid #212121;
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
    border: 1px solid #212121;
    display: flex;
    flex-direction: column;

    input,
    button,
    textarea {
      outline: none;
    }

    input,
    textarea {
      background: #bbdefb;
      border: none;
      color: #eeeeee;
      transition: 0.2s;
      padding: 1rem;
      color: #212121;

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
      background: #2979ff;
      border: none;
      color: #f5f5f5;
      padding: 0.5rem 0.75rem;
      cursor: pointer;
    }
  }
`;
