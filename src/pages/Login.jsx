import React, { Component } from 'react';

class Login extends Component {
    render() {
        return (
            <div className='auth'>
                <h1>Login</h1>
                <form action ="">
                    <input type="text" placeholder='username' ></input>
                    <input type="password" placeholder='password' ></input>
                    <button>Login</button>
                </form>
            </div>
        );
    }
}

export default Login;