import React, { useState, useEffect } from "react";
import commentReducer, { updateComment } from "../../store/comments";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { useHistory } from "react-router";

function EditComment({commentId}) {
    const comments = Object.values(useSelector(state => state.comments))
    const comment = comments.find(comment => comment.id === parseInt(commentId));
    const [body, setBody] = useState(comment.body)
    const {songId} = useParams()

    const dispatch = useDispatch();
    const history = useHistory();
    // const [errors, setErrors] = useState([]);

    const handleSubmit = async (e) => {
      e.preventDefault();
      // let newErrors = [];
      history.push(`/song/${songId}`)



      return dispatch(updateComment({body, songId, commentId}))
    };

    // for multiple file upload
    //   const updateFiles = (e) => {
    //     const files = e.target.files;
    //     setfiles(files);
    //   };

    return (
      <div>
        <h1>Edit Comment</h1>
        <form
          style={{ display: "flex", flexFlow: "column" }}
          onSubmit={handleSubmit}
        >
          <label>
            <input
              type="text"
              placeholder="body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
          </label>
          <button type="submit">Save</button>
      </form>
      </div>
    );
  };

export default EditComment;
