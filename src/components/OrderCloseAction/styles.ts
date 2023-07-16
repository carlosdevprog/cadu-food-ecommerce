import { darken } from "polished";
import styled from "styled-components";


export const Container = styled.footer`
display: flex;
align-items: center;
justify-content: space-between;
margin-top: 1rem;
gap: 0.8rem;



button{
    background: ${(props)=> props.theme.colors.red};
    width: 100%;
    max-width: 16.5rem;
    min-height: 4rem;
    border: none;
    border-radius: 8px;
    font-weight: 700;
    font-size: 1.25rem;
    text-transform: uppercase;
    color: ${(props)=> props.theme.colors.white};
    transition: background 0.3s;

    &:hover{
        background: ${darken(0.1, '#AA2424')}
    }
}

span{
    font-weight: 500;
    text-transform: uppercase;

    strong{
        margin-left: 0.75rem;
        font-weight: 700;
        font-size: 2.25rem;
    }
}

@media(max-width: 540px){
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;

    button{
        max-width: 100%;
    }

    span{
        margin-bottom: 2rem;

        strong{
            font-size: 2.75rem;
        }
    }
}

`