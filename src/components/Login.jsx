import React, { useState } from 'react'
import './Styles/login.css';
import { auth } from '../firebase';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
            e.preventDefault();

        
    }

    const register = (e) => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            // navigate.push('/')
            console.log(auth);
        })
        .catch(error => alert(error.message))
    }


  return (
    <div className='login flex flex-col h-screen items-center bg-white '>
    <Link to='/'>
        <img
            className="login__logo mt-[20px] mb-[20px] object-contain w-[100px] 
            mx-auto "
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' 
        />
    </Link>

    <div 
    className='login__container w-[300px] h-fit flex flex-col border rounded-sm border-slate-300
    p-[20px]'>
        <h1>Sign-in</h1>
        <form>
            <h5>E-mail</h5>
            <input type='text' value={email} 
            onChange={e => setEmail(e.target.value)} 
            className='p-2'
            />

            <h5>Password</h5>
            <input type='password' value={password} 
            onChange={e => setPassword(e.target.value)} 
            className='p-2'
            />

            <button 
            onClick={signIn}
            type='submit' 
            className='login__signInButton border-r-[2px] w-[100px] h-[30px] border mt-[10px] rounded-sm'>Sign In</button>
        </form>
        <p>
            By signing-in you agree to the AMAZON CLONE Conditions of Use & Sale. Please
            see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
        </p>

        <button 
        onClick={register}
        type='submit'
        className='login__registerButton w-[100%] h-[30px] border mt-[10px]'>Create your Amazon account</button>
    </div>
</div>
  )
}

export default Login