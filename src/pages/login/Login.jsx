import React, { useContext } from 'react'
import "./Login.scss"
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/authContext'

const Login = () => {
    const { login } = useContext(AuthContext);
    const handleLogin = () => {
        login();
    };
    return (
        <div className="login">
            <div className="card">
                <div className="left">
                    <h1>Hello</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inci
                        didunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitati
                        on ullamco laboris nisi ut aliquip ex ea commodo consequat..</p>
                    <span>Don't have a account?</span>
                    <Link to="/register">
                        <button>Register</button>
                    </Link>
                </div>
                <div className="right">
                    <h1>Login</h1>
                    <form>
                        <input type="text" placeholder="Username" />
                        <input type="password" placeholder="password" />
                        <button onClick={handleLogin}>Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;