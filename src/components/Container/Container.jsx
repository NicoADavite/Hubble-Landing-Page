import { StyledContainer } from './Container.styles'


const Container = ({children, m, bgc}) => {
  return (
    <StyledContainer {...{m, bgc}}>
        {children}
    </StyledContainer>
  )
}

export default Container