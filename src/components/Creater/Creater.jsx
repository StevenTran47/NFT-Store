import styled from "styled-components"
const StyledCreater = styled.div`
    width: 348px;
    height: 478px;

    background: #FFFFFF;
    border-radius: 16px;
    .top-creater{
        display: flex;
        justify-content: space-around;
        flex-direction: row;
        align-items: center;
        padding-top: 32px;
        a{
            text-decoration: none;
        }        
    }
    .top-title{
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 31px;
        font-feature-settings: 'salt' on;

        /* Text/color1 */

        color: #27262E;
    }
    .top-see{
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 21px;
        /* identical to box height */

        text-align: right;
        font-feature-settings: 'salt' on;

        /* Text/color2 */

        color: #747475;
    }
`;
export const Creater = () =>{
    return(
        <StyledCreater>
            <div className="top-creater">
                <div className="top-title"><span>Top Creater</span></div>
                <div><a className="top-see" href="#">See All</a></div>
            </div>
        </StyledCreater>
    );
}