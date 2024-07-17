import styled from "styled-components"


const BotInformationsContainer = styled.div`
    padding: 0 10px 0 5px;
    display: flex;
    align-items: center;
    margin-left: 15px;
    border-bottom: solid ${props => props.active ? props.color : "#FFF"};
    p{
        margin: 10px;
        color: ${(props)=> props.color};
    }    
`
const StepNumberCircle = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 10px;
    background-color: ${(props)=>props.color};
    display: flex;
    color: white;
    justify-content: center;
    
`

const BotInformations = () => {
  return (
    <BotInformationsContainer color={"#5064B9"} active = {true}>
        <StepNumberCircle color={"#5064B9"}>1</StepNumberCircle>
        <p>Base de informações</p>
    </BotInformationsContainer>
  )
}

export default BotInformations