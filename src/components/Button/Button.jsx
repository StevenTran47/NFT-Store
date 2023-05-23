import styled from "styled-components"
import greenArrow from "assets/green-arrow.svg"
import redArrow from "assets/red-arrow.svg"

const ButtonWrapper = styled.button`
  width: 115px;
  height: 46px;
  border: 1px solid #E9E9E9;
  border-radius: 12px;
  background: #FFFFFF;
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
  color: #747475;
  img{
    margin-right: 8px;
  }
`;
export const Button = ({ percent, children, ...rest }) => {
  return (
    <ButtonWrapper
    percent = {percent}
    children = {children}
    {...rest}
    >
      {percent && <img src={percent < 0 ? redArrow : greenArrow} alt="icon" />}
      
      {children} %     
    </ButtonWrapper>
  )
}