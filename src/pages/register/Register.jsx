import React from 'react'
import "./Register.scss"
import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <div className="register">
            <div className="card">
                <div className="left">
                    <h1>Jai Social</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inci
                        didunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitati
                        on ullamco laboris nisi ut aliquip ex ea commodo consequat..</p>
                    <span>Do have a account?</span>
                    <Link to="/login">
                        <button>Login</button>
                    </Link>
                </div>
                <div className="right">
                    <h1>Register</h1>
                    <form>
                        <input type="text" placeholder="Username" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <input type="password" placeholder="password" />
                        <button>Register</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register;