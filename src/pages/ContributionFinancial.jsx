import { contributorData } from "../utilis/constant";
import { Contributors } from "./Contributors";

export const ContributionFinancial = () => {

  const foundingMembers = contributorData.find(
    (section) => section.sectionName === "Founding Members"
  ).members;
  const additionalMembers = contributorData.find(
    (section) => section.sectionName === "Additional Members"
  ).members;

  return (
    <div className="bg-blue-50  md:mx-auto scale-75 md:scale-100 md:mt-0 -mt-[30rem]">
      <Contributors
        transactions={foundingMembers}
        selectedCurrency={"Rs"}
        usdToINR={80}
        heading={"Founding Member"}
      />
      <Contributors
        transactions={additionalMembers}
        selectedCurrency={"Rs"}
        usdToINR={80}
        heading={"Additional Member"}
      />
    </div>
  );
};

