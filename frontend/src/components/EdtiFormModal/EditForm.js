import React, { useState, useEffect } from "react";
import { updateSong } from "../../store/songs";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { useHistory } from "react-router";
import './EditTitleModal.css';

function EditForm() {
    const {songId} = useParams()
    const songs = Object.values(useSelector(state => state.songs))
    const song = songs.find(song => song.id === parseInt(songId));
    const [title, setTitle] = useState(song.title);
    const dispatch = useDispatch();
    const history = useHistory();
    // const [errors, setErrors] = useState([]);

    const handleSubmit = async (e) => {
      e.preventDefault();
      // let newErrors = [];
      await dispatch(updateSong({title, songId}))
      window.location.reload()

    };

    // for multiple file upload
    //   const updateFiles = (e) => {
    //     const files = e.target.files;
    //     setfiles(files);
    //   };

    return (
      <div className='modal'>

        <h1>Submit Form</h1>
        <form
          style={{ display: "flex", flexFlow: "column" }}
          onSubmit={handleSubmit}>
          <div className='form-div'>
          <label>
            <input
              type="text"
              placeholder={"New Title"}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            required/>
          </label>
          <button type="submit">Save</button>
          </div>
      </form>

      </div>
    );
  };

export default EditForm;
