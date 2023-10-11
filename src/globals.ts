import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --backgound:#1a1a1a; 
        --red: #e52e4d;
        --blue: #5429cc;
        --btue-light: #F6F2F5;
        --text-title:#363f5f;
        --text-body:#969cb3;
        --shape:#ffffff;


    }
    body{
        -webkit-font-smooting: antialiased;

    }
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        color: #ffffffde;
        background-color: --backgound;
        font-weight: 400;
        font-size: 1rem;
    }
    body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;

    }
    h2, h3,h4,h5,h6, strong{
        
        font-size: 1.75rem;
        font-weight: 500;
    }
    p{
        font-size: 1rem;

    }
    button{
        cursor: pointer;
    }

    .react-modal-overlay{
        background: rgba(0, 0, 0, 0.75);
       
        position: fixed;
        display: flex;

        align-items: center;
        justify-content: center;

        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }
    .react-modal-content{
        width: 100%;
        max-width: 33.4rem;
        background-color: #202024;
        padding: 3rem;
        position: relative;
        border-radius: 0.5rem;
    }
    .react-modal-close{
        position: absolute;
        right: 2.5rem;
        top: 1.5rem;
        border:0; 
        background: transparent;

        transition:filter 0.2s;

    &:hover{
        filter:brightness(0.9)
    }
    }
`;
