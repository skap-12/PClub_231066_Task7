import React from "react";

type ContactDetailsProps = {
  email: string;
  phone: string;
};

const ContactDetails: React.FC<ContactDetailsProps> = ({ email, phone }) => {
  return (
    <div className="contact-details">
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
    </div>
  );
};

export default ContactDetails;
