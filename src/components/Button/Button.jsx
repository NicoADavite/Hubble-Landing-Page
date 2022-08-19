import { StyledButton} from "./Button.styles"

const Button = ({bgc, color, children}) => {
  return (
    <StyledButton bgc={bgc} color={color}>{children}</StyledButton>
  )
}

export default Button