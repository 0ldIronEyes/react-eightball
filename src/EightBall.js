import React, { useState } from "react";

import "./EightBall.css";
import defaultAnswers from "./answers.json";


function EightBall() {
  const [answer, setAnswer] = useState({
    msg: "Think of a Question.",
    color: "black",
  });

  function handleClick(evt) {
    setAnswer(()=> { let randomInd= Math.floor(Math.random() * defaultAnswers.length)
              return defaultAnswers[randomInd];    
    });
  }

  return (
      <div
          className="EightBall"
          onClick={handleClick}
          style={{ backgroundColor: answer.color }}
      >
        <b>{answer.msg}</b>
      </div>
  );
}


export default EightBall;