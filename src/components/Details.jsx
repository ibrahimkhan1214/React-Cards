import React from "react";

function Phone(props) {
  return <p className="info">{props.phone}</p>;
}
function Email(props) {
  return <p className="info">{props.email}</p>;
}

export { Phone, Email };
