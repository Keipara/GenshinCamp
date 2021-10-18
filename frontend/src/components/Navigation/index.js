import React, {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import logo from '../images/maple.png'
import './Navigation.css';
import { useDispatch } from 'react-redux';
import * as sessionActions from "../../store/session";
import { useHistory } from "react-router-dom";
import SearchDropdown from '../SearchDropdown';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);
  const [credential, setCredential] = useState("demo@user.io");
  const [password, setPassword] = useState("password");
  const [errors, setErrors] = useState([]);
  const [search, setSearch] = useState('');
  const [renderDropdown, setRenderDropdown] = useState(false);

  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    if (search.length) {
      setRenderDropdown(true)
    } else {
      setRenderDropdown(false)
    }
  }, [search])

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

  const handleInputClick = () => {
    if (search.length) {
      setRenderDropdown(true)
    }
  }

  const handleSearchDivClick = (e) => {
    e.stopPropagation()
  }

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
          <img className='logo' src={logo} alt='logo'></img>
          <NavLink exact to="/discover">Discover</NavLink>
        </div>
          <div className='search-div'
          onClick={handleSearchDivClick}
          >

            <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onClick={handleInputClick}
            />
            {renderDropdown && <SearchDropdown search={search} setRenderDropdown={setRenderDropdown}/>}

          </div>
        <div className='right-nav'>
          {isLoaded && sessionLinks}
        </div>
    </div>
  );
}

export default Navigation;
