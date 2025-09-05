import React from 'react';

const Post = ({ name, time, avatar, content, images }) => {
  return (
    <div className="w3-container w3-card w3-white w3-round w3-margin">
      <br />
      <img src={avatar} alt="Avatar" className="w3-left w3-circle w3-margin-right" style={{ width: '60px' }} />
      <span className="w3-right w3-opacity">{time}</span>
      <h4>{name}</h4>
      <br />
      <hr className="w3-clear" />
      <p>{content}</p>
      {images.length > 0 && (
        <div className="w3-row-padding" style={{ margin: '0 -16px' }}>
          {images.map((imgSrc, index) => (
            <div key={index} className="w3-half">
              <img src={imgSrc} style={{ width: '100%' }} alt={`Image ${index + 1}`} className="w3-margin-bottom" />
            </div>
          ))}
        </div>
      )}
      <button type="button" className="w3-button w3-theme-d1 w3-margin-bottom"><i className="fa fa-thumbs-up"></i> &nbsp;Like</button>
      <button type="button" className="w3-button w3-theme-d2 w3-margin-bottom"><i className="fa fa-comment"></i> &nbsp;Comment</button>
    </div>
  );
};

export default Post;