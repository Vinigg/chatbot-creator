import styled from "styled-components"
import Configs from "../Configs"
import Profile from "../Profile"

const HeaderContainer = styled.div`
    margin-left: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const TextContainer = styled.div`
    h1{
        margin-bottom: 0;
    }
    h4{
        margin-top: 2px;
        font-weight: normal;
    }
`
const ConfigProfileContainer = styled.div`
    width: 125px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 25px;
`

const Header = () => {
  return (
    <HeaderContainer>
        <TextContainer>
            <h1>Bem vindo as configurações de chatbot WhatsApp</h1>
            <h4>Aqui você pode criar seu chatbot</h4>
        </TextContainer>
        <ConfigProfileContainer>
            <Configs/>
            <Profile/>
        </ConfigProfileContainer>
        
    </HeaderContainer>
  )
}

export default Header