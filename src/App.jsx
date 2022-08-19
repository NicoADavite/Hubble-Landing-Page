import { ThemeProvider } from "styled-components";

import Container from "./components/Container";
import Header from "./components/Header";
import FlexBox from "./components/FlexBox";
import Text from "./components/Text";

import { GlobalStyle } from "./theme/global";
import { theme } from "./theme/theme";

const App = () => {
  return (
    <>
      <ThemeProvider {...{ theme }}>
        <GlobalStyle />
        <Header />
        <Container m={"70px auto"}>
          <Container m={"30px auto"}>
            <FlexBox pad="40px 50px" radius="50px" bgc="#fff" isHover>
              <Container>
                <Text size="35px" weigth="700" m="20px 0">
                  Grow Together
                </Text>
                <Text size="20px" weigth="500" color="#a9a9a9">
                  Generate meaningful discussions with your audience and build a
                  strong loyal community. think of the insightful conversations
                  you miss out on with a feedback form.
                </Text>
              </Container>
              <Container>
                <img
                  src="./images/illustration-grow-together.svg"
                  alt="grow-together"
                  width="400px"
                />
              </Container>
            </FlexBox>
          </Container>
          <Container>
            <FlexBox pad="40px 50px" radius="50px" bgc="#fff" isHover>
              <Container>
                <img
                  src="./images/illustration-flowing-conversation.svg"
                  alt="grow-together"
                  width="400px"
                />
              </Container>
              <Container>
                <Text size="35px" weigth="700" m="20px 0">
                  Flowing Conversations
                </Text>
                <Text size="20px" weigth="500" color="#a9a9a9">
                  Generate meaningful discussions with your audience and build a
                  strong loyal community. think of the insightful conversations
                  you miss out on with a feedback form.
                </Text>
              </Container>
            </FlexBox>
          </Container>
          <Container></Container>
          <Container></Container>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default App;
