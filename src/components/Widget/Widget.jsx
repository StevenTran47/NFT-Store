import styled from "styled-components"
import bannerBg from "assets/Rectangle 13.svg"
import { Card } from 'components/Card';
import { Button } from "components/Button";


const StyledWidget = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin-left: 50px;
    margin-right: 50px;
    .banner{    
        width: 716px;
        height: 354px;    
        display: flex;
        justify-content: center;
        align-items: start;
        flex-direction: column;
        gap: 20px;
        background-image: url("${bannerBg}"), linear-gradient(75.33deg, rgba(0, 0, 0, 0.2) -10.41%, rgba(0, 0, 0, 0) 62.93%), url(fakurian-design-5KJKcu6vkE0-unsplash-scaled.jpg);;
        background-repeat: no-repeat;
        border-radius: 12px;
        
    }
    .banner-title{
            width: 70%;       
            padding-left: 60px;
            font-family: 'DM Sans';
            font-style: normal;
            font-weight: 700;
            font-size: 54px;
            line-height: 120%;
            /* or 65px */

            letter-spacing: -0.02em;

            color: #FFFFFF;
        }
    .banner-btn{
            padding-left: 60px;
            display: flex;
            justify-content: space-around;
            gap: 12px;
           
    }
    .cart{
        width: 500px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: 30px;
    }
`;
export const Widget = () => {
    return (
        <StyledWidget>
            <div className="widget-item">
                <div className="banner">     
                    <div className="banner-title">Discover, Create and Sell Your Own NFT.</div>
                    <div className="banner-btn">
                        <Button  width={128} height={46} textColor="#5429FF" bgColor="#FFFFFF" >Following</Button>
                        <Button  width={113} height={46} textColor="white" bgColor="rgba(0,0,0,0)" borderColor="#FFFFFF">Following</Button>
                    </div>
                </div>
            </div>
            <div className="widget-item">
                <div className="cart">
                    <Card title={"Revenue"} amount="5.00" percent={12.3}></Card>
                    <Card title={"Spending"} amount="2.00" percent={8.1}></Card>
                    <Card title={"Roi"} content="+14.02" percent={-5.1}></Card>
                    <Card title={"Estimated"} amount="7.00" percent={3.2}></Card>
                </div>
            </div>
        </StyledWidget>
    );
};