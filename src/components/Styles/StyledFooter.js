import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.footer};
  color: white;
  padding: 100px 0 60px;

  ul {
    list-style-type: none;
    color: white;
  }

  ul li {
    margin-bottom: 20px;
  }

  p {
    text-align: right;
    color: white;
  }



  @media (max-width: ${({ theme }) => theme.mobile}) {
    text-align: center;
    ul {
      padding: 0;
    }
    p {
      text-align: center;
    }
  }

`