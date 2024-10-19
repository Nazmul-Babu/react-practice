import React from "react";

function Greeting() {
  const date = new Date("2024-05-12 19:10:40");
  const time = date.getHours();
  var greeting = "";
  if (time < 12) {
    greeting = "Good Morning";
  } else if (time < 18) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Night";
  }
  return <h1 className="headingCss">{greeting}</h1>;
}

export default Greeting;
