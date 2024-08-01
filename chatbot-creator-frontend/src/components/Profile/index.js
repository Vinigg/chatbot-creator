import styled from "styled-components"

const ProfileContainer = styled.div`
    width: 90px;
    height: 30px;
    border-radius: 3px;
    background-color: #EBF0FA;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    p{
        margin: 0;
        font-weight: bold;
    }
    cursor: pointer;
`
const Circle = styled.div`
    width: 8px;
      height: 8px;
      -webkit-border-radius: 4px;
      -moz-border-radius: 4px;
      border-radius: 4px;
      background: red;
`
const Profile = () => {
  return (
    <ProfileContainer>
        <Circle/>
        <p>Geovane</p>
    </ProfileContainer>
  )
}

export default Profile