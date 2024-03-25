import React, { useState } from "react";
import "./Topics.css";
import {
  frequencies,
  daw,
  vocalsProcessing,
  mixing,
  mixingConsole,
  mastering,
  bgElement1,
} from "../../assets";

const Topics = () => {
  const [currentImage, setImage] = useState(frequencies);

  return (
    <section id="topics" className="black">
      <div className="wrapper">
        <h2>What Will You Learn</h2>
        <div className="content-container">
          <ul className="topics-list">
            <li onMouseEnter={() => setImage(frequencies)}>
              What are frequencies?
            </li>

            <li onMouseEnter={() => setImage(daw)}>Using the Daw</li>
            <li onMouseEnter={() => setImage(vocalsProcessing)}>
              Vocal Processing
            </li>
            <li onMouseEnter={() => setImage(mixing)}>mixing</li>
            <li onMouseEnter={() => setImage(mixingConsole)}>Mixing Console</li>
            <li onMouseEnter={() => setImage(mastering)}>Mastering</li>
          </ul>

          <div className="topic-image">
            <img src={currentImage} alt="" />
          </div>
        </div>
        <img src={bgElement1} className="bg-element-1"></img>
      </div>
    </section>
  );
};

export default Topics;
