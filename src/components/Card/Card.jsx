import styled from "styled-components"
import ethereum from "assets/Ethereum-blue.svg"
import { Button } from 'components/Button'

const StyledCard = styled.div`
  padding: 24px;
  background-color: white;
  border-radius: 20px;
  font-size: 12px;
  line-height: 16px;

  

  /* Text/color2 */

  color: #747475;
  .title {
    padding-bottom: 12px;
    text-align: left;
    color: #747475;
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
    margin-bottom: 12px;
  }
  .amount {
    font-size: 24px;
    line-height: 31px;

    /* Text/color1 */

    color: #27262E;
  }
  .amount-wrapper {
    margin-bottom: 12px;
  }
  .content {
    font-size: 24px;
    line-height: 31px;

    /* Text/color1 */

    color: #27262E;
  }
  .eth {
    margin-right: 4px;
  }      
`;
export const Card = ({ title, amount, content, percent }) => {
  return (
    <StyledCard>
      <div className="title">{title}</div>
      {amount ?
        <div className='amount-wrapper'>
          <img className="eth" src={ethereum} alt="ethereum" /><span className='amount'>{amount}</span> ETH
        </div> :
        <div className='amount-wrapper'>
          <span className="content">{content}</span> %
        </div>
      }
      <Button percent={percent} textColor="#747475" borderColor="#E9E9E9">{percent}%</Button>
    </StyledCard>
  )
}