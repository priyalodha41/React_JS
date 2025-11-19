import React from 'react';

const Aboutusdetailbox = ({ img, text, content }) => {
  return (
    <div className="aboutus-detail-box d-flex align-items-center">
      <div className="icon-box display justify-content-center align-items-center">
                <img src={img} alt={text} />
      </div>

      <div className="about-detail-content">
        <h3>{text}</h3>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Aboutusdetailbox;
