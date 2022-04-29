import React from "react";

function Avatar(props) {
  return (
    <img className="card circle-img" src={props.imgURL} alt="avatar_img" />
  );
}
export default Avatar;
