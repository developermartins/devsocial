import { useContext, useState } from 'react';
import { AuthContext } from '../../context/authContext';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { addComment, getComments } from '../../api/comments';

import './comments.scss';
import moment from 'moment';

const Comments = ({ postId }) => {

  const [comment_content, set_comment_content] = useState('');

  const { currentUser } = useContext(AuthContext);

  const { isLoading, error, data } = useQuery(['comments'], () => (
    getComments(postId)
  ));

  const queryClient = new useQueryClient()

  const mutation = useMutation((newComment) => {
    return addComment(newComment);
  }, {
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['comments'] })
    },
  });

 const handleClick = async (e) => {
    e.preventDefault();

    mutation.mutate({ comment_content, postId });
    set_comment_content('');
 };

  return (
    <section className="comments">
     <div className="write-comment">
          <img src={ currentUser.profilePicture } alt="Current user picture" />
          <input
            type="text"
            placeholder='Write a comment'
            value={ comment_content }
            onChange={ (e) => set_comment_content(e.target.value) }
          />
          <button onClick={ handleClick }>Send</button>
     </div>
     { isLoading ? "Loading..." : data && data.map((comment) => (
          <div key={ comment.id } className='comment'>
               <img src={ comment.profilePic } alt="Profile picture" />
               <div className="info">
                    <span>{ comment.name }</span>
                    <p>{ comment.comment_content }</p>
               </div>
               <span className='date'>{moment(comment.create_time).fromNow()}</span>
          </div>
     )) }
    </section>
  );
};

export default Comments;
