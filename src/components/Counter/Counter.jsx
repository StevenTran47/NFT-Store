import React from "react";
import styled from "styled-components"
const Wrapper = styled.section`
    padding: 4em;
    background: papayawhip;
    span {
        margin-left: 30px;
        margin-right: 30px;
        
    }
    .sp {
        color: ${props => (props.count > 5)  ? "red" : "#0f0307"};
    }
    `;
    
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #BF4F74;
`;
export class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }

    onDecrease = () => {
        this.setState({ count: this.state.count - 1 });
    }
    onIncrease = () => {
        this.setState({ count: this.state.count + 1 });
    }

    render() {
        return (
            <Wrapper className="" count={this.state.count}>
                <div>
                    <Title>Hello {this.props.name}</Title>
                    <button onClick={() => this.onDecrease()} style={{ width: 60, height: 40 }}>-</button>
                    <span className="sp">{this.state.count}</span>
                    <button onClick={() => this.onIncrease()} style={{ width: 60, height: 40 }}>+</button>
                </div>
            </Wrapper>

        )
    }
}