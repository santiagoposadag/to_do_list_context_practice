import React from "react";

const Note = ({name, message, ready}) => {
  return <div>
    <h1>Estamos en la nota</h1>
    <p>{name}</p>
    <p>{message}</p>
  </div>
}

export default Note;