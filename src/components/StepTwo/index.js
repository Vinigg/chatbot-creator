import React from 'react'
import ReturnButton from '../ReturnButton'
import styled from 'styled-components'
import ChatHeader from '../ChatHeader'

const StepTwoContainer = styled.div`
p{
    font-weight: bold;
}
`

const StepTwo = () => {
  return (
    <StepTwoContainer>
        <p>Teste o chatbot fazendo perguntas baseadas nas informações e arquivos inseridos.</p>
        <ChatHeader/>
        <ReturnButton/>
    </StepTwoContainer>
  )
}

export default StepTwo