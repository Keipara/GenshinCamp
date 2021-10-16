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


const SingleSongBrowser = () => {
  const [body, setBody] = useState("");
  const { songId } = useParams();
  const songArray = useSelector(state => Object.values(state.songs[songId]))
  const userId = songArray[3]
  const comments = useSelector(state => Object.values(state.comments))
  console.log(songId)

  const songs = Object.values(useSelector(state => state.songs))
  const song = songs.find(song => song.id === parseInt(songId));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSongs(songId))
  }, [dispatch, songId])

  useEffect(() => {
    dispatch(getComments(songId))
  }, [dispatch, songId])

  const handleSubmit = (e) => {
    e.preventDefault();
    // let newErrors = [];
    return dispatch(addComment({body, songId}))
  };

  return (
    <main>
      <nav>
            <div>
            <figure>
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
          </figure>
            <>
                <EditFormModal/>
                <NavLink to={`/song/${song.id}`}>

                </NavLink>
            </>
              <button onClick={removeSong(songId)}>delete</button>
          </div>

          <div>

          <form
            style={{ display: "flex", flexFlow: "column" }}
            onSubmit={handleSubmit}
          >
            <label>
              <textarea
                type="text"
                placeholder="title"
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
                    <div>
                      <NavLink key={comment?.User?.username} to={`/artist/${comment?.User?.id}`}>
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
                      <li>
                        {comment?.body}
                      </li>
                    <>
                      <EditCommentModal commentId={comment.id}/>
                    </>
                    <button
                      onClick={removeComment(comment.id, songId)}>
                      delete
                    </button>
                    </div>
                  )
                })}
          </ul>
      </nav>
    </main>
  )
};

export default SingleSongBrowser;
