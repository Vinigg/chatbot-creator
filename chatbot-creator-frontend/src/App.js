import './App.css';
import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import StepsStatus from './components/StepsStatus';
import { useState, useEffect } from 'react';

const AppContainer = styled.div`
  h3{
    font-weight: bolder;
    margin-bottom: 5px;
    margin-top: 20px;
    color: #4658A7;
  }
`

export const Context = React.createContext();

function App() {

  const [currentStep, setCurrentStep] = useState(true)
  
  useEffect(()=>{
    setCurrentStep(true)
  },[])

  return (
    <Context.Provider value={[currentStep, setCurrentStep]}>
      <AppContainer>
        <Header/>
        <StepsStatus/>
      </AppContainer>
    </Context.Provider>
  );
}

export default App;
