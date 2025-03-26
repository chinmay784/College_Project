import "./App.css";
import React from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./Components/Pages/Login";
import SignUp from "./Components/Pages/SignUp";
import Otp from "./Components/Pages/Otp";
import { ToastContainer } from "react-toastify"
import Profile from "./Components/Profile";
import Voice from './Components/Pages/Voice'
import SearchAi from "./Components/Ace_Ui/SearchAi";
import ForgotPassEmail from "./Components/ForgotPassEmail";
import PassWordSet from "./Components/PassWordSet";
import ProfileSettings from "./Components/ProfileSettings";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/verify-otp" element={<Otp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forget-password" element={<ForgotPassEmail />}  />
        <Route path="/reset-password" element={<PassWordSet />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile-setting" element={<ProfileSettings />} />
        <Route path="/search-ai" element={<SearchAi />} />
        <Route path="/listen-ai" element={<Voice />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
