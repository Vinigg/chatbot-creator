import styled from "styled-components"
import { Context } from "../../App"
import { useContext } from "react"

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
  const [currentStep, setCurrentStep] = useContext(Context)
  return (
    <div>
      <Button onClick={()=> {setCurrentStep(!currentStep)}}>Voltar</Button>
    </div>
    
  )
}

export default ReturnButton