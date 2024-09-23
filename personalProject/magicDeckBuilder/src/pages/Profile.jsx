import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import UpdateForm from "../components/auth/UpdateForm";

const Profile = () => {
  const [userEmail, setEmail] = useState("Email goes here");
  const [match, setMatch] = useState(true);
  const [userId, setUserId] = useState();
  const nav = useNavigate()

  useEffect(() => {
    axios.get("/api/session-check").then((res) => {
      console.log("here is the user's id", res.data.userId);
      setUserId(res.data.userId);
      axios.get(`/api/user-info/${res.data.userId}`).then((res) => {
        if (res.data.success) {
          console.log("Here is their Email", res.data);
          setEmail(res.data.email);
        } else {
          console.log("error. success: ", res.data.success);
        }
      });
    });
  }, []);

  const handleProfileUpdate = (e, formdata) => {
    console.log("handleProfileUpdate: ", formdata);
    event.preventDefault();
    let { email, password, confirmPassword } = formdata;
    formdata.id = userId
    if (email === "") {
      console.log(userEmail);
      email = userEmail;
    }
    if (password === confirmPassword) {
      console.log("handleProfileUpdate: ", formdata);
      axios.put("/api/update-user", formdata).then((res) => {
        if (res.data.success) {
          console.log("res.data: ", res.data);
          nav("/profile");
        } else {
          console.log("Registration failed");
        }
      });
    } else {
      setMatch(false);
      console.log("Passwords do not match");
    }
  };

  return match ? (
    <>
      <div>Hello {userEmail} welcome to your profile</div>
      <div>Update Profile</div>
      <UpdateForm onUpdate={handleProfileUpdate} userId={userId} />
    </>
  ) : (
    <>
      <div>Hello {userEmail} welcome to your profile</div>
      <div>Update Profile</div>
      <UpdateForm onUpdate={handleProfileUpdate} />
      <div>Passwords Don't match</div>
    </>
  );
};

export default Profile;
