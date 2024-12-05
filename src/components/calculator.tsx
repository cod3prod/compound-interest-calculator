import { useInput } from "@/hooks/use-input";
import { Input } from "./input";
import { InputState, InputAction } from "../types/input-reducer";


export default function Calculator() {
  const { state, dispatch } = useInput();

  const handleChange = (type: InputAction["type"]) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === "" || /^\d*\.?\d*$/.test(value)) {
      dispatch({ type, payload: value });
    }
  };

  return (
    <section className="p-4 max-w-[30rem] mx-auto my-8 rounded-md bg-gradient-to-b from-[#307e6c] to-[#2b996d]">
      <div className="flex justify-evenly gap-6">
        <Input 
          name="monthlyContribution" 
          type="text"
          inputMode="decimal"
          required
          value={state.monthlyContribution}
          onChange={handleChange("SET_MONTHLY_CONTRIBUTION")}
        >
          매달 저축 금액 (단위: 10,000)
        </Input>
        <Input 
          name="annualInterestRate" 
          type="text"
          inputMode="decimal"
          required
          value={state.annualInterestRate}
          onChange={handleChange("SET_ANNUAL_INTEREST_RATE")}
        >
          연이율 (단위: %)
        </Input>
      </div>
      <div className="flex justify-evenly gap-6">
        <Input 
          name="savingPeriod" 
          type="text"
          inputMode="decimal"
          required
          value={state.savingPeriod}
          onChange={handleChange("SET_SAVING_PERIOD")}
        >
          저축 기간 (단위: 년)
        </Input>
        <Input
          name="inflationRate"
          type="text"
          inputMode="decimal"
          required
          value={state.inflationRate}
          onChange={handleChange("SET_INFLATION_RATE")}
        >
          인플레이션 비율 (단위: %)
        </Input>
      </div>
    </section>
  );
}
