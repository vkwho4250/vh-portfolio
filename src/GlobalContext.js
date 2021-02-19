import React, { useState, createContext } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
   const [pageNum, setPageNum] = useState(1);

   return (
      <GlobalContext.Provider value={[pageNum, setPageNum]}>
         {props.children}
      </GlobalContext.Provider>
   );
};
