import React, { createContext, useReducer } from "react";
import reducer from "./Reducer";

const initialState = {
  listOfCategories: [{
    name: "primera categoria",
    listOfNotes: [{
      name:"primera nota",
      message:"aqui voy",
      ready: false
    },{
      name:"segunda nota",
      message:"sigo aqui",
      ready: false
    }]
  },
  {
    name: "segunda categoria",
    listOfNotes: [{
      name:"tercera nota",
      message:"vamos dandole",
      ready: false
    },{
      name:"cuarta nota",
      message:"Nos nos rendimos",
      ready: false
    }]
  }],
  currentCategory:{
    name: "",
    listOfNotes:[]
  },
  currentNote: {
    name:"",
    message:"",
    ready: false
  }
};

const Store = createContext(initialState);

const StoreProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <Store.Provider value={{state, dispatch}}>
    {children}
  </Store.Provider>
};


export default StoreProvider;

export {Store};