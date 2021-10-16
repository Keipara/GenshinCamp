import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getSongs } from '../../store/songs';

const SongBrowser = () => {
  const { songId } = useParams();
  const {userId} = useParams()

  // const songArray =
  // console.log(useSelector(state => Object.values(state.songs)))
  // const userId = songArray[3]

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
            <figure>
              <figcaption>
                <NavLink key={song.name} to={`/song/${song.id}`}>
                  <div
                    className={
                      Number.parseInt(songId) === song.id
                        ? "nav-entry is-selected"
                        : "nav-entry"
                    }>

                    <div>
                      <div className="primary-text">
                          {song.title}
                      </div>
                    </div>
                  </div>
                </NavLink>
                <NavLink key={song.User.username} to={`/artist/${song.userId}`}>
                <div
                  className={
                    Number.parseInt(userId) === song.userId
                      ? "nav-entry is-selected"
                      : "nav-entry"
                  }>

                  <div>
                    <div className="primary-text">
                        {song.User.username}
                    </div>
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
          </figure>
          );
        })}
      </nav>
    </main>
  );
};

export default SongBrowser;
