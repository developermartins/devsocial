import { Box, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getUser } from "../../api/user";

import Navbar from "../navbar";
import FriendListWidget from "../widgets/FriendListWidget";
import MyPostWidget from "../widgets/MyPostWidget";
import PostsWidget from "../widgets/PostsWidget";
import UserWidget from "../widgets/UserWidget";

const ProfilePage = () => {
	const [user, setUser] = useState(null);
	const {	userId	} = useParams();
	const token = useSelector((state) => state.token);
	const isNonMobileScreens = useMediaQuery("(min-width:1000px)");

	const getUserInfo = async () => {
		const response = await getUser(userId, token);

		setUser(response.data);
	};
	
	useEffect(() => {
		getUserInfo();
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	return (
		<section>
			profilePage
		</section>
  );
};

export default ProfilePage;
