import styled from "styled-components"

const Button = styled.button`
  margin: 0 0 0 150px;
  width: 145px;
  height: 35px;
  border-radius: 6px;
  border: none;
  color: #FFF;
  background-color: #5064B9;
  &:active{
    background-color: #394889;
  }
`

const SaveButton = () => {
  return (
    <div>
      <Button>Salvar chatbot</Button>
    </div>
    
  )
}

export default SaveButton