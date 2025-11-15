import React, {useState} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { register } from '../store/authSlice';

function SignIn() {
    const navigate = useNavigate();

    const[name, setName]=useState("")
    const[email, setEmail]=useState("")
    const[age, setAge]=useState("")
    const[password,setPassword]=useState("")
    const[isAdmin, setIsAdmin]=useState(false)

    const dispatch = useDispatch();
    const {status, error}= useSelector((state)=>state.auth)

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !email || !password || !age) {
            alert('Please fill all fields');
            return;
        }
        dispatch(register({name, age:Number(age), email, password, isAdmin}))
    }
  return (
    <div>
        <h2>Sign-In</h2>
        <form onSubmit={handleSubmit}>
            <input
            placeholder='Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
            <input
            placeholder='Email'
            value={email}
            type='email'
            onChange={(e) =>setEmail(e.target.value)}
            />
            <input
            placeholder='Age'
            value={age}
            type='number'
            onChange={(e) => setAge(e.target.value)}
            />
            <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            <label>
            <input
            type='checkbox'
            checked={isAdmin}
            onChange={(e) => setIsAdmin(e.target.checked)}
            />
            Is Admin
            </label>
            <button type="submit" disabled={status === 'loading'}>
                {status ==='loading' ? 'Registering...' : 'Sign in'}
            </button>
        </form>
        Already have an accunt? 
        <h3 className='sign-in' onClick={() => navigate('/login')}>login</h3>
        {error && <p style={{ color: 'red' }}>{error}</p>}       
    </div>
  )
}
export default SignIn