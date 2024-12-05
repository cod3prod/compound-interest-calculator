import { useInput } from "@/hooks/use-input";

export default function Results() {
  const { state } = useInput();
  const { monthlyContribution, annualInterestRate, savingPeriod, inflationRate } = state;

  const calculateYearlyResults = () => {
    const monthlyContributionNum = Number(monthlyContribution) || 0;
    const annualInterestRateNum = Number(annualInterestRate) || 0;
    const savingPeriodNum = Number(savingPeriod) || 0;
    const inflationRateNum = Number(inflationRate) || 0;
    
    const results = [];
    let totalSaved = 0;
    let totalWithInterest = 0;
    const monthlyRate = annualInterestRateNum / 12 / 100;
    const monthlyContributionInWon = monthlyContributionNum * 10000;

    for (let year = 1; year <= savingPeriodNum; year++) {
      for (let month = 1; month <= 12; month++) {
        totalSaved += monthlyContributionInWon;
        totalWithInterest = (totalWithInterest + monthlyContributionInWon) * (1 + monthlyRate);
      }

      const realValue = totalWithInterest / Math.pow(1 + inflationRateNum / 100, year);

      results.push({
        year,
        totalSaved: Math.round(totalSaved),
        totalWithInterest: Math.round(totalWithInterest),
        realValue: Math.round(realValue)
      });
    }

    return results;
  };

  const results = calculateYearlyResults();

  if (!savingPeriod || !monthlyContribution || !annualInterestRate) {
    return null;
  }

  return (
    <section className="max-w-[50rem] mx-auto my-8 overflow-x-auto">
      <table className="w-full border-collapse text-sm whitespace-nowrap">
        <thead>
          <tr className="bg-[#307e6c] text-white">
            <th className="p-1.5 border border-[#2b996d] min-w-[4rem]">연차</th>
            <th className="p-1.5 border border-[#2b996d] min-w-[8rem]">총 저축액</th>
            <th className="p-1.5 border border-[#2b996d] min-w-[8rem]">이자 포함 총액</th>
            <th className="p-1.5 border border-[#2b996d] min-w-[8rem]">실질 가치</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result) => (
            <tr key={result.year} className="bg-[#1a1f1d] hover:bg-[#2b996d]/20">
              <td className="p-1.5 border border-[#2b996d] text-center min-w-[4rem]">{result.year}년</td>
              <td className="p-1.5 border border-[#2b996d] text-right min-w-[8rem]">
                {result.totalSaved.toLocaleString()}원
              </td>
              <td className="p-1.5 border border-[#2b996d] text-right min-w-[8rem]">
                {result.totalWithInterest.toLocaleString()}원
              </td>
              <td className="p-1.5 border border-[#2b996d] text-right min-w-[8rem]">
                {result.realValue.toLocaleString()}원
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
