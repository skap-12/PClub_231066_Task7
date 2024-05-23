import React from "react";

type HeaderProps = {
  name: string;
  profilePicture: string;
};

const Header: React.FC<HeaderProps> = ({ name, profilePicture }) => {
  return (
    <div className="profile-header">
      <img src={profilePicture} alt="Profile" />
      <h1>{name}</h1>
    </div>
  );
};

export default Header;
