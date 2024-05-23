import React from "react";
import Header from "./ProfilePage/Header.tsx";
import ContactDetails from "./ProfilePage/ContactDetails.tsx";
import Activity from "./ProfilePage/Activity.tsx";
import Edit from "./ProfilePage/Edit.tsx";
import ManageListings from "./ProfilePage/ManageListings.tsx";

type ProfilePageProps = {
  name: string;
  profilePicture: string;
  email: string;
  phone: string;
  buyingActivities: number;
  sellingActivities: number;
};

const ProfilePage: React.FC<ProfilePageProps> = ({
  name,
  profilePicture,
  email,
  phone,
  buyingActivities,
  sellingActivities,
}) => {
  return (
    <div className="profile-page">
      <Header name={name} profilePicture={profilePicture} />
      <ContactDetails email={email} phone={phone} />
      <Activity
        buyingActivities={buyingActivities}
        sellingActivities={sellingActivities}
      />
      <div className="profile-actions">
        <Edit />
        <ManageListings />
      </div>
    </div>
  );
};

export default ProfilePage;
