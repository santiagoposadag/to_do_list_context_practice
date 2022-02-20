import React from "react";
import Note from "./Note";

const Category = ({name, listOfNotes})=>{
  return <div>
    <h1>{name}</h1>
    {listOfNotes.map(note => <Note name={note.name} message={note.message} ready={note.ready}/>)
    }
  </div>
};


export default Category;