import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../auth";
import { toast } from "react-toastify";

export const AdminUpdate = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isAdmin, setIsAdmin] = useState("");
  const [isBlue, setIsBlue] = useState("");
  const [isGold, setIsGold] = useState("");

  const params = useParams();
  // console.log("params single user ", params);
  const { authorizationToken, API } = useAuth();

  // get single user data
  const getSingleUserData = async () => {
    try {
      const response = await fetch(`${API}/api/admin/users/${params.id}`, {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      const data = await response.json();
      // console.log(`users single data: ${data}`);
      // console.log(data);
      setUsername(data.username);
      setEmail(data.email);
      setPhone(data.phone);
      setIsAdmin(data.isAdmin);
      setIsBlue(data.isBlue);
      setIsGold(data.isGold);
      // if (response.ok) {
      //     getAllUsersData();
      // }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleUserData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${API}/api/admin/users/update/${params.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: authorizationToken,
          },
          body: JSON.stringify({
            username,
            email,
            phone,
            isAdmin,
            isBlue,
            isGold,
          }),
        }
      );
      if (response.ok) {
        toast.success("Updated Successfully");
      } else {
        toast.error("Not Updated");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className="section-contact -ml-12 md:ml-0">
      <div className="contact-content container">
        <p className="text-3xl md:text-6xl font-bold text- white">Update User Data</p>
      </div>
      {/* contact page main  */}
      <div className="">
        {/* contact form content actual  */}
        <section className="section-form">
          <form onSubmit={handleSubmit}>
            <div className="mt-8 mb-4">
              <label htmlFor="username">
                <span className="pt-10 pb-2 text-lg">Username</span>
              </label>
              <input
                className="p-2 my-2 mx-4 text-blue-600 font-bold font-mono  border-2 border-black rounded-lg"
                type="text"
                name="username"
                id="username"
                autoComplete="off"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            <div>
              <label htmlFor="email">
                <span className="pt-10 pb-2 text-lg">Email</span>
              </label>
              <input
                className="p-2 my-2 mx-4 text-blue-600 font-bold font-mono  border-2 border-black rounded-lg"
                type="email"
                name="email"
                id="email"
                autoComplete="off"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label htmlFor="phone">
                <span className="pt-10 pb-2 text-lg">Mobile</span>
              </label>
              <input
                className="p-2 my-2 mx-4 text-blue-600 font-bold font-mono  border-2 border-black rounded-lg"
                type="tel"
                name="phone"
                id="phone"
                autoComplete="off"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <div className="pt-4">
              <span className="pt-10 pb-2 text-lg">User Level : </span>
              <div className="flex ">
                <div className="form-control  -mx-2 md:mx-0">
                  <label className="label cursor-pointer  text-white pt-10 pb-2 text-lg">
                    Admin
                    <input
                      type="radio"
                      name="radio-10"
                      className="radio span mx-1 md:mx-2 bg-white checked:bg-red-500"
                      checked={isAdmin}
                      onChange={() => {
                        setIsGold(false)
                        setIsBlue(false)
                        setIsAdmin(true)
                      }}                    />
                  </label>
                </div>
                <div className="form-control  mx-2 md:mx-8">
                  <label className="label cursor-pointer  text-white pt-10 pb-2 text-lg">
                    Gold
                    <input
                      type="radio"
                      name="radio-10"
                      className="radio mx-1 md:mx-2 bg-white  checked:bg-yellow-500"
                      checked={isGold}
                      onChange={() => {
                        setIsGold(true)
                        setIsBlue(false)
                        setIsAdmin(false)
                      }}
                    />
                  </label>
                </div>
                <div className="form-control -mx-2 md:mx-0">
                  <label className="label mx-8 cursor-pointer  text-white pt-10 pb-2 text-lg">
                    Blue
                    <input
                      type="radio"
                      name="radio-10"
                      className="radio mx-1 md:mx-2 bg-white checked:bg-blue-500"
                      checked={isBlue}
                      onChange={() => {
                        setIsGold(false)
                        setIsBlue(true)
                        setIsAdmin(false)
                      }}/>
                  </label>
                </div>
                <div className="form-control ">
                  <label className="label cursor-pointer  text-white pt-10 pb-2 text-lg">
                    Silver
                    <input
                      type="radio"
                      name="radio-10"
                      className="radio span mx-1 md:mx-2 bg-white checked:bg-slate-400"
                      checked={!isAdmin && !isBlue && !isGold}
                      onChange={() => {
                        setIsGold(false)
                        setIsBlue(false)
                        setIsAdmin(false)
                      }}                    />
                  </label>
                </div>
              </div>
            </div>

            <div className="py-4 px-20 mx-auto">
              <button
                className="bg-green-600 w-[6rem] text-white border-2 rounded-lg p-1"
                type="submit"
              >
                Update
              </button>
            </div>
          </form>
        </section>
      </div>
    </section>
  );
};
