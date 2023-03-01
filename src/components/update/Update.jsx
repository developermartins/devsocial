import { useMutation, useQueryClient } from '@tanstack/react-query';
import React, { useState } from 'react';
import { uploadFile } from '../../api/upload';
import { updateUser } from '../../api/user';

import './Update.scss';

const Update = ({ setOpenUpdate, user }) => {
  
  const [coverPic, setCoverPic] = useState(null);
  const [profilePic, setProfilePic] = useState(null);
  const [texts, setTexts] = useState({
     name: "",
     city: "",
     website: "",
  });

  const upload = async (file) => {
     try {
       const formData = new FormData();
       formData.append("file", file);
       const res = await uploadFile(formData);
 
       return res.data;
     } catch(err) {
       console.log(err);
     };
   };

  const handleChange = (e) => {
     e.preventDefault();
     setTexts((prev) => ({ ...prev, [e.target.name]: [e.target.value] }));
  };

  const queryClient = new useQueryClient()

  const mutation = useMutation((user) => {
     return updateUser(user);
  }, {
     onSuccess: () => {
       // Invalidate and refetch
       queryClient.invalidateQueries({ queryKey: ['user'] })
     },
   });

  const handleClick = async (e) => {
     e.preventDefault();

     let coverUrl = user.cover_pic;
     let profileUrl = user.profile_pic;

     coverUrl = coverPic && upload(coverPic);
     profileUrl = profilePic && upload(profilePic)

     mutation.mutate({ ...texts, coverPic: coverUrl, profilePic: profileUrl });

     setOpenUpdate(false);
  };

  return (
    <section className='update'>
          Update
          <form>
               <input type="file" />
               <input type="file" />
               <input type="text" name='name' onChange={ handleChange } />
               <input type="text" name='city' onChange={ handleChange } />
               <input type="text" name='website' onChange={ handleChange } />
               <button onClick={ handleClick }>Update Account</button>
          </form>
     <button
          onClick={() => setOpenUpdate(false)}
     >
          X
     </button>
    </section>
  );
};

export default Update;
