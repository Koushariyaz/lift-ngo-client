import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth";
import { toast } from "react-toastify";
import LOGIN_IMG from "../utilis/login.png";

export const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const { setLogin , storeTokenInLS, API } = useAuth();
  const URL = `${API}/api/auth/login`;

  // let handle the input field value
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(user);
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      // console.log("login form", response);

      const res_data = await response.json();

      if (response.ok) {
        //alert("Login Successful");
        //console.log("res from server", res_data);
        // stored the token in localhost
        storeTokenInLS(res_data.token);
        // localStorage.setItem("token", res_data.token);
        setUser({ email: "", password: "" });
        setLogin(true);
        toast.success("Login Successful");
        navigate("/");
      } else {
        toast.error(
          res_data.extraDetails ? res_data.extraDetails : res_data.message
        );
        console.log("invalid credentials");
      }
    } catch (error) {
      console.log("register", error);
    }
  };

  return (
    <div className="px-4 pb-10">
      <section>
        <main>
              <div className="flex md:flex-row flex-col ">
                <div className="m-4">
                  <img
                    src={LOGIN_IMG}
                    className="md:h-full  mx-auto"
                    alt="Let's fill the login form "
                  />
                </div>
                {/* our main registration code  */}
                <div className="md:mx-10 pt-8 w-full  md:pt-36 px-10 md:px-32 md:w-1/2  ">
                  <p className="text-3xl md:text-5xl font-bold underline decoration-blue-600">
                    Login Form
                  </p>
                  <br />
                  <form onSubmit={handleSubmit}>
                    <div>
                      <label htmlFor="email">Email</label>
                      <input
                        type="text"
                        name="email"
                        value={user.email}
                        onChange={handleInput}
                        placeholder="Email"
                        className="p-2 my-4 w-full border-2 border-black rounded-lg"
                      />
                    </div>
                    <div>
                      <label htmlFor="password">Password</label>
                      <input
                        type="password"
                        name="password"
                        value={user.password}
                        onChange={handleInput}
                        className="p-2 my-4 w-full border-2 border-black rounded-lg "
                        placeholder="Password"
                      />
                    </div>
                    <br />
                    <div className="-mt-6">
                      <button
                        type="submit"
                        className="bg-blue-600  font-bold text-white rounded-lg h-8 w-20 md:w-1/2"
                      >
                        Login
                      </button>
                    </div>
                  </form>
                </div>
              </div>
        </main>
      </section>
    </div>
  );
};
