import React from "react";
import { render } from "react-dom";

console.log("buna baieti si fete");

const whereTheAppWillSeat = document.getElementById("here-comes-my-app");
const LogMeIn = ({ handleClick, label }) => {
  return <button onClick={handleClick}>{label}</button>;
};

const Dentist2Technician = () => {
  const showMessage = () => {
    console.log("buna");
  };

  return (
    <div>
      hello world
      <LogMeIn handleClick={showMessage} label="autentificare" />
    </div>
  );
};

render(
  //1 what to render
  <Dentist2Technician />,
  //2 where to be rendered
  whereTheAppWillSeat
);
