import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import './LoginForm.css';
import { useHistory } from "react-router-dom";

function LoginForm() {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const history = useHistory();

  const handleSubmit = async(e) => {
    e.preventDefault();

    setErrors([]);
    let userData = await dispatch(sessionActions.login({ credential, password }))
      .catch(
        async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
        }
      );

      // Route here
      if (userData) history.push('/discover')
  };

  return (
    <form onSubmit={handleSubmit}>
      <ul>
        {errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul>
          <div className='form'>
            <h2> Welcome Back! </h2>
            <label>
              Username or Email
              <input
                type="text"
                value={credential}
                onChange={(e) => setCredential(e.target.value)}

              />
            </label>
            <label>
              Password
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}

              />
            </label>
            <button type="submit">Log In</button>
          </div>
    </form>
  );
}

export default LoginForm;
