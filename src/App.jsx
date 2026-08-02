import React, { useState } from "react";
import Home from "./components/Home";
import Gameplay from "./components/Gameplay";
const App = () => {
  const [Gamestarted,setGamesstarted]=useState(false);
  const toggle =()=>{
    setGamesstarted((prev)=>!prev)
  };
  return <div>
    {Gamestarted ? <Gameplay/> : <Home toggle={toggle}/>}
  </div>
};
export default App;
