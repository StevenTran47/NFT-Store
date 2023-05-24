import styled from "styled-components";

const HeaderStyled = styled.div`
  position: relative;
  z-index: 99;
  width: 100%;
  height: 56px;
  display: flex;
  justify-content: space-between ;
  background-color: aqua ;
`;
const Header = () => {
  return (
    <HeaderStyled>
        <div>
          <div className="search">
            <input type="text" />
          </div>
        </div>
        <div>
          <div><img src="" alt="" /></div>
          <div><img src="" alt="" /></div>
        </div>  
    </HeaderStyled>
  );
};

export default Header;