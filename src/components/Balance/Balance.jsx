import styled from "styled-components";
import { Button } from 'components/Button'
import balanceBg from "assets/Ethereum (ETH).svg"
import smallETH from "assets/smallEthereum.svg"
import plus from "assets/plus.svg"
import arrow from "assets/arrow-right.svg"
const StyledBalance = styled.div`
    width: 228px;
    height: 220px;

    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 5px;

    /* Color/linier */
    background-image: url("${balanceBg}") ,linear-gradient(228.89deg, #5429FF 1.12%, #BBAAFF 100%) ;
    background-repeat: no-repeat;
    

    border-radius: 16px;
    
    
    .title {
    text-align: center;
    color: #E0DEE6;
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
    
  }
  .content {
    padding-top: 8px;
    text-align: center;
    font-size: 24px;
    line-height: 31px;
    

    /* Text/color1 */

    color: #FFFFFF;
  }
  .eth{
    padding-top: 18px;
    text-align: center;   
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    /* identical to box height */


    /* Color/white */

    color: #FFFFFF;
    span{
        padding-left: 8px;
    }
  }
  .btn{
    display: flex;
    flex-direction: row;
    text-align: center;
    justify-content: center;
    align-items: center;
    width: 170px;
    z-index: 9999;
  }
`;

export const Balance = ({ title, content }) => {
  return (
    <StyledBalance >
      <div className="title">{title}</div>
      <div className="content">{content}</div>
      <div className="eth"><img src={smallETH} alt="" /><span>ETH</span></div>
      <Button className="btn" textColor="#747475" borderColor="#E9E9E9">
        <img src={plus} alt="" />
        <span>Top Up Balance</span>
        <img src={arrow} alt="" />
      </Button>
    </StyledBalance>
  );
};