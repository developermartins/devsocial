import "./share.scss";
import Image from "../../assets/img.png";
import Map from "../../assets/map.png";
import Friend from "../../assets/friend.png";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addPost } from "../../api/posts";
import { uploadFile } from "../../api/upload";

const Share = () => {
  const { currentUser } = useContext(AuthContext);
  const [img, setImg] = useState('');
  const [postContent, setPostContent] = useState('');

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", img);
      const res = await uploadFile(formData);

      return res.data;
    } catch(err) {
      console.log(err);
    };
  };

  const queryClient = new useQueryClient()

  const mutation = useMutation((newPost) => {
     return addPost(newPost);
  }, {
     onSuccess: () => {
       // Invalidate and refetch
       queryClient.invalidateQueries({ queryKey: ['posts'] })
     },
   });

  const handleClick = async (e) => {
     e.preventDefault();

     let imgUrl = "";

     if (img) imgUrl = await upload();

     mutation.mutate({ postContent, img: imgUrl });

     setPostContent("");
     setImg(null);
  };

  return (
    <div className="share">
      <div className="container">
        <div className="top">
          <div className="left">
            <img src="" alt="" />
            <input
              type="text"
              placeholder={`What's on your mind ${currentUser.name}?`}
              onChange={ (e) => setPostContent(e.target.value) }
              value={ postContent }
            />
          </div>
          <div className="right">
            {img && (
              <img className="file" alt="post-file" src={URL.createObjectURL(img)} />
            )}
          </div>
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <input
              type="file"
              id="file"
              style={{ display: "none" }}
              onChange={ (e) => setImg(e.target.files[0]) }
            />
            <label htmlFor="file">
              <div className="item">
                <img src={ Image } alt="" />
                <span>Add Image</span>
              </div>
            </label>
            <div className="item">
              <img src={ Map } alt="" />
              <span>Add Place</span>
            </div>
            <div className="item">
              <img src={ Friend } alt="" />
              <span>Tag Friends</span>
            </div>
          </div>
          <div className="right">
            <button onClick={ handleClick }>Share</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;