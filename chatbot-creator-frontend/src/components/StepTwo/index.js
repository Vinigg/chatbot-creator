import React, { useState } from 'react'
import ReturnButton from '../ReturnButton'
import styled from 'styled-components'
import ChatHeader from '../ChatHeader'
import ChatInterationScreen from '../ChatInterationScreen'
import TypingArea from '../TypingArea'

const StepTwoContainer = styled.div`
p{
    font-weight: bold;
}
`
export const ChatContext = React.createContext()

const StepTwo = () => {

  const [messages, setMessages] = useState([])

  return (
    <ChatContext.Provider value={[messages, setMessages]}>
      <StepTwoContainer>
        <p>Teste o chatbot fazendo perguntas baseadas nas informações e arquivos inseridos.</p>
        <ChatHeader chatName="Severino"/>
        <ChatInterationScreen/>
        <TypingArea/>
        <ReturnButton/>
      </StepTwoContainer>
    </ChatContext.Provider>
  )
}

export default StepTwo