import styled from "styled-components"
import greenArrow from "assets/green-arrow.svg"
import redArrow from "assets/red-arrow.svg"

const StyledButton = styled.button`
  width: ${props => `${props.width}px`};
  height: ${props => `${props.height}px`};
  border: ${props => props.borderColor ? `1px solid ${props.borderColor}` : "none"};
  border-radius: ${props => `${props.borderRadius}px`};
  background: ${props => props.bgColor};
  font-weight: 500;
  line-height: 21px;
  color: ${props => props.textColor};
  color: ${props => props.fontSize};
  img{
    margin-right: 8px;
  }
`;
export const Button = ({ width, height, textColor, bgColor, borderColor, borderRadius, percent, fontSize, children, ...rest }) => {
  return (
    <StyledButton
      percent={percent}
      width={width}
      height={height}
      textColor={textColor}
      bgColor={bgColor}
      borderColor={borderColor}
      borderRadius={borderRadius}
      fontSize={fontSize}
      {...rest}
    >
      {percent && <img src={percent < 0 ? redArrow : greenArrow} alt="icon" />}
      {children}
    </StyledButton>
  )
}
Button.defaultProps = {
  bgColor: '#FFFFFF',
  textColor: '#5429FF',
  width: 128,
  height: 46,
  fontSize: 16,
  borderRadius: 40,
};