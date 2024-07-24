import { useState, useEffect } from "react";
import { useAuth } from "../auth";
import { Link } from "react-router-dom";

export const AdminUsers = () => {
  const [users, setUsers] = useState([]);

  const { authorizationToken, API } = useAuth();

  const getAllUsersData = async () => {
    try {
      const response = await fetch(`${API}/api/admin/users`, {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      const data = await response.json();
      // console.log(`users ${data}`);
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  // delete the user on delete button
  const deleteUser = async (id) => {
    try {
      const response = await fetch(`${API}/api/admin/users/delete/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: authorizationToken,
        },
      });
      const data = await response.json();
      // console.log(`users after delete: ${data}`);

      if (response.ok) {
        getAllUsersData();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllUsersData();
  }, []);
  return (
    <>
      <section className="md:w-full w-[142%] -ml-14">
        <p className="text-3xl md:text-6xl font-bold text- white my-4 text-center">
          Admin Users Data
        </p>
        <div className="bg-white my-4 rounded-lg text-black w-full">
          <div className=" text-xl font-serif  border-b-4 border-slate-600 w-full">
            <tr className="flex justify-between px-2 md:px-4 py-2">
              <th className="px-2 md:px-4 py-2 ">Name</th>
              <th className="px-2 md:px-4 py-2 w-2/12 ">Email</th>
              <th className=" md:block hidden px-2 md:px-4 py-2 md:ml-20 md:-mr-32 ">Phone</th>
              <th className="px-2 md:px-4 py-2 md:ml-20">Edit</th>
              <th className="px-2 md:px-4 py-2 md:-mr-5">Delete</th>
            </tr>
          </div>
          <div>
            {users.map((curUser, index) => {
              const { username, email, phone,  _id } = curUser;
              return (
                <div
                  className="flex justify-between my-4 font-mono"
                  key={index}
                >
                  <p className="px-1 md:px-4 py-2 w-2/12">{username}</p>
                  <p className="px-1 md:px-4 w-2/12 md:w-3/12 py-2">{email}</p>
                  <p className="md:block hidden px-1 md:px-4w-2/12 text-start py-2">{phone}</p>
                  <Link to={`/admin/users/${_id}/edit`}>
                    <button 
                    className="bg-blue-600 md:ml-0 ml-24 w-[3rem] md:w-[6rem] text-white border-2 rounded-lg p-1">
                      Edit
                    </button>
                  </Link>
                  <button
                    className="md:mr-4  h-10 my-auto bg-red-600 w-[4rem] md:w-[6rem] text-white border-2 rounded-lg p-1"
                    onClick={() => deleteUser(_id)}
                  >
                    Delete
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
