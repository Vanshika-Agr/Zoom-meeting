import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
// import Sidebar from './components/Sidebar';
import Hero from './components/hero';
import Signup from './components/signup';
// import Dashboard from './components/dash compo/dashboard';
import Maindash from './components/Maindash';
import Login from './components/Login';
// import Settings from './components/dash compo/settings';
// import Chat from './components/dash compo/chat';
import Chatfull from './components/dash compo/chatfull';
function App(){
  return (
    <div>
     <BrowserRouter>
    <Routes>
      <Route path="/" element={<Hero/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/signup/login" element={<Login/>}/>
      <Route path="/dashboard" element={<Maindash/>}/>
      <Route path="/chat" element={<Chatfull/>}/>
      {/* <Route path="/setting" element={<Settings/>}/> */}
      {/* <Route path="/chat" element={<Chatfull/>}/> */}

    
    </Routes>
    </BrowserRouter>
    {/* <Chat></Chat> */}
{/* <Sidebar></Sidebar> */}
{/* <Otp></Otp> */}
    </div>
  );
}

export default App;
