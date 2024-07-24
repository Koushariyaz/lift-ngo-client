import { StudentTable } from "./StudentTable";
import { transactionsData } from "../utilis/constant";

export const AllTransactionFinancial = ({ selectedCurrency = "Rs", usdValue=80 }) => {
  const splitTransactions = (transactions, batchSize = 11) => {
    const batches = [];

    for (let i = 0; i < transactions.length; i += batchSize) {
      const currentBatch = transactions.slice(i, i + batchSize);
      batches.push(currentBatch);
    }

    const [batch19, batch20, ...rest] = batches;
    return { batch19, batch20, batch21: rest.flat() };
  };

  const yourTransactions = transactionsData;
  const { batch19, batch20, batch21 } = splitTransactions(yourTransactions);

  return (
    <div 
    className="bg-inherit  md:mx-auto scale-[65%] md:scale-100 md:mt-0 -mt-[40rem]"
    >
      <StudentTable
        transactions={batch19}
        selectedCurrency={selectedCurrency}
        usdToINR={usdValue}
        heading={"Jubilee Batch Scholarship (2019-2023)"}
      />
      <StudentTable
        transactions={batch20}
        selectedCurrency={selectedCurrency}
        usdToINR={usdValue}
        heading={"Jubilee Batch Scholarship (2020-2024)"}
      />
      <StudentTable
        transactions={batch21}
        selectedCurrency={selectedCurrency}
        usdToINR={usdValue}
        heading={"Jubilee Batch Scholarship (2021-2025)"}
      />
    </div>
  );
};
