import { NavLink, Outlet, Navigate } from "react-router-dom";
import { FaUser, FaNewspaper } from "react-icons/fa";
import { FaMessage, FaMoneyCheckDollar } from "react-icons/fa6";
import { useAuth } from "../../auth";

export const AdminLayout = () => {
  const { user, isLoading } = useAuth();
  // console.log("admin layout", user);

  if (isLoading) {
    return <h1>Loading ...</h1>;
  }

  if (!user.isAdmin) {
    return <Navigate to="/" />;
  }

  return (
    <div className="flex md:flex-row flex-col justify-between bg-blue-50 z-10">
      <div className="md:w-2/12 w-full border-4 border-blue-400">
        <div className="">
          <div className="md:px-8 py-4 bg-black text-white ">
            <nav>
              <ul className="flex md:flex-col flex-row justify-evenly md:h-[600px]">
                <li className="mx-auto">
                  <NavLink to="/admin/users">
                    <FaUser className="text-2xl md:text-4xl mx-auto" />
                    <p className="md:w-full w-3/12">Users</p>
                  </NavLink>
                </li>
                <li className="mx-auto">
                  <NavLink to="/admin/transactions">
                    <FaMoneyCheckDollar className="text-2xl md:text-4xl mx-12 md:mx-auto" />{" "}
                    <p className=" md:w-full w-10/12  text-center">Financial Transactions</p>
                  </NavLink>
                </li>
                <li className="mx-auto">
                  <NavLink to="/admin/report">
                    <FaNewspaper className="text-2xl md:text-4xl mx-6 md:mx-auto" />
                    <p className="md:w-full w-10/12 md:ml-0 md:px-0 ml-2 px-2">Generate Report</p>
                  </NavLink>
                </li>
                <li className="mx-auto">
                  <NavLink to="/admin/contacts">
                    <FaMessage className="text-2xl md:text-4xl mx-auto" />{" "}
                    contacts
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className="md:w-10/12 px-16 bg-black  py-10 text-white border-4 border-blue-400">
        <Outlet />
      </div>
    </div>
  );
};
