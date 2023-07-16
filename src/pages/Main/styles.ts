import styled from 'styled-components'

export const Container = styled.div`
 width: 100%;
 min-height: 100vh;
 display: flex;

 > section {
    flex: 1;
    width: 100%;
    height: 100vh;
    overflow-y: auto;
    padding: 2rem 1.875rem;

    span{
      color: ${(props) => props.theme.colors.orange};
    }

    div{
      display: flex;
      gap: 0.8rem;      
    }

    img {
      width: 4rem;
      margin-bottom: 2rem;
    }

    @media (max-width: 720px) {
      display: flex;
      flex-direction: column;
      padding-bottom: 8rem;

      img {
        align-self: center;
      }

      div{
        align-items: center;
        justify-content: center;      
     
        h2{
          margin-bottom: 2.5rem;
        }
      }
    }
  }

`



