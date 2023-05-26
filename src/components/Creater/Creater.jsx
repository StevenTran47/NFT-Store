import styled from "styled-components"
import { Button } from "components/Button";

import top1 from "assets/top1.svg"
import top2 from "assets/top2.svg"
import top3 from "assets/top3.svg"
import top4 from "assets/top4.svg"
import top5 from "assets/top5.svg"
import top6 from "assets/top6.svg"

let topUsers = [
    {
        id: 1,
        name: "Michael Jordan",
        user: "@jordan_",
        img:  top1 ,
    },
    {
        id: 2,
        name: "John Tibao",
        user: "@johnti60",
        img:  top2 ,
    },
    {
        id: 3,
        name: "Teresa",
        user: "@teresa",
        img:  top3 ,
    },
    {
        id: 4,
        name: "Johan Hawn",
        user: "@j_hawn",
        img:  top4 ,
    },
    {
        id: 5,
        name: "Maria Alison",
        user: "@m_alison",
        img:  top5 ,
    },
    {
        id: 6,
        name: "Sam Erricson",
        user: "@erricsonsam",
        img:  top6 ,
    }
];

const StyledCreater = styled.div`
    width: 348px;;
    height: 690px;

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
    .top-user{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
    }
    .stt{
        font-family: 'DM Sans';
        color: #27262E;
    }
    h6{
        color: #747475;
    }
`;
export const Creater = () => {
    return (
        <StyledCreater>
            <div className="top-creater">
                <div className="top-title"><span>Top Creater</span></div>
                <div><a className="top-see" href="#">See All</a></div>
            </div>
            <div className="top-users">
            {topUsers.map((topUser) => {
        const list = (
          <div className="top-user">
            <p className="stt">{topUser.id}</p>
            <img src={topUser.img} />
            <div className="top-users-title"><h5>{topUser.name}</h5><h6>{topUser.user}</h6></div>
            <Button  width={77} height={32} textColor="#5429FF" bgColor="#5429ff1a" borderRadius={40} >Follow</Button>
          </div>
        );
        return list;
      })}
            </div>
        </StyledCreater>
    );
}