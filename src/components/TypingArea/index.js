import styled from "styled-components"
import { ChatContext } from '../StepTwo'
import { useContext, useEffect, useState } from 'react'

const TypingContainer = styled.div`
  border-radius: 3px;
  margin: 5px 0 5px 0;
  width: 1048px;
  height: 70px;
  background-color: #f5f5f5;
  border: solid 2px #7D7D7F;
  align-items: center;
  display: flex;
`

const TypingForm = styled.form`
  display: flex;
  width: 1048px;
  justify-content: space-between;
`

const InputArea = styled.input`
  border: none;
  background-color: #f5f5f5;
  outline: none;
  width: 1000px;
`

const SendButton = styled.button`
  color: #FFF;
  width: 55px;
  height: 30px;
  margin: 5px;
  appearance: none;
  border: none;
  border-radius: 3px;
  background-color: #6E6E6E;
  cursor: pointer;
  &:hover{
    background-color: #4E4D4D;
  }
  
`

const TypingArea = () => {

  const [messages, setMessages] = useContext(ChatContext)

  const [message, setMessage] = useState()

  function handleSubmit(obj){
    
    const newMessage = [...messages, {id:'1',text: `${obj}`}]


    setMessages(newMessage)
  }

  return (
    <TypingContainer>
        <TypingForm onSubmit={(e)=>{
          e.preventDefault()
          handleSubmit(message)
          }}>
        <InputArea onChange={(e)=>{
          setMessage(e.target.value)}}/>
        <SendButton type="submit">Enviar</SendButton>
        </TypingForm>
    </TypingContainer>
  )
}

export default TypingArea