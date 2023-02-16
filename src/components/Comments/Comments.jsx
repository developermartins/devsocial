import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';
import { useQuery } from '@tanstack/react-query'
import { getComments } from '../../api/comments';

import './comments.scss';
import moment from 'moment';

const Comments = ({ postId }) => {

  const { currentUser } = useContext(AuthContext);

  const { isLoading, error, data } = useQuery(['comments'], () => (
    getComments(postId)
  ));

  //Temporary
  const comments = [
     {
       id: 1,
       desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
       name: "John Doe",
       userId: 1,
       profilePicture:
         "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
     },
     {
       id: 2,
       desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
       name: "Jane Doe",
       userId: 2,
       profilePicture:
         "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
     },
   ];

  return (
    <section className="comments">
     <div className="write-comment">
          <img src={ currentUser.profilePicture } alt="Current user picture" />
          <input type="text" placeholder='Write a comment' />
          <button>Send</button>
     </div>
     { isLoading ? "Loading..." : data && data.map((comment) => (
          <div key={ comment.id } className='comment'>
               <img src={ comment.profilePicture } alt="Profile picture" />
               <div className="info">
                    <span>{ comment.name }</span>
                    <p>{ comment.desc }</p>
               </div>
               <span className='date'>{moment(comment.create_time).fromNow()}</span>
          </div>
     )) }
    </section>
  );
};

export default Comments;
