"use client";

import { createContext, useReducer } from "react";
import { InputAction, InputState } from "@/types/input-reducer";
import { initialState, inputReducer } from "@/reducers/input-reducer";

type InputContextType = {
  state: InputState;
  dispatch: React.Dispatch<InputAction>;
};

export const InputContext = createContext<InputContextType | null>(null);

export const InputProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(inputReducer, initialState);
  return (
    <InputContext.Provider value={{ state, dispatch }}>
      {children}
    </InputContext.Provider>
  );
};
