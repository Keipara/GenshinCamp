import React, { useState, useEffect } from "react";
import { addSong } from "../../store/songs";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const UploadPage = () => {
  const [title, setTitle] = useState("");
  const [songFile, setSongFile] = useState("");
  const userId = useSelector((state) => state.session.user?.id);
  const history = useHistory();
  const dispatch = useDispatch();
  // const [errors, setErrors] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // let newErrors = [];
    await dispatch(addSong({title, songFile}, userId))
    history.push(`/artist/${userId}`)
  };

  // for multiple file upload
  //   const updateFiles = (e) => {
  //     const files = e.target.files;
  //     setfiles(files);
  //   };

  const updateFile = (e) => {
    const file = e.target.files[0];
    if (file) setSongFile(file);
  };

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
          required/>
        </label>
        {/* <label>
          <input
            type="userId"
            placeholder="userId"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
        </label> */}
        <label>
          <input type="file" onChange={updateFile} required/>
        </label>
        <button type="submit">Upload</button>
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
  );
};

export default UploadPage;
