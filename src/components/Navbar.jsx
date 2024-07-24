import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useAuth } from "../auth";

export const Navbar = () => {
  const { isLoggedIn, user, isLoading } = useAuth();
  // console.log("admin layout", user);

  if (isLoading) {
    return <h1>Loading ...</h1>;
  }

  return (
    <>
      <header>
        <div className="container">
          <div className="logo-brand">
            <NavLink to="/">SwatiTechnical</NavLink>
          </div>

          <nav>
            <ul>
              <li>
                <NavLink to="/"> Home </NavLink>
              </li>
              <li>
                <NavLink to="/about"> About </NavLink>
              </li>
              <li>
                <NavLink to="/faq"> FAQ </NavLink>
              </li>
              <li>
                <NavLink to="/contact"> Contact Us </NavLink>
              </li>
              {isLoggedIn ? (
                <>
                  <li>
                    <NavLink to="/logout"> Logout </NavLink>
                  </li>
                  {user?.isAdmin && (
                    <li>
                      <NavLink to="/admin"> Admin </NavLink>
                    </li>
                  )}
                  {user?.isGold && (
                    <li>
                      <NavLink to="/financials"> Financials </NavLink>
                    </li>
                  )}
                  {user?.isBlue && (
                    <li>
                      <NavLink to="/projects"> Projects </NavLink>
                    </li>
                  )}
                </>
              ) : (
                <>
                  <li>
                    <NavLink to="/register"> Register </NavLink>
                  </li>
                  <li>
                    <NavLink to="/login"> Login </NavLink>
                  </li>
                </>
              )}
              <li>
                    <NavLink to="/donate"> Donate </NavLink>
                  </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};