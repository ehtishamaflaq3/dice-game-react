import React from "react";
import { useState } from "react";
import Totalscore from "./Totalscore";
import Diceselector from "./Diceselector";
import Roledice from "./Roledice";
const Gameplay = () => {
  const [selectedNumber, setselectedNumber] = useState(undefined);
  const [currentDice, setcurrentDice] = useState(1);
  const [score, setscore] = useState(0);
  const [isWin, setIsWin] = useState(false);
  const [isLose, setIsLose] = useState(false);
  const [error, setError] = useState("");

  const generateRandomNumber = (min, max) => {
    const random = Math.floor(Math.random() * (max - min) + min);
    console.log(random);
    return random;
  };
  const roleDice = () => {
    if (!selectedNumber) {
      setError("You have not selected any number");
      return;
    }
    setError("");
    const randomnumber = generateRandomNumber(1, 7);
    setcurrentDice(randomnumber);
    if (randomnumber === selectedNumber) {
      setscore((prev) => prev + randomnumber);
      setIsWin(true);
      setIsLose(false);
      setTimeout(() => setIsWin(false), 1200);
    } else {
      setscore((prev) => prev - 2);
      setIsLose(true);
      setIsWin(false);
      setTimeout(() => setIsLose(false), 1200);
    }
    setselectedNumber(undefined);
  };

  return (
    <div>
      {/* header of gameplay */}
      <div className=" flex items-center justify-between flex-row gap-10 h-45 ">
        <Totalscore score={score} />
        <Diceselector
          error={error}
          setError={setError}
          selectedNumber={selectedNumber}
          setselectedNumber={setselectedNumber}
        />
      </div>
      {/* action logic */}
      <div className="mt-10 flex h-135 items-center justify-center">
        <Roledice currentDice={currentDice} roleDice={roleDice} score={score} setscore={setscore} isWin={isWin} isLose={isLose} />
      </div>
    </div>
  );
};
export default Gameplay;
