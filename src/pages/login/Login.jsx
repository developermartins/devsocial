import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from "../../context/authContext";

import './Login.scss';

const Login = () => {

  const { login } = useContext(AuthContext);

  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const [error, setErrors] = useState(null);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLogin = async (e) => {

    e.preventDefault();

    try {
      await login(inputs);

      navigate("/");
    } catch (err) {
      setErrors(err.response.data);
    };

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
            <input type="text" placeholder='Username' name='username' onChange={ handleChange } />
            <input type="password" placeholder='Password' name='password' onChange={ handleChange } />

            { error && <p>{ error }</p> }

            <button onClick={ handleLogin }>Login</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
