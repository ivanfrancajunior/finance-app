import styled from "styled-components"

export const Container = styled.section`
    display: grid;
    grid-template-columns: repeat(3, 1fr );
    gap: 2rem;
    margin-top: -10rem;

    div{
        background-color: #323238;
        padding: 1rem 2rem;
        border-radius: 0.3rem;
    }
    & .highlight {
        background-color: #00875f;
    }
    header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        
    }

    strong{
        display: block;
        margin-top: 1rem;
        font-size: 2rem;
        line-height: 3rem;

    }


`