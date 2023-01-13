/*This is where I edit the styling and elements present in my Contact page*/

import React from "react";

const Contact = () => {
  return (
    <div>
      <img
        src={require(`../pages/Milton.png`)}
        alt=""
        width="700"
        height="225"
      />
      <h1
        style={{
          textAlign: "center",
          color: "black",
          textAlign: "center",
          fontFamily: "Helvetica, sans-serif",
        }}
      >
        Contact Information
      </h1>
      <h1
        style={{
          fontSize: "120%",
          textAlign: "center",
          fontFamily: "Helvetica, sans-serif",
          color: "black",
        }}
      >
        Name: Melvin Joseph
      </h1>
      <h1
        style={{
          fontSize: "120%",
          textAlign: "center",
          fontFamily: "Helvetica, sans-serif",
          color: "black",
        }}
      >
        Age: 17
      </h1>
      <h1
        style={{
          fontSize: "120%",
          textAlign: "center",
          fontFamily: "Helvetica, sans-serif",
          color: "black",
        }}
      >
        Pronouns: he/him/his
      </h1>
      <h1
        style={{
          fontSize: "120%",
          textAlign: "center",
          fontFamily: "Helvetica, sans-serif",
          color: "black",
        }}
      >
        Personal Email: melvin.joejoseph@gmail.com
      </h1>
      <h1
        style={{
          fontSize: "120%",
          textAlign: "center",
          fontFamily: "Helvetica, sans-serif",
          color: "black",
        }}
      >
        School Email: melvin_joseph24@milton.edu
      </h1>
      <h1
        style={{
          fontSize: "120%",
          textAlign: "center",
          fontFamily: "Helvetica, sans-serif",
          color: "black",
        }}
      >
        Interests: currencies, numbers, and trading
      </h1>
      <h1
        style={{
          fontSize: "120%",
          textAlign: "center",
          fontFamily: "Helvetica, sans-serif",
          color: "black",
        }}
      >
        Note to User: hope you enjoy using my personal currency converter!
      </h1>
    </div>
  );
};

export default Contact;
