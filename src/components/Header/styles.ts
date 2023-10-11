import styled from "styled-components";
export const Container = styled.header`
  width: full;
  background-color: #121214;
`;

export const Content = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content:space-between;
  padding: 2rem 1rem 12rem;

  button {
    font-size: 1rem;
    color: #fff;
    background-color: #00875f;
    border:0; 
    padding: 0 2rem;
    border-radius: 0.3rem ;
    height: 3rem;

    transition:filter 0.2s;

    &:hover{
        filter:brightness(0.9)
    }
  }

`;
