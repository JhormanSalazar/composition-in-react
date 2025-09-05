import React, { useState } from 'react';

const Accordion = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const handleClick = (id) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  return (
    <div className="w3-card w3-round">
      <div className="w3-white">
        <button onClick={() => handleClick('Demo1')} className="w3-button w3-block w3-theme-l1 w3-left-align">
          <i className="fa fa-circle-o-notch fa-fw w3-margin-right"></i> My Groups
        </button>
        <div id="Demo1" className={`w3-container ${activeAccordion === 'Demo1' ? '' : 'w3-hide'}`}>
          <p>Some text..</p>
        </div>
        <button onClick={() => handleClick('Demo2')} className="w3-button w3-block w3-theme-l1 w3-left-align">
          <i className="fa fa-calendar-check-o fa-fw w3-margin-right"></i> My Events
        </button>
        <div id="Demo2" className={`w3-container ${activeAccordion === 'Demo2' ? '' : 'w3-hide'}`}>
          <p>Some other text..</p>
        </div>
        <button onClick={() => handleClick('Demo3')} className="w3-button w3-block w3-theme-l1 w3-left-align">
          <i className="fa fa-users fa-fw w3-margin-right"></i> My Photos
        </button>
        <div id="Demo3" className={`w3-container ${activeAccordion === 'Demo3' ? '' : 'w3-hide'}`}>
          <div className="w3-row-padding">
            <br />
            <div className="w3-half">
              <img src="https://www.w3schools.com/w3images/lights.jpg" style={{ width: '100%' }} className="w3-margin-bottom" alt="Lights" />
            </div>
            <div className="w3-half">
              <img src="https://www.w3schools.com/w3images/nature.jpg" style={{ width: '100%' }} className="w3-margin-bottom" alt="Nature" />
            </div>
            <div className="w3-half">
              <img src="https://www.w3schools.com/w3images/mountains.jpg" style={{ width: '100%' }} className="w3-margin-bottom" alt="Mountains" />
            </div>
            <div className="w3-half">
              <img src="https://www.w3schools.com/w3images/forest.jpg" style={{ width: '100%' }} className="w3-margin-bottom" alt="Forest" />
            </div>
            <div className="w3-half">
              <img src="https://www.w3schools.com/w3images/nature.jpg" style={{ width: '100%' }} className="w3-margin-bottom" alt="Nature" />
            </div>
            <div className="w3-half">
              <img src="https://www.w3schools.com/w3images/snow.jpg" style={{ width: '100%' }} className="w3-margin-bottom" alt="Snow" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;