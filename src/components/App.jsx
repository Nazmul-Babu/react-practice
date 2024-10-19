import React from "react";
import Greeting from "./Greeting";
import Paragraph from "./Paragraph";
import pi, { doublePi, tripplePi } from "../math.js";
import { add, multiply, divide, subtract } from "../Calculator.js";
import Contacts from "./Contacts.jsx";

var headingCustomStyle = {
  color: "blue",
  fontSize: "14px",
  width: "100%",
  textAlign: "center",
};
const fname = "MD ";
const lname = "Nazmul";

function App() {
  return (
    <div>
      <Greeting />
      <h3 style={headingCustomStyle}>Hello From {fname + " " + lname}</h3>
      <Paragraph></Paragraph>
      <Paragraph></Paragraph>
      <Paragraph></Paragraph>
      <li>{pi}</li>
      <li>{doublePi()}</li>
      <li>{tripplePi()}</li>
      <li>{add(1, 2)}</li>
      <li>{multiply(1, 2)}</li>
      <li>{divide(10, 2)}</li>
      <li>{subtract(10, 2)}</li>
      <Contacts/>
    </div>
  );
}
export default App;
