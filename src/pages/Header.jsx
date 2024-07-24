import logo2 from "../utilis/logoNoBG.png";
import { Link } from "react-router-dom";
import { useAuth } from "../auth";

export const Header = () => {
  const { isLoggedIn, isLogin, user, isLoading } = useAuth();

  if (isLoading) {
    return <h1>Loading ...</h1>;
  }

  return (
    <div className="text-white bg-black">
      <div className="md:flex flex-col md:flex-row md:justify-between shadow-2xl rounded-lg ">
        <div className="flex">
          <Link to="/">
            <img
              className="mx-auto p-4 hover:scale-105 duration-200 rounded-full h-[6rem] w-[8rem]"
              height={100}
              width={200}
              src={logo2}
              alt="lift logo"
            ></img>
          </Link>
          <ul className="w-full flex md:hidden justify-end md:justify-start font-bold">
            <div className="m-2 p-2">
              {isLogin ? (
                <Link to="/logout">
                  <button className="hover:scale-105 duration-200 border-2 rounded-3xl border-blue-800 py-2 px-4 hover:text-white hover:bg-blue-700">
                    Logout
                  </button>
                </Link>
              ) : (
                <Link to="/login">
                  <button className="hover:scale-105 duration-200 border-2 rounded-3xl border-blue-800 py-2 px-4 hover:text-white hover:bg-blue-700">
                    Login
                  </button>
                </Link>
              )}
            </div>
            {isLogin ? (
              <div className="m-2 p-2">
                <Link to="/donate">
                  <button className="hover:scale-105 duration-200 border-2 rounded-3xl bg-blue-600 text-white py-2 px-4 font">
                    Donate
                  </button>
                </Link>
              </div>
            ) : (
              <div className="m-2 p-2">
                <Link to="/register">
                  <button className="hover:scale-105 duration-200 border-2 rounded-3xl bg-blue-600 text-white py-2 px-4 font">
                    Register
                  </button>
                </Link>
              </div>
            )}
          </ul>
        </div>

        <ul className=" flex justify-between md:justify-evenly md:m-auto p-4 font-bold md:w-6/12">
          {isLoggedIn && user?.isAdmin && (
            <div>
              <li className="hover:rounded-xl duration-200 hover:bg-slate-300 hover:scale-110 p-1">
                <Link className="Admin" to="/admin">
                  Admin
                </Link>
              </li>
            </div>
          )}
          {((isLoggedIn && user?.isAdmin) || (isLoggedIn && user?.isGold)) && (
            <div>
              <li className="hover:rounded-xl duration-200 hover:bg-slate-300 hover:scale-110 p-1">
                <Link className="Financial" to="/financials">
                  Financial
                </Link>
              </li>
            </div>
          )}
          {((isLoggedIn && user?.isAdmin) || (isLoggedIn && user?.isBlue)) && (
            <div>
              <li className="hover:rounded-xl duration-200 hover:bg-slate-300 hover:scale-110 p-1">
                <Link className="Projects" to="/projects">
                  Projects
                </Link>
              </li>
            </div>
          )}
          <div>
            <li className="hover:rounded-xl duration-200 hover:bg-slate-300 hover:scale-110 p-1">
              <Link className="About" to="/about">
                About
              </Link>
            </li>
          </div>
          <div>
            <li className="hover:rounded-xl duration-200 hover:bg-slate-300 hover:scale-110 p-1">
              <Link className="FAQ" to="/faq">
                FAQ
              </Link>
            </li>
          </div>
          <div>
            <li className="hover:rounded-xl duration-200 hover:bg-slate-300 hover:scale-110 p-1">
              <Link className="Contact-us" to="/contactUs">
                Contact Us
              </Link>
            </li>
          </div>
        </ul>
        <ul className="hidden md:flex justify-start font-bold">
          <div className="m-2 p-2">
            {isLogin ? (
              <Link to="/logout">
                <button className="hover:scale-105 duration-200 border-2 rounded-3xl border-blue-800 py-2 px-4 hover:text-white hover:bg-blue-700">
                  Logout
                </button>
              </Link>
            ) : (
              <Link to="/login">
                <button className="hover:scale-105 duration-200 border-2 rounded-3xl border-blue-800 py-2 px-4 hover:text-white hover:bg-blue-700">
                  Login
                </button>
              </Link>
            )}
          </div>
          {isLogin ? (
            <div className="m-2 p-2">
              <Link to="/donate">
                <button className="hover:scale-105 duration-200 border-2 rounded-3xl bg-blue-600 text-white py-2 px-4 font">
                  Donate
                </button>
              </Link>
            </div>
          ) : (
            <div className="m-2 p-2">
              <Link to="/register">
                <button className="hover:scale-105 duration-200 border-2 rounded-3xl bg-blue-600 text-white py-2 px-4 font">
                  Register
                </button>
              </Link>
            </div>
          )}
        </ul>
      </div>
    </div>
  );
};
