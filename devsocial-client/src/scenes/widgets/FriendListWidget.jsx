import { Box, Typography, useTheme } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFriends } from "../../state";
import { getUserFriends } from "../../api/user";

import Friend from "../../components/Friend";
import WidgetWrapper from "../../components/WidgetWrapper";

const FriendListWidget = ({ userId }) => {
  const dispatch = useDispatch();
  const { palette } = useTheme();
  const token = useSelector((state) => state.token);
  const friends = useSelector((state) => state.user.friends);

  const getFriends = async () => {
    const response = await getUserFriends(userId, token);

    dispatch(setFriends({ friends: response.data }));
  };

  useEffect(() => {
    getFriends();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <WidgetWrapper>
      <Typography
        color={ palette.neutral.dark }
        variant="h5"
        fontWeight="500"
        sx={{ mb: "1.5rem" }}
      >
        Friend List
      </Typography>

      <Box display="flex" flexDirection="column" gap="1.5rem">
        { friends.length > 0 ? 
           friends.map((friend) => (
            <Friend
              key={ friend._id }
              friendId={ friend._id }
              name={ `${friend.firstName} ${friend.lastName}` }
              subtitle={ friend.occupation }
              userPicturePath={ friend.picturePath }
            />
          )) : <p>You don't have any friend yet. Add a friend!</p>
        }
      </Box>
    </WidgetWrapper>
  );
};

export default FriendListWidget;
