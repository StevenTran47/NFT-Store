import styled from "styled-components"
import autionIcon from "assets/aution-icon.svg"
import apeSmile from "assets/apeSmile.svg"
import apeInLove from "assets/apeInLove.svg"
import top2 from "assets/top2.svg"
import top5 from "assets/top5.svg"


let bidItems = [
    {
        banner: apeInLove,
        name: "Ape In Love",
        avatar: top2,
        user: "@johnti60",
        bid: 9.10,
        like: "21,5K Likes",

    },
    {
        banner: apeSmile,
        name: "Smiling Ape",
        avatar: top5,
        user: "@m_alison",
        bid: 6.12,
        like: "21,5K Likes",

    },
    {
        banner: apeInLove,
        name: "Ape In Love",
        avatar: top2,
        user: "@johnti60",
        bid: 9.10,
        like: "21,5K Likes",

    },
    {
        banner: apeSmile,
        name: "Smiling Ape",
        avatar: top5,
        user: "@m_alison",
        bid: 6.12,
        like: "21,5K Likes",

    },
];

const StyledAution = styled.div`
    width: 70%;
   display: flex;
   flex-direction: column;
   .trending-aution{
    
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
   }
   .aution-categories{
    display: flex;
    gap: 24px;
    a{
        text-decoration: none;
        color: #7A797D;
    }
   }
   .aution-content{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
   }
   .aution-wrap{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    
   }
   .aution-item{
    width: 348px;
    height: 364px;
    background: #FFFFFF;
    border-radius: 16px;
    padding-top: 20px;
    padding-left: 20px;
   }
   .aution-title{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 100px;
    h5{
        color: #747475;
    }
   }
   .aution-user{
    display: flex;
    justify-content: start;
    align-items: center;
    padding-left: 24px;
    gap: 9px;
    span{
        color: #747475;
    }
   }
   .bid{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 25px 24px 24px ;
    span{
        color: #747475;
    }
   }
`;
export const Aution = () => {
    return (
        <StyledAution>
            <div className="trending-aution">
                <div className="title"><h1>Trending Aution</h1></div>
                <div className="aution-categories">
                    <a href="#">Art</a>
                    <a href="#">Music</a>
                    <a href="#">Collectibles</a>
                    <a href="#">Utility</a>
                </div>
            </div>
            <div className="aution-content">
               <div className="aution-wrap">
               {bidItems.map((bidItem) => {
                    const list = (
                        <div className="aution-item">
                            <img src={bidItem.banner} alt="" />
                            <div className="aution-title">
                                <h2>{bidItem.name}</h2>
                                <h5>{bidItem.like}</h5>
                            </div>
                            <div className="aution-user">
                                <img src={bidItem.avatar} alt="" />
                                <span>{bidItem.user}</span>
                            </div>
                            <div className="bid">
                                <span>Current Bid</span>
                                <span><img src={autionIcon} alt="" />
                                    <span>{bidItem.bid}</span> ETH
                                </span>
                            </div>
                        </div>
                    );
                    return list;
                })}
               </div>
            </div>
        </StyledAution>
    );
}