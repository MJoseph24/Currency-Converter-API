/*This is where I edit the styling and elements present in my About page*/
import React from "react";

const About = () => {
  return (
    <div>
      <img
        src={require(`../pages/Melvin.png`)}
        alt=""
        width="325"
        height="300"
      />

      <h1
        style={{
          textAlign: "center",
          color: "black",
          textAlign: "center",
          fontFamily: "Helvetica, sans-serif",
        }}
      >
        About Melvin
      </h1>
      <h1
        style={{
          fontSize: "100%",
          textAlign: "center",
          fontFamily: "Helvetica, sans-serif",
          color: "black",
        }}
      >
        I was born in Kerala, India, where my parents are also from, and after
        three years, we moved to Doha, Qatar. I went to a school with an
        Indian/British curriculum. After several years in Qatar, we moved to
        Saudi Arabia. There, I studied in the U.S. curriculum, which I enoyed a
        lot more. I became more interested in both STEM and the arts, and
        competed in soccer, basketball, and volleyball. The school there goes
        only until 9th-grade, however, so in 8th-grade, I began the boarding
        school application process. I began Milton freshman year, and I'm now in
        my junior year here!
      </h1>
    </div>
  );
};

export default About;
