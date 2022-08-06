import styled from "styled-components";

export const StyledButton = styled.button`
    border-radius: 50px;
    border: none;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.8);
    cursor: pointer;
    font-size: 16px;
    font-weight: 700;
    padding: 15px 60px;
    background-color: ${({bg}) => bg || 'white'};
    color: ${({color}) => color || 'black' };

    &: hover {
        opacity: 1;
        transform: scale(0.98);
      }
`