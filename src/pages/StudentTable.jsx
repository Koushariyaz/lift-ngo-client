export const StudentTable = ({
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
      "Name of Student",
      "Roll No.",
      "Branch",
      "2nd Year",
      "3rd Year",
      "4th Year",
    ];

    return (
      <div className="md:w-[100%] w-[130%] md:mt-0 mt-40 md:ml-0 -ml-16 md:my-10 ">
        <p className="text-2xl md:pt-4 mb-10 md:text-2xl font-bold text-blue-800 text-center">
          {heading}
        </p>
        <div className="md:p-4 md:my-2 flex justify-center ">
          <table className="md:scale-100  md:my-4 ">
            <thead className="">
              <tr className="text-lg border-2 border-slate-300">
                {headers.map((header) => (
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
              {transactions.map((student, index) => (
                <tr key={index}>
                  <td className="  border-2 border-slate-300 p-2 bg-slate-100">
                    {index + 1}
                  </td>
                  <td className=" border-2 border-slate-300 p-2 bg-blue-100">
                    {student.name}
                  </td>
                  <td className="border-2 border-slate-300 p-2  bg-slate-100">
                    {student.rollno}
                  </td>
                  <td className="border-2 border-slate-300 p-2  bg-blue-100">
                    {student.branch}
                  </td>
                  <td className="border-2 border-slate-300 p-2  bg-slate-100">
                    {formatCurrency(student.syr)}
                  </td>
                  <td className="border-2 border-slate-300 p-2  bg-blue-100">
                    {formatCurrency(student.tyr)}
                  </td>
                  <td className="border-2 border-slate-300 p-2  bg-slate-100">
                    {formatCurrency(student.fyr)}
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
