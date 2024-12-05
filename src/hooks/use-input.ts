"use client";

import { useContext } from "react";
import { InputContext } from "@/contexts/input-context";

export const useInput = () => {
  const context = useContext(InputContext);

  if (!context) {
    throw new Error("useInput must be used within an InputProvider");
  }

  const { state, dispatch } = context;

  return { state, dispatch };
};
