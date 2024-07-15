import './App.css';
import DocumentDropper from './components/DocumentDropper/index';
import InputChatbotName from './components/InputChatbotName';
import Prompt from './components/Prompt';
import ReturnButton from './components/ReturnButton';
import SaveButton from './components/SaveButton';
import styled from 'styled-components';
import SelectChatbotVersion from './components/SelectChatbotVersion';
import Header from './components/Header';

const ButtonContainer = styled.div`
  display: flex;
  margin-top: 100px;
  width: 1000px;
  justify-content: center;
  align-items: center;

`
const AppContainer = styled.div`
  h3{
    font-weight: bolder;
    margin-bottom: 5px;
    margin-top: 20px;
    color: #4658A7;
    //font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  }
  form{
    margin: 100px;
  }
`
const InputContainers = styled.div`
  width: 1000px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  
`

function App() {
  return (
    <AppContainer>
      <Header/>
      <form>
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
         
      </form>
    </AppContainer>
  );
}

export default App;
