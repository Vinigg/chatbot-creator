import styled from "styled-components"
import SelectChatbotVersion from '../SelectChatbotVersion'
import DocumentDropper from '../DocumentDropper'
import InputChatbotName from '../InputChatbotName'
import Prompt from '../Prompt'
import ReturnButton from '../ReturnButton'
import SaveButton from '../SaveButton'

const FormContainer = styled.form`
    margin: 0 0 0 80px;
`
const InputContainers = styled.div`
  width: 1000px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  
`
const ButtonContainer = styled.div`
  display: flex;
  margin-top: 100px;
  width: 1000px;
  justify-content: center;
  align-items: center;

`

const StepOne = () => {
  return (
    <FormContainer>
        <InputContainers>
        <InputChatbotName/>
        <SelectChatbotVersion/>
        </InputContainers>
        <Prompt/>
        <DocumentDropper/>
        <ButtonContainer>
        <ReturnButton/>
        <SaveButton/>
        </ButtonContainer>
    </FormContainer>
  )
}

export default StepOne