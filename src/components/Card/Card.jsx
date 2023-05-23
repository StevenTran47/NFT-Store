import styled from "styled-components"
import ethereum from "../../assets/Ethereum-blue.svg"
const CardWrapper = styled.div`
    width: 164px;
    height: 167px;

    background: #FFFFFF;
    border-radius: 12px;

    h5{
        /* width: 58px;
        height: 18px;
        padding-left: 24px;
        padding-top: 24px; */
        
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 18px;

        /* Text/color2 */

        color: #747475;
    }
    h2{
        /* width: 81px;
        height: 31px;
        padding-left: 52px;
        padding-top: 54px; */

        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 31px;

        /* Text/color1 */

        color: #27262E;
    }
`;
export const Card = ({ name, values }) => {
    return (
        <CardWrapper>
            <h5>{name}</h5>
            
            <h2><img src={ethereum} alt="ethereum" />{values}</h2>
        </CardWrapper>
    )
}