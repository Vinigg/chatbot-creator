import styled from "styled-components"

import Img from '../../images/cogwheel.png'

const ConfigContainer = styled.div`
    display: block;
    background-color: #E6E6E6;
    align-items: center;
    width: 30px;
    height: 30px;
    border-radius: 3px;
    cursor: pointer;
    img{
        width: 20px;
        height: 20px;
        padding: 5px;
    }
`
const Configs = () => {
  return (
    <ConfigContainer><img src={Img} alt="Config"/></ConfigContainer>
  )
}

export default Configs