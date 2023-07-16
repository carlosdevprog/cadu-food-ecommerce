import styled from "styled-components";

export const Container = styled.header`

display: flex;
justify-content: space-between;
padding-top: 2rem;

h2{
        font-size: 1.25rem;
    }

img{
        width: 2.5rem;        
    }


.container-logo{
        display: flex;
        gap: 0.8rem;

        span{
            color: ${(props) => props.theme.colors.orange};
        }

}


.container-cart{
        display: flex;
        gap: 0.8rem;

        span{
            color: ${(props) => props.theme.colors.yellow};
            font-weight: 500;
            font-size: 1rem;
            
        }        
        
}    
   
`