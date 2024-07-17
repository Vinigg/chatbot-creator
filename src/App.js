import './App.css';
import styled from 'styled-components';
import Header from './components/Header';
import StepsStatus from './components/StepsStatus';
import StepOne from './components/SetepOne';



const AppContainer = styled.div`
  h3{
    font-weight: bolder;
    margin-bottom: 5px;
    margin-top: 20px;
    color: #4658A7;
  }
`


function App() {
  return (
    <AppContainer>
      <Header/>
      <StepsStatus/>
      <StepOne/>
    </AppContainer>
  );
}

export default App;
