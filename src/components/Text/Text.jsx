import {StyledText} from './Text.styles'

const Text = ({size, color, m, weigth, children}) => {
  return (
    <StyledText {...{size, color, m, weigth}}>{children}</StyledText>
  )
}

export default Text