import styled from "styled-components"

const BotInformationsContainer = styled.div`
    display: flex;
    align-items: center;
    margin-left: 15px;
    border-bottom: solid #5064B9;
    p{
        margin: 10px;
        color: #5064B9;
        font-weight: bold;
    }    
`
const StepNumberCircle = styled.div`
    width: 20px;
    height: 20px;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    background: #5064B9;
    display: flex;
    color: white;
    justify-content: center;
    
`

const BotInformations = () => {
  return (
    <BotInformationsContainer>
        <StepNumberCircle>1</StepNumberCircle>
        <p>Base de Informações</p>
    </BotInformationsContainer>
  )
}

export default BotInformations