import styled from "styled-components"
import { Context } from "../../App"
import { useContext } from "react"

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
  const [currentStep, setCurrentStep] = useContext(Context)
  return (
    <div>
      <Button onClick={()=> {setCurrentStep(!currentStep)}}>Salvar chatbot</Button>
    </div>
    
  )
}

export default SaveButton