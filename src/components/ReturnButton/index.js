import styled from "styled-components"

const Button = styled.button`
  margin: 0 150px 0 0;
  width: 145px;
  height: 35px;
  border-radius: 6px;
  border-color: #5064B9;
  color: #757575;
  background-color: #FFF;
  &:active{
    background-color: #EBEBEB;
  }
`

const ReturnButton = () => {
  return (
    <div>
      <Button>Voltar</Button>
    </div>
    
  )
}

export default ReturnButton