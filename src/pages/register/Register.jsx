import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.scss';

const Register = () => {

  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
    name: "",
  });

  const [errors, setErrors] = useState(false);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = (e) => {
    e.preventDefault();


  }

  return (
    <section className="register">
      <div className="card">
        <div className="left">
          <h1>DevSocial.</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Voluptatem nam eius ut dicta aut pariatur voluptas reprehenderit 
            repellat perspiciatis odit?
          </p>
          <span>Do you have an account?</span>
          <Link to="/login">
              <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder='Username' name='username' onChange={ handleChange } />
            <input type="email" placeholder='Email' name='email' onChange={ handleChange } />
            <input type="password" placeholder='Password' name='password' onChange={ handleChange } />
            <input type="text" placeholder='Name' name='name' onChange={ handleChange } />
            <button onClick={ handleClick }>Register</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
