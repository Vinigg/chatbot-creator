import styled from "styled-components"

const SelectVersionContainer = styled.div`
    display: flex;
    flex-direction: column;
`
const SelectVersion = styled.select`
    width: 450px;
    height: 42px;
    padding-left: 5px;
    border-radius: 6px;
    border: 2px solid #EBEEF1;
    outline: none;

`
const versionOptions = ['chatbot v1','chatbot v2','chatbot v3','chatbot v4']
const SelectChatbotVersion = () => {
  return (
    <SelectVersionContainer>
        <h3>Versão do chatbot</h3>
        <SelectVersion>
            {versionOptions.map(opcao =>(<option value={opcao} key = {opcao}>{opcao}</option>))}
        </SelectVersion>
    </SelectVersionContainer>
    
  )
}

export default SelectChatbotVersion