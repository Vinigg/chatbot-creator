import styled from 'styled-components'
import ChatMessage from '../ChatMessage'
import { ChatContext } from '../StepTwo'
import { useContext, useEffect } from 'react'
const ChatBoxContainer = styled.div`
  width: 1050px;
  height: 250px;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  
`

 
const ChatInterationScreen = () => {

  const [messages, setMessages] = useContext(ChatContext)

  useEffect(()=>{
    setMessages([{id:'1',text:'olá!'},
      {id:'2',text:'oi, tudo bem?'},
      {id:'1',text:'olá!'},
      {id:'2',text:'oi, tudo bem?'},
      {id:'1',text:'olá!'},
      {id:'2',text:'oi, tudo bem?'},
      {id:'1',text:'Teste de mensagem mais longa!'},
      {id:'2',text:'oi, tudo bem?'}
    ])
  },[])
  return (
    <ChatBoxContainer>
      {messages.map((msg)=>(<ChatMessage user={msg.id} message={msg.text}/>))}
    </ChatBoxContainer>
  )
}

export default ChatInterationScreen