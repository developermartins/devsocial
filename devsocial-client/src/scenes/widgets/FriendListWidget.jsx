import { Box, Typography, useTheme } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFriends } from "../../state";

import Friend from "../../components/Friend";
import WidgetWrapper from "../../components/WidgetWrapper";

const FriendListWidget = ({ userId }) => {
  const dispatch = useDispatch();
  const { palette } = useTheme();
  const token = useSelector((state) => state.token);
  const friends = useSelector((state) => state.user.friends);

  return (
    <div>FriendListWidget</div>
  );
};

export default FriendListWidget;
