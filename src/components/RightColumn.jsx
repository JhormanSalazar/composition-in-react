import React from 'react';
import UpcomingEvents from './UpcomingEvents';
import FriendRequest from './FriendRequest';
import AdsCard from './AdsCard';

const RightColumn = () => {
  return (
    <div className="w3-col m2">
      <UpcomingEvents />
      <br />
      <FriendRequest />
      <br />
      <AdsCard />
      <br />
      <div className="w3-card w3-round w3-white w3-padding-32 w3-center">
        <p><i className="fa fa-bug w3-xxlarge"></i></p>
      </div>
    </div>
  );
};

export default RightColumn;