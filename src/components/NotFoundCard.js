import React from 'react';
import './NotFound.css'; // Import the CSS file for styling (create this file later)

const NotFoundCard = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1 className="not-found-heading">Oops!</h1>
        <p className="not-found-text">The page you're looking for could not be found.</p>
      </div>
    </div>
  );
};

export default NotFoundCard;
