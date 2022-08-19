import styled from 'styled-components';

export const StyledText = styled.p`
    font-size: ${({size}) => size || "18px"};
    color: ${({color}) => color || "#333"};
    font-weight: ${({weigth}) => weigth || "700"};
    ${({m}) => m && `margin: ${m}`}
`