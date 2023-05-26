import styled from "styled-components"
import { Aution } from "components/Aution";
import { Creater } from "components/Creater";
const StyledDashBoard = styled.div`
    width: 100%;
    height: 100%;
    padding-top: 32px;
    display: flex;
    justify-content: space-around;
    gap: 21px;
`;
export const DashBoard = () => {
    return(
        <StyledDashBoard>
            <Aution></Aution>
            <Creater></Creater>
        </StyledDashBoard>
    );
}