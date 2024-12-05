export type InputState = {
  monthlyContribution: string;
  annualInterestRate: string;
  savingPeriod: string;
  inflationRate: string;
};

export type InputAction = {
  type:
    | "SET_MONTHLY_CONTRIBUTION"
    | "SET_ANNUAL_INTEREST_RATE"
    | "SET_SAVING_PERIOD"
    | "SET_INFLATION_RATE";
  payload: string;
};
