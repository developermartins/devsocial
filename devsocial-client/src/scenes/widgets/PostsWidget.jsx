import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts, getUserPostsById } from "../../api/posts";
import { setPosts } from "../../state/";

import PostWidget from "./PostWidget";

const PostsWidget = ({ userId, isProfile = false }) => {
  const dispatch = useDispatch();

  const posts = useSelector((state) => state.posts);
  const token = useSelector((state) => state.token);

  const getFeedPosts = async () => {
    const response = await getPosts(token);

    dispatch(setPosts({ posts: response.data }));
  };

  const getUserPosts = async () => {
    const response = await getUserPostsById(userId, token);

    dispatch(setPosts({ posts: response.data }));
  };

  useEffect(() => {
    if (isProfile) {
      getUserPosts();
    } else {
      getFeedPosts();
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      { posts.map(
        ({
          _id,
          userId,
          firstName,
          lastName,
          description,
          location,
          picturePath,
          userPicturePath,
          likes,
          comments,
        }) => (
          <PostWidget
            key={ _id }
            postId={ _id }
            postUserId={ userId }
            name={ `${firstName} ${lastName}` }
            description={ description }
            location={ location }
            picturePath={ picturePath }
            userPicturePath={ userPicturePath }
            likes={ likes }
            comments={ comments }
          />
        )
      ) }
    </>
  );
};

export default PostsWidget;
