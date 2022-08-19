import { StyledHeader, StyledNav, StyledLogo } from "./Header.styles";
import Container from "../Container";
import Button from "../Button"
import FlexBox from "../FlexBox";
import Text from "../Text";


const Header = ({ children }) => {
  return (
    <StyledHeader>
      <Container>
        <StyledNav>
          <StyledLogo src="./images/logo.svg" alt="logo" w="300px"/>
          <Button>Try it for free!</Button>
        </StyledNav>
        <FlexBox>
            <Container>
              <Text size="35px">Build The Communuty</Text>
              <Text size="35px" m="0 0 40px">Your Fans will Love</Text>
              <Text size="20px" m="0 0 30px" weigth="500">
                Huddle re-imagines the way we build communities. You have a
                voice, but so does your audience. Create connections with your
                users as you engage in genuine discussion
              </Text>
              <Button color="#f7f7f7" bgc="#FB53BF">Get Started for free</Button>
            </Container>
            <Container>
              <StyledLogo src="./images/illustration-mockups.svg" w="550px" alt="logo-2"/>
            </Container>
          </FlexBox>
      </Container>
    </StyledHeader>
  );
};

export default Header;
