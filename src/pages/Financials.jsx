import { useState } from "react";
import { AllTransactionFinancial } from "./AllTransactionFinancial";
import { FinancialOptions } from "./FinancialOptions";
import { useUSDValue } from "./useUSDValue";
import { ContributionFinancial } from "./ContributionFinancial";
import { DisbursementFinancial } from "./DisbursmentFinancial";
import { ExpensesFinancial } from "./ExpensesFinancial";

export const Financials = () => {
  const [selectedCurrency, setSelectedCurrency] = useState("Rs");
  const { usdValue, isLoading, error } = useUSDValue();
  const [activeComponent, setActiveComponent] = useState("AllTransaction");

  return (
    <div className="bg-blue-50 ">
      {isLoading ? (
        <h1>Loading</h1>
      ) : (
        <div className="md:-mb-10 -mb-96">
          <FinancialOptions
            setSelectedCurrency={setSelectedCurrency}
            setActiveComponent={setActiveComponent}
          />
          {activeComponent === "AllTransaction" && (
            <AllTransactionFinancial
              selectedCurrency={selectedCurrency}
              usdValue={usdValue}
            />
          )}
          {activeComponent === "Contributions" && <ContributionFinancial />}
          {activeComponent === "Disbursment" && <DisbursementFinancial />}
          {activeComponent === "Expenses" && <ExpensesFinancial />}
        </div>
      )}
    </div>
  );
};
