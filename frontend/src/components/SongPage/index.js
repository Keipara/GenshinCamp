import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getSongs } from '../../store/songs';
import EditFormModal from '../EdtiFormModal';


const SingleSongBrowser = () => {
  const { songId } = useParams();
  const {userId} = useParams()

  const songs = Object.values(useSelector(state => state.songs))
  const song = songs.find(song => song.id === parseInt(songId));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSongs())
  }, [dispatch])

  return (
    <main>
      <nav>
            <>
              <NavLink key={song.title} to={`/song/${song.id}`}>
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
            <>
                <EditFormModal/>
                <NavLink to={`/song/${song.id}`}>

                </NavLink>
            </>
          </>
      </nav>
    </main>
  )
};

export default SingleSongBrowser;
