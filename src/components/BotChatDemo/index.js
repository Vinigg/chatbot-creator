import styled from "styled-components"

const BotChatDemoContainer = styled.div`
    padding: 0 10px 0 5px;
    display: flex;
    align-items: center;
    margin-left: 15px;
    border-bottom: solid ${props => props.active === true ? props.color : "#FFF"};
    p{
        margin: 10px;
        color: ${props => props.active === true ? props.color : "#A0A0A0"};
    }    
`
const StepNumberCircle = styled.div`
    width: 20px;
    height: 20px;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    background: ${props => props.active ? props.color : "#A0A0A0"};
    display: flex;
    color: white;
    justify-content: center;
    
`
const BotChatDemo = (stepAcitved) => {
  return (
    <BotChatDemoContainer color={"#5064B9"} active = {stepAcitved.situation}>
        <StepNumberCircle color={"#5064B9"} active = {stepAcitved.situation}>2</StepNumberCircle>
        <p>Chat</p>
    </BotChatDemoContainer>
  )
}

export default BotChatDemo