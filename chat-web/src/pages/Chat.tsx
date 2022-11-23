import styled from "styled-components"
import UserList from "../components/UserList"
import ChatContent from "../components/ChatContent"

const Chat = () => {
    return(
        <Container>
            <ChatContainer>
                <UserList/>
                <ChatContent/>
            </ChatContainer>
        </Container>
    )
}

const ChatContainer = styled.div`
    width:70%;
    height:75%;
    display:flex;
    justify-content:space-between;
    align-items:center;
`

const Container = styled.div`
    height:100vh;
    width:100vw;
    display:flex;
    justify-content:center;
    align-items:center;
`

export default Chat