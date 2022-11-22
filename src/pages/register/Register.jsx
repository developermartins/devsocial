import React from 'react';
import { Link } from 'react-router-dom';
import './Register.scss';

const Register = () => {
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
            <input type="text" placeholder='Username' />
            <input type="email" placeholder='Email' />
            <input type="password" placeholder='Password' />
            <input type="text" placeholder='Name' />
            <button>Register</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
