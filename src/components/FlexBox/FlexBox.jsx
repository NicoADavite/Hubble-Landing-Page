import { StyledFlexBox } from "./FlexBox.styles";

const FlexBox = ({ children, pad, radius, bgc, isHover }) => {
  return <StyledFlexBox {...{ pad, radius, bgc, isHover }}>{children}</StyledFlexBox>;
};

export default FlexBox;
