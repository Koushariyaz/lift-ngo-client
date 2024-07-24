export const FinancialOptions = ({
  setSelectedCurrency,
  setActiveComponent,
}) => {
  return (
    <div className="flex md:block flex-col">
      <div className="py-6 px-4 md:flex md:flex-row flex-col md:justify-around mx-auto">
        <div className="hidden md:block">
          <p className="text-lg md:text-2xl font-bold">Currency</p>
          <select
            className="font-semibold md:w-20 h-8"
            onChange={(e) => setSelectedCurrency(e.target.value)}
          >
            <option value={"Rs"}>Rs</option>
            <option value={"$"}>$</option>
          </select>
        </div>
        <button
          className="my-2 mx-8 border-2 bg-blue-600 text-white text-lg md:text-xl font-bold py-1 text-center px-2  md:w-[100%]  md:h-12 rounded-3xl md:rounded-full"
          onClick={() => {
            setActiveComponent("AllTransaction");
          }}
        >
          All Transaction
        </button>
        <button
          className="my-2 md:mx-8  border-2 bg-blue-600 text-white text-lg md:text-xl font-bold py-1 text-center px-2  md:w-[100%]  md:h-12 rounded-3xl md:rounded-full"
          onClick={() => {
            setActiveComponent("Contributions");
          }}
        >
          Contributions
        </button>
        <button
          onClick={() => {
            setActiveComponent("Disbursment");
          }}
          className="my-2 mx-8 border-2 bg-blue-600 text-white text-lg md:text-xl font-bold py-1 text-center px-2  md:w-[100%]  md:h-12 rounded-3xl md:rounded-full"
        >
          Disbursement
        </button>
        <button
          onClick={() => {
            setActiveComponent("Expenses");
          }}
          className="my-2 md:mx-8 w-3/12 border-2 bg-blue-600 text-white text-lg md:text-xl font-bold py-1 text-center px-2  md:w-[100%]  md:h-12 rounded-3xl md:rounded-full"
        >
          Expenses
        </button>
        <div className="md:hidden block mx-8">
          <p className="text-lg md:text-2xl font-bold">Currency</p>
          <select
            className="font-semibold md:w-20 h-8"
            onChange={(e) => setSelectedCurrency(e.target.value)}
          >
            <option value={"Rs"}>Rs</option>
            <option value={"$"}>$</option>
          </select>
        </div>
      </div>
    </div>
  );
};
