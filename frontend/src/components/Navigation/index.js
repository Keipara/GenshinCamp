import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
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
        <NavLink exact to="/discover">Home</NavLink>
        <div className='right-nav'>
        {isLoaded && sessionLinks}
        </div>
    </div>
  );
}

export default Navigation;
