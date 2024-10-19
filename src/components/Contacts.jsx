import React from "react";
import Card from "./Card";
import contactContents from "../Contact.json";


function contacsCard(props){
   return <Card
   key={props.id}
   name={props.name}
   image={props.image}
   email={props.email}
   phone={props.phone}
   />
}

function Contacts() {
  return (
    <div>
      <h1>Contacs List</h1>
      {contactContents.map(contacsCard)}
    </div>
  );
}

export default Contacts;
