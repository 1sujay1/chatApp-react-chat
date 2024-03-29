import { useState } from "react";
import axios from "axios";

const projectID = "fcdba433-d20f-4e54-9b5a-14df7f84281e"

const LoginForm =()=>{
    const [userName,setUserName] =useState('')
    const [password,setPassword] =useState('')
    const [error,setError] =useState('')

    const handleSubmit = async(e) => {
        e.preventDefault();
        const authObject={'Project-ID':projectID,'User-Name':userName,'User-Secret':password}

        try {
            await axios.get('https://api.chatengine.io/chats',{headers:authObject})
            localStorage.setItem('username',userName)
            localStorage.setItem('password',password)
            window.location.reload()
            setError('')
        } catch (error) {
            setError('Oops, incorrect credentials')
        }
     }

return (
    <div className="wrapper">
<div className="form">
    <h1 className="title">Chat Application</h1>
    <form onSubmit={handleSubmit}>
        <input type="text" value={userName} onChange={e=>setUserName(e.target.value)} className="input" placeholder="Username" required />
        <input type="password" value={password} onChange={e=>setPassword(e.target.value)} className="input" placeholder="Password" required />
        <div align="center">
<button className="button">
    <span>Start Chatting</span>
</button>
        </div>
    </form>
    <h1>{error}</h1>
</div>
    </div>
)
}

export default LoginForm