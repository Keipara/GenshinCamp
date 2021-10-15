import React, { useState, useEffect } from "react";
import { updateSong } from "../../store/songs";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { useHistory } from "react-router";

function EditForm() {
    const [title, setTitle] = useState("");
    const {songId} = useParams()
    const dispatch = useDispatch();
    const history = useHistory();
    // const [errors, setErrors] = useState([]);

    const handleSubmit = async (e) => {
      e.preventDefault();
      // let newErrors = [];
      history.push(`/song/${songId}`)



      return dispatch(updateSong({title, songId}))
    };

    // for multiple file upload
    //   const updateFiles = (e) => {
    //     const files = e.target.files;
    //     setfiles(files);
    //   };

    return (
      <div>
        <h1>Submit Form</h1>
        <form
          style={{ display: "flex", flexFlow: "column" }}
          onSubmit={handleSubmit}
        >
          <label>
            <input
              type="text"
              placeholder="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
          <button type="submit">Save</button>
      </form>
      </div>
    );
  };

export default EditForm;
