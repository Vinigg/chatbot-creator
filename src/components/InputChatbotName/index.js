import styled from "styled-components"

const Input = styled.input`
    padding-left: 15px;
    height: 38px;
    border: 2px solid #EBEEF1;
    outline: none;
    border-radius: 6px;
`
const InputChatbotNameContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 450px;
    
`

const InputChatbotName = () => {
  return (
    <InputChatbotNameContainer>
        <h3>Nome do chatbot</h3>
        <Input placeholder="Chatbot Name"/>
    </InputChatbotNameContainer>
    
  )
}

export default InputChatbotName