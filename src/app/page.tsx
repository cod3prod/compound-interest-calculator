"use client";

import Calculator from "@/components/calculator";
import Results from "@/components/results";
import { InputProvider } from "@/contexts/input-context";

export default function Page() {
  return (
    <InputProvider>
      <Calculator />
      <Results />
    </InputProvider>
  );
}
