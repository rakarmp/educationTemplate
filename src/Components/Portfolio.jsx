import React from "react";
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

const projectList = [
  {
    title: "Semua Kreasi Saya Ada Disini",
    description:
      "Saya Selalu Membuat Kreasi Yang Menarik Dari Kreativitas Saya Sendiri, Dan Menyimpannya Di Github",
    url: "https://github.com/grizz12",
  },
  {
    title: "Saya Membuat Website Ini",
    description:  "Saya Membuat Website Ini Dengan Next JS, Hasil Dari Belajar Saya Sendiri",
    url: "https://personal-blog-grizz12.vercel.app/",
  }
];

const Portfolio = () => {
  return (
    <section className="light" id="portfolio">
      <h2>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
