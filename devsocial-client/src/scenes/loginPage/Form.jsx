import { useState } from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { EditOutlinedIcon } from "@mui/icons-material/EditOutlined";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLogin } from "../../state";
import { Formik } from "formik";

import * as yup from "yup";
import DropZone from "react-dropzone";
import FlexBetween from "../../components/FlexBetween";

const registerSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  email: yup.string().email("Invalid email").required("required"),
  password: yup.string().required("required"),
  location: yup.string().required("required"),
  occupation: yup.string().required("required"),
  picture: yup.string().required("required"),
});

const loginSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("required"),
  password: yup.string().required("required"),
});

const Form = () => {
  return (
    <div>Form</div>
  );
};

export default Form;
