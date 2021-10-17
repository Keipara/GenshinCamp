import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import logo from './toppng.com-soundcloud-png-white-banner-free-library-soundcloud-logo-2201x1255.png'
import './Navigation.css';
import { useDispatch } from 'react-redux';
import * as sessionActions from "../../store/session";
import { useHistory } from "react-router-dom";

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);
  const [credential, setCredential] = useState("demo@user.io");
  const [password, setPassword] = useState("password");
  const [errors, setErrors] = useState([]);
  const history = useHistory();
  const dispatch = useDispatch();

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

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <NavLink to="/upload"> Upload </NavLink>
        <ProfileButton className='profile-button' user={sessionUser} />
      </>
    );

  } else {
    sessionLinks = (
      <>
        <form onSubmit={handleSubmit}>
          <button type="submit">Demo User</button>
        </form>
        <LoginFormModal />
        <NavLink to="/signup">Sign Up</NavLink>
      </>
    );

  }

  return (
    <div className='nav'>
        <div className='left-nav'>
          <img src={logo} alt='logo'></img>
          <NavLink exact to="/discover">Home</NavLink>
        </div>
        <input></input>
        <div className='right-nav'>
          {isLoaded && sessionLinks}
        </div>
    </div>
  );
}

export default Navigation;
