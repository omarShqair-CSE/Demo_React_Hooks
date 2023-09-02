import React from "react";
import Toggle from "./Components/Toggle";
import ToggleName from "./Components/ToggleName";
import State from "./Hooks/State";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Effect from "./Hooks/Effect";
import Ref from "./Hooks/Ref";
// import Calculator from "./Components/Calculator/Calculator";

function App() {
  return (
    <>
      <Toggle />
      <ToggleName />
      <State />
      <Effect />
      <Ref />
      {/* <Calculator /> */}
    </>
  );
}

export default App;
