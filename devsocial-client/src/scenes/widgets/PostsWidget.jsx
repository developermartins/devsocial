import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../api/posts";
import { setPosts } from "../../state";

import PostWidget from "./PostWidget";

const PostsWidget = ({ userId, isProfile = false }) => {
  const dispatch = useDispatch();

  const posts = useSelector((state) => state.posts);
  const token = useSelector((state) => state.token);

  const getFeedPosts = async () => {
    const response = await getPosts(token);

    dispatch({ posts: response });
  };

  const getUserPosts = async () => {
    const response = await getPosts(token);

    dispatch({ posts: response });
  };

  return (
    <div>PostsWidget</div>
  );
};

export default PostsWidget;
