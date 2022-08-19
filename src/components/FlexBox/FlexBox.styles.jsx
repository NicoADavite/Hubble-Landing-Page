import styled from 'styled-components';

export const StyledFlexBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    ${({bgc}) => bgc && `background-color: ${bgc};`}    
    ${({pad}) => pad && `padding: ${pad};`}
    ${({radius}) => radius && `border-radius: ${radius};`}
    ${({radius}) => radius && `box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);`}
    transition: transform 0.35s;

    &:hover{
        ${({isHover}) => isHover && "transform: scale(1.01);"}
    }
`