import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getSongs } from '../../store/songs';
import './MainPage.css';

const SongBrowser = () => {
  const { songId } = useParams();
  const {userId} = useParams()

  const songs = Object.values(useSelector(state => state.songs))
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSongs())
  }, [dispatch])

  return (
    <main>
      <nav>
        {songs.map((song) => {
          return (
            <figure >

              <div className='figure-div'>

                <figcaption>

                  <NavLink key={song.name} to={`/song/${song.id}`}>

                    <div className={
                        Number.parseInt(songId) === song.id
                          ? "nav-entry is-selected"
                          : "nav-entry"}>

                        <div className="primary-text">
                            {song.title}
                        </div>
                    </div>

                </NavLink>

                <NavLink key={song.User.username} to={`/artist/${song.userId}`}>
                  <div className={
                    Number.parseInt(userId) === song.userId
                      ? "nav-entry is-selected"
                      : "nav-entry"}>
                      <div className="secondary-text">
                        {song.User.username}
                      </div>
                  </div>
                </NavLink>

              </figcaption>
              <audio
                controls
                src={song.songFile}>
                Your browser does not support the
                <code>audio</code> element.
              </audio>
            </div>

          </figure>
          );
        })}
      </nav>
    </main>
  );
};

export default SongBrowser;
