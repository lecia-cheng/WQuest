import React from 'react';
import './Card.css'; // Make sure to create a corresponding CSS file

const Card = ({ image, title, percentage }) => (
  <div className="card">
    <img src={image} alt={title} className="card-image" />
    <div className="card-content">
      <h3 className="card-title">{title}</h3>
      <div className="card-progress">
        <div className="progress-circle" style={{ '--percentage': percentage }}>
          {percentage}%
        </div>
      </div>
      <button className="card-button">Resume</button>
    </div>
  </div>
);

export default Card;
