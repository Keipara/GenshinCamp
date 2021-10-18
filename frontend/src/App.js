// frontend/src/App.js
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import SongBrowser from "./components/MainPage/index";
import UploadPage from "./components/UploadPage";
import UserSongBrowser from "./components/UserPage";
import SingleSongBrowser from "./components/SongPage";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import HomePage from "./components/HomePage";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const sessionUser = useSelector(state => state.session.user);
  const history = useHistory();
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  // let sessionLink;
  // if (sessionUser) {
  //   sessionLink = (
  //     <>
  //       <UploadPage/>
  //     </>
  //   )
  // } else {
  //   sessionLink = (
  //     <>
  //       {history.push('/signup')}
  //     </>
  //   )
  // }

  // let sessionLinkHome;
  // if (sessionUser) {
  //   sessionLinkHome = (
  //     <>
  //       {history.push('/discover')}
  //     </>
  //   )
  // } else {
  //   sessionLinkHome = (
  //     <>
  //       <HomePage/>
  //     </>
  //   )
  // }

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path='/'>
            {/* {sessionLinkHome} */}
            <HomePage/>
          </Route>
          <Route exact path="/signup">
            <SignupFormPage />
          </Route>
          <Route exact path="/discover">
            <SongBrowser />
          </Route>
          <Route exact path='/upload'>
            {/* {sessionLink} */}
            <UploadPage/>
          </Route>
          <Route exact path='/artist/:userId'>
            <UserSongBrowser/>
          </Route>
          <Route exact path='/song/:songId'>
            <SingleSongBrowser/>
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
