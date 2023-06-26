import React from 'react';
import './ThankYou.css';
// import thankYouImage from './thank-you.png';

const ThankYou = () => {
  return (
    <div className="thank-you-container">
      <h1 className="thank-you-heading">Thank You!</h1>
      <p className="thank-you-message">
        Thank you for your submission. We appreciate your interest.
      </p>
      <p className="thank-you-message">
        We will get back to you shortly.
      </p>
      {/* <img src={thankYouImage} alt="Thank you" className="thank-you-image" /> */}
    </div>
  );
};

export default ThankYou;
