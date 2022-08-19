import styled from 'styled-components';

export const StyledButton = styled.button`
    border-radius: 50px;
    border: none;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
    font-size: 1rem;
    font-weight: 700;
    padding: 15px 60px;
    cursor: pointer;
    background-color: ${({bgc}) => bgc || "#fff"};
    color: ${({color}) => color || "#333"};

    &:hover {
        opacity: 0.9;
        transform: scale(0.99);
    }
`