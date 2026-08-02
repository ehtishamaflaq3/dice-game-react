import React from "react";
import { useState } from "react";
import dice1 from "../images/dice_1.jpg";
import dice2 from "../images/dice_2.jpg";
import dice3 from "../images/dice_3.jpg";
import dice4 from "../images/dice_4.jpg";
import dice5 from "../images/dice_5.jpg";
import dice6 from "../images/dice_6.jpg";

const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];
const Roledice = ({ currentDice, roleDice,score,setscore, isWin,isLose }) => {
  const [showRules, setShowRules] = useState(false);
  return (
    <div className="relative h-125 w-130 items-center flex-col flex justify-between ">
      <div>
        <img
          onClick={roleDice}
          className={`h-65 cursor-pointer transition-transform duration-300 ${isWin ? 'scale-110 ring-4 ring-green-400 animate-pulse' : isLose ? 'scale-95 ring-4 ring-red-400 animate-bounce' : ''}`}
          src={diceImages[currentDice - 1]}
          alt={`dice ${currentDice}`}
        />
      </div>
      <h3 className="text-2xl">Click on Dice to Roll</h3>
      <div className="flex gap-5 flex-col">
        <button className="bg-black h-13 text-white w-45 active:bg-white active:text-black rounded-2xl" onClick={()=>setscore(0)} >
          Reset Score
        </button>
        <button
          className="bg-white border-2 h-13 text-black w-45 active:bg-black active:text-white rounded-2xl"
          onClick={() => setShowRules((s) => !s)}
        >
          {showRules ? "Hide Rules" : "Show Rules"}
        </button>
        {showRules && (
          <div className="absolute ml-90 w-100 p-3 bg-red-200 border-2 rounded shadow-lg ">
            <div className="flex justify-between items-center mb-2">
              <h1 className="text-xl font-bold">How to Play Dice Game</h1>
              <button
                className="text-sm px-2 hover:bg-red-500 py-1 border rounded"
                onClick={() => setShowRules(false)}
              >
                Close
              </button>
            </div>
            <p className="text-sm mb-1">- Select any number.</p>
            <p className="text-sm mb-1">- Click on the dice to roll.</p>
            <p className="text-sm">- If your selected number equals the dice, you gain points equal to the dice; otherwise you lose 2 points.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Roledice;
