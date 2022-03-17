import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';
import {login} from '../../redux/actions/userActions';
import './login.css';


const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login({email, password}));
  };

  return (
    <div>
    <div className="form">
      <h1>Sign In</h1>
      <form onSubmit={handleLogin} className="sign-in">
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="example@gmail.com..."
        />
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder="enter password..."
        />
        <button>Submit</button>
      </form>
      <Link to="/SignUp">
        <p>
          you don't have an account ?
          <br />
          go to SignUp
        </p>
      </Link>
    </div>
    </div>
  );
};

export default SignIn;