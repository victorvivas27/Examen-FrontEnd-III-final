import { useContext, useReducer } from "react";
import {MyContextGlobal} from "./MyContextGlobal"
import { MyReducer, initialState } from "../myreduce/MyReducer";
export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(MyReducer, initialState);
  const data = { state, dispatch };
  return (
    <MyContextGlobal.Provider value={data}>
      {children}
    </MyContextGlobal.Provider>
  );
};
export const useMyContextGlobal = () => useContext(MyContextGlobal)
