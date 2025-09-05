import React from 'react';
import ProfileCard from './ProfileCard';
import Accordion from './Accordion';
import InterestsCard from './InterestsCard';
import AdsCard from './AdsCard';

const LeftColumn = () => {
  return (
    <div className="w3-col m3">
      <ProfileCard />
      <br />
      <Accordion />
      <br />
      <InterestsCard />
      <br />
      <div className="w3-container w3-display-container w3-round w3-theme-l4 w3-border w3-theme-border w3-margin-bottom w3-hide-small">
        <span onClick={() => alert("Función para ocultar este elemento")} className="w3-button w3-theme-l3 w3-display-topright">
          <i className="fa fa-remove"></i>
        </span>
        <p><strong>Hey!</strong></p>
        <p>People are looking at your profile. Find out who.</p>
      </div>
    </div>
  );
};

export default LeftColumn;