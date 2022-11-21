import React from "react";
import image from "../images/mosaic.svg";
const imageAltText = "purple and blue abstract background";
const description =
  "Saya adalah seorang pelajar yang sedang belajar di SMK Assalaam Bandung. Saya sangat tertarik dengan dunia IT dan saya ingin menjadi seorang Front End Developer.";
const skillsList = [
  "React JS",
  "Vue JS",
  "Next JS",
  "AnyThing"
];
const detailOrQuote =
  "Powerfull saat solo code dan powerfull saat team code";

const About = () => {
  return (
    <section className="light" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
