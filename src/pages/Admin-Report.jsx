import Jubilee_Batch_Scholarship from "../utilis/Jubilee_Batch_Scholarship.pdf";
import { AllTransactionFinancial } from "./AllTransactionFinancial";
export const AdminReport = () => {
  return (
    <div className="md:w-full w-[130%] -ml-16 ">
      <p className="text-3xl md:text-6xl font-bold text- white my-4 text-center">Admin Report Data</p>

      <div className="text-center hover:scale-125 duration-300">
        <a
          className="bg-blue-500  h-10 text-center p-2 rounded-lg hover:bg-blue-700  "
          href={Jubilee_Batch_Scholarship}
          download="Scholarship Report"
        >
          <button className="mt-10 md:my-4 z-50">Print Report</button>
        </a>
      </div>
      <div className="md:mb-0 bg-transparent overflow-y-hidden text-blue-800 md:scale-100 md:w-full w-[25rem] md:ml-10 mx-1  bg-slate-200 md:mt-0">
        <AllTransactionFinancial />
      </div>
    </div>
  );
};