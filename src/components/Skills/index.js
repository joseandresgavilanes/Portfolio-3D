import { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import WordCloud from "./wordcloud";

const Skills = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  const skillsArray = "Skills".split("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="container skills-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={skillsArray}
              idx={15}
            />
            <br />
          </h1>
          <p>
            I have built web applications using HTML, CSS, SASS, ReactJS,
            NextJS, TailwindCSS, JavaScript, and TypeScript. I also have
            experience in Software Development with Python and Golang. I am
            ready to do my best and work along with you to achieve any goal that
            benefits humanity.
          </p>
          <p>
            i am looking for a role in a company with the opportunity to work
            with the latest technologies on challenging and diverse projects.
          </p>
        </div>

        <div className="tagcloud-wrap">
          <WordCloud />
        </div>
      </div>

      <Loader type="pacman" />
    </>
  );
};

export default Skills;
