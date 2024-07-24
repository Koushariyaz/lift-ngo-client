export const Contributors = ({
  transactions,
  selectedCurrency,
  usdToINR,
  heading,
}) => {
  const formatCurrency = (amount) => {
    if (selectedCurrency === "Rs") {
      if (amount === "N/A" || amount === "Ineligible" || amount === "TBD")
        return amount;
      else return `₹${amount}`;
    } else {
      {
        if (amount === "N/A" || amount === "Ineligible" || amount === "TBD")
          return amount;
        else return `$${(amount / usdToINR).toFixed(2)}`;
      }
    }
  };

  const createTable = () => {
    const headers = [
      "S.No",
      "Date",
      "Name ",
      "Contributed Amount",
      "Debit Amount",
      "Total Amount",
    ];

    return (
      <div className="md:w-[100%] w-[130%] md:mt-0 mt-40 md:ml-0 -ml-16 md:my-10 ">
        <p className=" text-xl pt-4 md:text-2xl font-bold text-blue-800 text-center">
          {heading}
        </p>
        <div className="md:p-4 md:my-2 flex justify-center ">
          <table className="md:scale-100 scale-[90%]  md:my-4 ">
            <thead className="">
              <tr className="text-lg border-2 border-slate-300">
                {headers?.map((header) => (
                  <th
                    className="border-2 border-slate-200 p-2 bg-blue-700 text-white"
                    key={header}
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="font-medium  text-center">
              {transactions?.map((contributor, index) => (
                <tr key={index}>
                  <td className="border-2 border-slate-300 p-2 bg-slate-100">
                    {index + 1}
                  </td>
                  <td className="border-2 border-slate-300 p-2  bg-slate-100">
                    {" "}
                    {contributor.date}
                  </td>
                  <td className="border-2 border-slate-300 p-2">
                    {contributor.name}
                  </td>
                  <td className="border-2 border-slate-300 p-2">
                    {/* {contributor.contributedAmount} */}
                  </td>
                  <td className="border-2 border-slate-300 p-2  bg-slate-100">
                    {/* {formatCurrency(contributor.debitAmount)} */}
                  </td>
                  <td className="border-2 border-slate-300 p-2">
                    {/* {formatCurrency(contributor.totalAmount)} */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  return <div>{createTable()}</div>;
};
