import styled from "styled-components"

const BotInformationsContainer = styled.div`
    padding: 0 10px 0 5px;
    display: flex;
    align-items: center;
    margin-left: 15px;
    border-bottom: solid ${(props) => props.active === true ? props.color : "#FFF"};
    p{
        margin: 10px;
        color: ${(props) => props.active === true ? props.color : "#A0A0A0"};
    }    
`
const StepNumberCircle = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 10px;
    background-color: ${(props) => props.active === true ? props.color : "#A0A0A0"};
    display: flex;
    color: white;
    justify-content: center;
    
`


function BotInformations (stepAcitved) {

  return (
    <BotInformationsContainer color={"#5064B9"} active = {stepAcitved.situation}>
        <StepNumberCircle color={"#5064B9"} active = {stepAcitved.situation}>1</StepNumberCircle>
        <p>Base de informações</p>
    </BotInformationsContainer>
  )
  }

export default BotInformations