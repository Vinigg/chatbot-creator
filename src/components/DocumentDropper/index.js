import styled from "styled-components"
import iconeImg from '../../images/drop.png'

const DragAreaContainer = styled.div`
 margin: 0;
 padding: 0;
 box-sizing: border-box;
 display: flex;
 align-items: center;
 justify-content: center;
 min-height: 100px;
 max-width: 70%;
 flex-direction: column;
 background: #ffffff;
 border: 2px dashed #d5d9e1;
 cursor: pointer;
`
const Image = styled.img`
  width: 30px;
  height: 30px;
 
`
const Browse = styled.button`

`

function DocumentDropper () {
  return (
    <div>
        <h3>Documentos</h3>
        <DragAreaContainer>
            <Image src ={iconeImg} alt="icone"/>
            
            <span>or <Browse>browse</Browse></span>
            
        </DragAreaContainer>

    </div>
  )
}

export default DocumentDropper