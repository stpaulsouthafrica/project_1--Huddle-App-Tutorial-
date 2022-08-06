import styled from "styled-components";

export const StyledHeader = styled.header`
    padding: 40px 0;  
    background-color: ${({ theme }) => theme.colors.header};
    h1{
        color: ${({ theme }) => theme.colors.h1} ;
        font-family: 'Uchen', serif;
    } 
`

export const StyledNav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;

    @media (max-width: ${({ theme }) => theme.mobile}) {
        flex-direction: column;
    }
`

export const StyledLogo = styled.img`
    @media (max-width: ${({ theme }) => theme.mobile}) {
        margin-bottom: 40px;
    }
`

export const StyledImage = styled.img`
    width: 375px;
    margin-left: 40px;

    @media (max-width: ${({ theme }) => theme.mobile}) {
        margin: 30px 0 30px;
      }
`