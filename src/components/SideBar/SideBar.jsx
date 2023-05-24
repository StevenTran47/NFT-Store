import styled from "styled-components";
import logo from "assets/logo.svg";
import marketIcon from "assets/market-icon.svg";
import dashboardIcon from "assets/dashboard.svg";
import bidsIcon from "assets/bids.svg";
import portfolioIcon from "assets/portfolio.svg";
import walletIcon from "assets/wallet.svg";
import favourIcon from "assets/favour.svg";
import historyIcon from "assets/history.svg";
import settingsIcon from "assets/settings.svg";
import lightmodeIcon from "assets/lightmode.svg"
import vectorIcon  from "assets/Vector.svg"

import { NavLink } from "react-router-dom";
const StyledSideBar = styled.div`
  background-color: white ;
  height: 100vh;
  padding: 32px;
  .logo {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 54px;
  }
  .logo-text {
    font-weight: 700;
    font-size: 28px;
    line-height: 36px;
    color: #27262E;
  }
  .logo-desc {
    font-size: 10px;
    line-height: 13px;
    color: #7A797D;

  }
  h6{
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 16px;
    /* identical to box height */

    letter-spacing: 0.14em;
    text-transform: uppercase;

    /* Text/color1 */

    color: #27262E;
  }
   //dark mode
   .uael-main-btn {
    display: flex;
    justify-content: space-around;
    font-size: 20px;
    .uael-toggle {
    display: block;
    position: relative;
    background: 0 0;
    width: 2em;
    height: 1.3rem;
    .uael-switch-round-2 {
      visibility: hidden;
      margin: 0 !important;
      padding: 0 !important;
      opacity: 0;
      display: none;
    }
    input[type='checkbox'] + label {
      position: relative;
      display: inline-block;
      top: 0;
      left: 0em;
      padding-left: 0;
      color: #000;
      cursor: pointer;
      width: 2em;
      height: 1em;
    }
    input[type='checkbox'] + label:before {
      transition: background-color 0.4s ease;
      box-sizing: border-box;
      position: absolute;
      top: 0em;
      left: 0;
      content: '';
      width: 2em;
      height: 1em;
      background-color: #767688;
      border-radius: 5em;
    }
    input[type='checkbox'] + label:before {
      background-color:#5429FF;
    }
    input[type='checkbox']:checked + label:before {
      background-color: #000000;
    }
    input[type='checkbox']:checked + label:after {
      transform: translateX(1.3em);
      border: 0.2em solid #000000;
      background: url(vectorIcon);
      background-color: #fff;
    }
    input[type='checkbox'] + label:after {
      box-sizing: border-box;
      transition: transform 0.4s cubic-bezier(0.45, 1.8, 0.5, 0.75);
      position: absolute;
      top: 0;
      left: 0em;
      width: 1.3em;
      height: 1.3em;
      content: '';
      font-size: 0.75em;
      border-radius: 50em;
      border: 0.2em solid #767676;
    }
    input[type="checkbox"] + label:after {
        border: 0.2em solid #5429FF;
        background: url(vectorIcon);
        background-color: #fff;
    }
  }
}


`;
const StyledNavItem = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 16px;
  font-weight: 500;
  line-height: 21px;
  color: #7A797D;
  margin-bottom: 25px;
  a {
    text-decoration: unset;
    color: #7A797D;
  }
  
`;
const NavItem = ({ text, path, icon }) => {
    return (
        <StyledNavItem>
            <img src={icon} alt="nav-icon"></img>
            <NavLink to={path}>{text}</NavLink>
        </StyledNavItem>
    )
}
export const SideBar = () => {
    return (
        <StyledSideBar>
            <div className="logo">
                <img src={logo} alt="logo"></img>
                <div>
                    <div className="logo-text">MyNFT</div>
                    <div className="logo-desc">NFT Marketplace</div>
                </div>
            </div>
            <div className="nav">
                <NavItem icon={dashboardIcon} text="Dashboard" path="/"></NavItem>
                <NavItem icon={marketIcon} text="Market" path="/about"></NavItem>
                <NavItem icon={bidsIcon} text="Active Bids" path="/login"></NavItem>
                <h6>Profile</h6>
                <NavItem icon={portfolioIcon} text="My Portfolio" path="/"></NavItem>
                <NavItem icon={walletIcon} text="Wallet" path="/"></NavItem>
                <NavItem icon={favourIcon} text="Favourites" path="/"></NavItem>
                <NavItem icon={historyIcon} text="History" path="/"></NavItem>
                <NavItem icon={settingsIcon} text="Settings" path="/"></NavItem>
                <h6>Other</h6>
               
                <div className="toggle">                  
                    <div class="uael-main-btn" data-switch-type="round_2">
                    <NavItem icon={lightmodeIcon} text="Light Mode"></NavItem>  
                        <div class="uael-toggle">
                            <input class="uael-switch-round-2 elementor-clickable" type="checkbox" id="toggle_2" />
                            
                            <label for="toggle_2" class="elementor-clickable"></label>
                            
                        </div>
                    </div>
                </div>
            </div>
        </StyledSideBar>
    );
};