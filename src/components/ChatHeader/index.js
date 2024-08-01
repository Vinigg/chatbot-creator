import React from 'react'
import styled from 'styled-components'
import Incon from '../../images/chat-bot.png'
const ChatHeaderContainer = styled.div`
    width: 1050px;
    height: 30px;
    border-radius: 3px;
    background-color: #000;
    display: flex;
    align-items: center;
    p{
        padding-left: 10px;
        color: #FFF;
    }
`
const BotIcon = styled.img`
    padding-left: 5px;
    width: 25px;
    height: 25px;
`
const ChatHeader = (props) => {
  return (
    <ChatHeaderContainer>
        <BotIcon src={Incon}/>
        <p>{props.chatName}</p>
        
    </ChatHeaderContainer>
  )
}

export default ChatHeader