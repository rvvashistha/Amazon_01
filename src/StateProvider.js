import React, { createContext, useContext, useReducer } from "react";
//Prepares the dataLayer 
export const StateContext = createContext();

//Wrap the app and Provide the DataLayer
export const StateProvider = ({ reducer, initialState, children }) => {
 return <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>;
};

//use the dataLayer(Pulling the data)
export const useStateValue = () => useContext(StateContext);
