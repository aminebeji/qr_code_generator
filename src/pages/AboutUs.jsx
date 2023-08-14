import React from "react";

const AboutUs = () => {
  return (
    <div className="about-us">
      <h1>About Us</h1>
      <hr></hr>
      <div className="about-item">
        <h4>I-Who am I?</h4>
        <p>
          I'm a 24-year-old web developer from Tunisia with 2 years of
          experience in web development. I have a passion for creating
          innovative solutions that make technology more accessible.
        </p>
      </div>
      <div className="about-item">
        <h4>II-General Idea</h4>
        <p>
          The QR Code Generator app was born out of the need to simplify the
          process of creating QR codes for various purposes. It's designed to
          provide a user-friendly interface and versatile functionality for
          generating QR codes.
        </p>
      </div>
      <div className="about-item">
        <h4>III-App Features</h4>
        <ul>
          <li>
            Generate QR codes for WiFi settings, links, v-cards, and phone
            numbers.
          </li>
          <li>
            Customize QR code colors and styles to match your preferences.
          </li>
          <li>
            Download generated QR codes as PNG images with customizable
            filenames.
          </li>
          <li>
            Efficient and straightforward user interface for quick QR code
            creation.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutUs;
