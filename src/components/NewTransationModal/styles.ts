import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  height: 33rem;
  h2 {
    text-align: center;
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.5rem;
    border: 1px solid #121214;
    background-color: #121214;

    &::placeholder {
      color: #7c7c8a;
    }

    & + input {
      margin-top: 1rem;
    }
  }
  button[type="submit"] {
    margin-top: 1rem;
    display: flex;
    width: 27.4rem;
    padding: 1rem 32px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 0.5rem;
    border: 1px solid #00875F;
    background-color: #00875F;
    color: #FFF;
    font-weight: 700;

    transition:filter 0.2s;

    &:hover{
        filter:brightness(0.9)
    }
  }
  
`;
