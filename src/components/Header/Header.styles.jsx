import styled from 'styled-components';

export const StyledHeader = styled.header`
    background-color: ${({theme}) => theme.colors.header};
    padding: 40px  0px;
`;

export const StyledNav = styled.nav`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 80px;
`

export const StyledLogo = styled.img`
    width: ${({w}) => w || "400px"};
`
