import React, { useState } from 'react'
import './Join.css'
import logo from '../Images/logo.png'
import { Link } from 'react-router-dom';

let user
const sendUser = () => {
    user = document.getElementById('joinInput').value;
    document.getElementById('joinInput').value = ""
}
const Join = () => {
    
    const [name ,setname]=useState("");

    return (
        <div className='JoinPage'>
            <div className="JoinContainer">
                <h2>Send this web site link to whoever you want to chat with</h2>
                <img src={logo} alt="logo" />
                <h1>I Chat</h1>
                <input onChange={(e)=>setname(e.target.value)} type="text" placeholder='Enter Your Name' id='joinInput' autoComplete='off'  />
                <Link to='/Chat' onClick={(event)=>(!name ? event.preventDefault():null)}><button className='joinbtn' onClick={sendUser}>Login</button></Link>
            </div>
        </div>
    )
}

export default Join
export { user }