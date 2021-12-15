import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import SettingsIcon from "@material-ui/icons/Settings";
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";
import "./Header.css";
import { firebase } from "../firebase";

const Header = ({ userPhoto }) => {
  const handleSignOut = () => {
    firebase
      .auth()
      .signOut()
      .then(function () {
        // Sign-out successful.
        localStorage.removeItem("USER_STORAGE_FIREBASE");
        window.location.reload();
      })
      .catch(function (error) {
        // An error happened.
        alert(error.message);
      });
  };

  return (
    <div className="header">
      <div className="header__logo">
        <img src="logo192.png" alt="logo" />
        <span>Storage</span>
      </div>
      <div className="header__searchContainer">
        <div className="header__searchBar">
          <SearchIcon />
          <input type="text" placeholder="Search in Storage" />
          <ExpandMoreIcon />
        </div>
      </div>
      <div className="header__icons">
        <span>
          <HelpOutlineIcon />
          <SettingsIcon />
        </span>
        <AppsIcon />
        <Avatar
          className="header__iconsAvatar"
          src={userPhoto}
          onClick={() => {
            if (
              window.confirm(
                "Are you sure you wish to SignOut the Storeage Firebase?"
              )
            )
              handleSignOut();
          }}
        />
      </div>
    </div>
  );
};

export default Header;
