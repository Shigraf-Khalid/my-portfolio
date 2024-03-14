/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "Shigraf-Khalid/my-portfolio/__images__/WhatsApp Image 2023-01-19 at 8.08.17 PM.jpeg";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "Hello, I'm Shigraf Khalid, a dedicated engineering student with a strong penchant for technology and digital marketing. With 1.5 years of hands-on experience in the digital marketing arena and certifications from Google and Coursera, I'm deeply committed to pushing the boundaries of what's possible in this ever-evolving field. Beyond my studies, I've crafted a track record of impactful projects in data analysis using R and SQL. These projects have honed my analytical skills and provided me with valuable insights into data-driven decision-making. As a public speaker, I use my communication skills to share knowledge and inspire others. Currently serving as the Campus Lead Ambassador for the CISCO community in Pakistan, I'm passionate about fostering tech collaboration and knowledge exchange. Let's connect and explore ways to innovate and grow together in the realms of engineering, technology, and digital marketing.
/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Analyst",
  "R Expert",
  "SQL Expert",
  "Data & Big Data",
  "Graphic design",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "I am passionate about solving problems in new creative ways to drive innovation. By leveraging my UI/UX experience I continually look for new and better ways to make tech accessible by all.";

const About = () => {
  return (
    <section className="padding" id="about">
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
