import styled from "styled-components"

const Textarea = styled.textarea`
    border: 2px solid #EBEEF1;
    border-radius: 6px;
    width: 1000px;
    height: 140px;
    display: flex;
    resize: none;
    outline: none;
    &::-webkit-scrollbar{
        width: 8px;
    }

    &::-webkit-scrollbar-thumb {
    background: #87AFEB;
    cursor: default;
    border-radius: 6px;
    }
    &::-webkit-scrollbar-track {
    background-color: #CDE1FA;
    border-radius: 6px;
}
    
`
const TextareaContainer = styled.div`
  margin-top: 20px;
`
const Prompt = () => {
  return (
    <TextareaContainer>
        <h3>Prompt</h3>
        <Textarea></Textarea>
    </TextareaContainer>
    
  )
}

export default Prompt