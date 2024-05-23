import React from "react";

type ActivityProps = {
  buyingActivities: number;
  sellingActivities: number;
};

const Activity: React.FC<ActivityProps> = ({
  buyingActivities,
  sellingActivities,
}) => {
  return (
    <div className="activity-summary">
      <p>Buying Activities: {buyingActivities}</p>
      <p>Selling Activities: {sellingActivities}</p>
    </div>
  );
};

export default Activity;
