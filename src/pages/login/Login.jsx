import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from "../../context/authContext";

import './Login.scss';

const Login = () => {

  const { login } = useContext(AuthContext);

  const handleLogin = () => {
    login();
  };

  return (
    <section className="login">
      <div className="card">
        <div className="left">
          <h1>Hello World.</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Voluptatem nam eius ut dicta aut pariatur voluptas reprehenderit 
            repellat perspiciatis odit?
          </p>
          <span>Don't have an account?</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder='Username' />
            <input type="password" placeholder='Password' />
            <button onClick={ handleLogin }>Login</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
