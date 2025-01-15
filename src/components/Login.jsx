import React, {useState, useContext} from 'react';
import UserContext from '../context/UserContext';


function Login() {
    const [userName , setUserName] = useState('');
    const [password, setPassword] = useState('');

    const {setUser} = useContext(UserContext);
    const handelSubmit = (e)=> {
        e.preventDefault();
        setUser({userName, password});
    }
  return (
    <>
        <h2>Login</h2>
        <input type="text"
        value={userName}
        onChange={(e)=>setUserName(e.target.value)}
        placeholder='User Name' />
        <input type="password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        placeholder='Password' />
        <button onClick={handelSubmit}>Submit</button>
    </>
  )
}

export default Login