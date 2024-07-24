import { useState } from "react";
import {useNavigate} from "react-router-dom";
import { useAuth } from "../auth";
import { toast } from "react-toastify";
import REG_IMG from "../utilis/register.png"


export const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const navigate = useNavigate();
  const {storeTokenInLS, API} = useAuth();
  const URL = `${API}/api/auth/register`;

  // handling the input values  
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  // handle form on submit
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

    
    const res_data = await response.json();
    // console.log("res from server", res_data.extraDetails);

    if(response.ok) {
  
      // stored the token in localhost
      storeTokenInLS(res_data.token);
      //localStorage.setItem("token", res_data);
      setUser({username: "", email: "", phone: "", password: ""});
      toast.success("Registration Successful");
      navigate("/");
    } else {
      toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message );
    }
    } catch (error) {
      console.log("register", error);
    }
  };



  return (
    <>
      <section className="px-4 pb-10">
        <main>
          <div className="section-registration">
            <div className="flex md:flex-row flex-col">
              <div className="m-4 md:static ">
                <img
                  src={REG_IMG}
                  className="md:h-full  mx-auto"
                  alt="a nurse with a cute look"
                />
              </div>
              {/* our main registration code  */}
              <div className="md:mx-10 pt-10 md:pt-20 px-10 md:px-32 md:w-1/2 ">
                <h1 className="text-3xl md:text-5xl font-bold underline decoration-blue-600">Registration Form</h1>
                <br />
                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="username">Username</label>
                    <input
                      type="text"
                      name="username"
                      value={user.username}
                      onChange={handleInput}
                      className="p-2 my-4 w-full border-2 border-black rounded-lg"
                      placeholder="Username"
                    />
                  </div>
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
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="number"
                      name="phone"
                      value={user.phone}
                      onChange={handleInput}
                      placeholder="Phone Number"
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
                      placeholder="Password"
                      className="p-2 my-4 w-full border-2 border-black rounded-lg"
                    />
                  </div>
                  <br />
                  <button type="submit" 
                        className="bg-green-700 font-bold text-white rounded-lg h-8 w-20 md:w-1/2"
                        >
                    Register
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};