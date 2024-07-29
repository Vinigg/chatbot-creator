import styled from "styled-components"
import BotInformations from "../BotInformations"
import BotChatDemo from "../BotChatDemo"
import StepOne from "../StepOne"
import { useContext} from "react"
import { Context } from "../../App"
import StepTwo from "../StepTwo"

const StepsStatusContainer = styled.div`
  margin-left: 50px;
  display: flex;
  flex-wrap: wrap;
  hr{
      width: 95%;
      margin: 0px 20px 0 0;
      border-style: solid;
      background-color: #E9ECEF;
      border-color: #E9ECEF;
    }
`

function StepsStatus ()  {

  const [currentStep, setCurrentStep] = useContext(Context)

  //Verify the context for the step 1
  if (currentStep === true) {
    return (
      <StepsStatusContainer>
        <BotInformations situation = {true}/>
        <BotChatDemo situation = {false}/>
        <hr/>
        <StepOne/>
      </StepsStatusContainer>
    )
  }
  if (currentStep === false){
    return (
      <StepsStatusContainer>
          <BotInformations situation = {false}/>
          <BotChatDemo situation = {true}/>
          <hr/>
          <StepTwo/>
        </StepsStatusContainer>
    )
  }
  
}

export default StepsStatus