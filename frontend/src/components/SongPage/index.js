import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getSongs } from '../../store/songs';
import EditFormModal from '../EdtiFormModal';
import { removeSong } from '../../store/songs';
import { getComments } from '../../store/comments';
import EditCommentModal from '../EditCommentModal';
import { addComment } from '../../store/comments';
import { removeComment } from '../../store/comments';
import { useHistory } from 'react-router-dom';
import './SongPage.css';


const SingleSongBrowser = () => {
  const dispatch = useDispatch();
  const { songId } = useParams();
  const history = useHistory()
  const sessionUser = useSelector(state => state.session.user);

  // Selectors
  const songArrayTest = useSelector(state => (state.songs))
  const comments = useSelector(state => Object.values(state.comments))
  const songs = Object.values(useSelector(state => state.songs))
  const song = songs.find(song => song.id === parseInt(songId));
  const loggedUserId = useSelector((state) => state.session.user?.id);

  // State
  const [body, setBody] = useState("");

  useEffect(() => {
    dispatch(getSongs(songId))
  }, [dispatch, songId])

  useEffect(() => {
    dispatch(getComments(songId))
  }, [dispatch, songId])

  // Misc
  if(Object.keys(songArrayTest).length === 0) {
    return <></>
  }
  const songArray = songArrayTest[songId]
  const userId = songArray.userId;


  const handleSubmit = async(e) => {
    e.preventDefault();
    // let newErrors = [];
    await dispatch(addComment({body, songId}))
    window.location.reload()
  };

  const handleClickComment = async (e, comment) => {
    e.preventDefault();
    // let newErrors = [];
    await dispatch(removeComment(comment.id, songId))
    window.location.reload()
  };

  const handleClickSong = async (e) => {
    e.preventDefault();
    // let newErrors = [];
    await dispatch(removeSong(songId))
    history.push(`/artist/${userId}`)
  };

  let sessionSongButtons;
  if (sessionUser === undefined) {
    sessionSongButtons = (
      <div>
              <>
                  <NavLink to={`/song/${song.id}`}>

                  </NavLink>
              </>
            </div>
    )
  } else if (song.User.id === sessionUser.id) {
    sessionSongButtons = (
      <div>
              <>
                  <EditFormModal/>
                  <NavLink to={`/song/${song.id}`}>

                  </NavLink>
              </>
                <button onClick={handleClickSong}>delete</button>
            </div>
    )
  } else {
    sessionSongButtons = (
      <div>
              <>
                  <NavLink to={`/song/${song.id}`}>

                  </NavLink>
              </>
            </div>
    )
  }

let sessionCommentButtons = (comment) => {
  if (sessionUser === undefined) {
    sessionSongButtons = (
      <></>
    )}else if (comment.User.id === sessionUser.id) {
    let renderCommentButtons = (
      <div>
       <>
         <EditCommentModal commentId={comment.id}/>
       </>
       <button onClick={(e) => { handleClickComment(e, comment)}}>
           delete
       </button>
      </div>
    )
    return renderCommentButtons
  }
}

  return (
    <main>
      <nav>
        <div className='nav-container'>
            <figure>
            <div className='song-pack'>
              <figcaption>
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
            </figcaption>
            <audio
              controls
              src={song.songFile}>
              Your browser does not support the
              <code>audio</code> element.
            </audio>
          </div>
          </figure>
          {sessionSongButtons}

          <div>

          <form
            style={{ display: "flex", flexFlow: "column" }}
            onSubmit={handleSubmit}
          >
            <label>
              <textarea
                className='comment-input'
                type="text"
                value={body}
                onChange={(e) => setBody(e.target.value)}
              />
            </label>
            {/* <label>
              <input
                type="userId"
                placeholder="userId"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
              />
            </label> */}
            <button type="submit">Comment</button>
          </form>
          {/* <div>
            {user && (
              <div>
                <h1>{user.title}</h1>
                <img
                  style={{ width: "150px" }}
                  src={user.profilefileUrl}
                  alt="profile"
                />
              </div>
            )}
          </div> */}
        </div>

          <ul>
                {comments.map((comment) => {
                  return (
                    <div key={comment.id} className='full-comment'>
                      <NavLink to={`/artist/${comment?.User?.id}`}>
                      {/* <div
                        className={
                          Number.parseInt(userId) === song.userId
                            ? "nav-entry is-selected"
                            : "nav-entry"
                        }> */}

                        <div>
                          <div className="primary-text">
                              {comment?.User?.username}
                          </div>
                        </div>
                    </NavLink>
                      <li className='ind-comment'>
                        {comment?.body}
                      </li>
                      {sessionCommentButtons(comment)}
                    </div>
                  )
                })}
          </ul>
          </div>
      </nav>
    </main>
  )
};

export default SingleSongBrowser;
