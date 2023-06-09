import './App.css';
import { Routes, Route, Link, Router } from 'react-router-dom';
import soketIO from "socket.io-client";
import Join from './Components/Join'
import Chat from './Components/Chat';




const ENDPOINT= "http://localhost:4500/";
const socket= soketIO(ENDPOINT,{transports:['websocket']})

function App() {


  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Join/>}></Route>
        <Route exact path='/Chat' element={<Chat/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
