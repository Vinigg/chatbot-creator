import styled from "styled-components"
import BotInformations from "../BotInformations"
import BotChatDemo from "../BotChatDemo"

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

const StepsStatus = () => {

  return (
    <StepsStatusContainer>
      <BotInformations/>
      <BotChatDemo/>
      <hr/>
    </StepsStatusContainer>
  )
}

export default StepsStatus