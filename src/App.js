import {ChatEngine} from 'react-chat-engine'
import './App.css';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';

function App() {

  if(!localStorage.getItem('username'))return <LoginForm/>
  return (
    <div className="App">
      <ChatEngine
      height="100vh"
      projectID="fcdba433-d20f-4e54-9b5a-14df7f84281e"
      userName="Sujay"
      userSecret="123456"
      renderChatFeed={(chatAppProps)=><ChatFeed {...chatAppProps} />}
      onNewMessage={()=>new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
      />
    </div>
  );
}

export default App;
