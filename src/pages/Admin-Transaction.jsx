import { AllTransactionFinancial } from "./AllTransactionFinancial";

export const AdminTransaction = () => {
  return (
    <div className="-z-10  md:w-full w-[130%] md:ml-0 -ml-16 md:mb-0 -mb-96 ">
      <p className="text-3xl md:text-6xl font-bold text-white my-4 text-center">
        Admin Transactions Data
      </p>
      <div className="md:mb-0 overflow-y-hidden bg-transparent text-blue-800 md:scale-100 md:w-full w-[25rem] md:-ml-0 ml-2  mx-1  md:mt-0">
        <AllTransactionFinancial />
      </div>
    </div>
  );
};
