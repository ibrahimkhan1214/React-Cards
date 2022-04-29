import React from "react";
import Avatar from "./Avatar";
import * as Details from "./Details";
function Card(props) {
  return (
    <div>
      <h1 className="heading">{props.contact}</h1>
      <div className="card">
        <div className="top">
          <h2 className="name">{props.name}</h2>
          <Avatar imgURL={props.imgURL} />
        </div>
        <div className="bottom">
          <Details.Phone phone={props.phone} />
          <Details.Email email={props.email} />
        </div>
      </div>
    </div>
  );
}

export default Card;
