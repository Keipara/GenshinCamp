import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import logo from './toppng.com-soundcloud-png-white-banner-free-library-soundcloud-logo-2201x1255.png'
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <NavLink exact to="/discover">Home</NavLink>
        <NavLink to="/upload"> Upload </NavLink>
        <ProfileButton user={sessionUser} />
      </>
    );

  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <NavLink to="/signup">Sign Up</NavLink>
      </>
    );

  }

  return (
    <div className='nav'>
        <img src={logo} alt='logo'></img>
        <div className='right-nav'>
        {isLoaded && sessionLinks}
        </div>
    </div>
  );
}

export default Navigation;
