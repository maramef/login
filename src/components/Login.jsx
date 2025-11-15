import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { login } from "../store/authSlice"
import { useNavigate } from "react-router-dom"

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const {error, status } = useSelector((state => state.auth))

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(login({email, password}))
    }
    
    return (
        <div>
            <h1>LOGIN</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder='email'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder='Password'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <button disabled={status === 'loading'}>
                    {status === 'loading' ? 'Logging in ...' : 'Login'}
                </button>
                <h3>Dont have an accoount?</h3>
                <h3 className="sign in" onClick={() => navigate('/signin')}>sign in</h3>
                {error && <p style={{ color: 'red' }}>Erreur : {error}</p>}
            </form>
        </div>
    )
}

export default Login