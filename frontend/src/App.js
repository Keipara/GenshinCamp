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

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path={["/discover"]}>
            <SongBrowser />
          </Route>
          <Route path='/upload'>
            <UploadPage/>
          </Route>
          <Route path='/artist/:userId'>
            <UserSongBrowser/>
          </Route>
          <Route path='/song/:songId'>
            <SingleSongBrowser/>
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
