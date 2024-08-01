import styled from 'styled-components'


const MessagesContainer = styled.div`
  display: flex; 
  &.sent{
    > div{
      background-color: #6E6E6E;
      color: #fff;
    }
    justify-content: right;
    
  }
`
const Content = styled.div`
  background-color: #e6e6e6;
  border-radius: 5px;
  box-shadow: 0 1px 1px #ccc;
  display: flex;
  flex-direction: column;
  margin: 20px;
  max-width: 80%;
`
const TextBubble = styled.div`
  p{
    padding: 0 5px 0 5px;
  }
`

const ChatMessage = (props) => {
    const text = props.message
    let userClass = (props.user === '1'? 'sent' : 'received');
    return(
      <MessagesContainer className = {userClass}>
        <Content>
          <TextBubble>
            <p>{text}</p>
          </TextBubble>
        </Content>
      </MessagesContainer>
    )
}

export default ChatMessage