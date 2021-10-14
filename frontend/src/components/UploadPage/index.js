import React, { useState, useEffect } from "react";
import { addSong } from "../../store/songs";
import { useDispatch, useSelector } from "react-redux";

const UploadPage = () => {
  const [title, setTitle] = useState("");
  const [songFile, setSongFile] = useState("");
  const userId = useSelector((state) => state.session.user?.userId);
  const dispatch = useDispatch();
  // const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // let newErrors = [];
    return dispatch(addSong({title, songFile}, userId))
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
        {/* <label>
          <input
            type="userId"
            placeholder="userId"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
        </label> */}
        <label>
          <input type="file" onChange={setSongFile} />
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
