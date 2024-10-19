import React from "react";
var img = {
  width: "150px",
};
function Card(props) {
  return (
    <div  className="contact-card">
      <h4>{props.name}</h4>
      <img style={img} src={props.image} alt="" />
      <p>{props.email}</p>
      <p>{props.phone}</p>
    </div>
  );
}

export default Card;
