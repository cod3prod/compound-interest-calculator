import { InputAction, InputState } from "@/types/input-reducer";

export const initialState: InputState = {
  monthlyContribution: "",
  annualInterestRate: "",
  savingPeriod: "",
  inflationRate: "2",
};

export const inputReducer = (state: InputState, action: InputAction) => {
    switch (action.type) {
        case "SET_MONTHLY_CONTRIBUTION":
            return {
                ...state,
                monthlyContribution: action.payload,
            };
        case "SET_ANNUAL_INTEREST_RATE":
            return {
                ...state,
                annualInterestRate: action.payload,
            };
        case "SET_SAVING_PERIOD":
            return {
                ...state,
                savingPeriod: action.payload,
            };
        case "SET_INFLATION_RATE":
            return {
                ...state,
                inflationRate: action.payload,
            };
        default:
            return state;
    }
}
