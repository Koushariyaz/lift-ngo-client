import { useEffect, useState } from "react";
import { useAuth } from "../auth";
import { toast } from "react-toastify";

export const AdminContacts = () => {
  const [contactData, setContactData] = useState([]);
  const { authorizationToken, API } = useAuth();

  const getContactsData = async () => {
    try {
      const response = await fetch(`${API}/api/admin/contacts`, {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      const data = await response.json();
      // console.log("contact data: ", data);
      if (response.ok) {
        setContactData(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // defining the function deleteContactById

  const deleteContactById = async (id) => {
    try {
      const response = await fetch(`${API}/api/admin/contacts/delete/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: authorizationToken,
        },
      });
      if (response.ok) {
        getContactsData();
        toast.success("deleted successfully");
      } else {
        toast.error("Not Deleted");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getContactsData();
  }, []);

  return (
    <>
      <section className="md:w-full w-[140%] -ml-14">
        <p className="text-3xl md:text-6xl font-bold text- white my-4 text-center">
          Admin Contact Data
        </p>
        <div className="bg-white my-4 rounded-lg text-black w-full">
          <div className=" text-xl font-serif  border-b-4 border-slate-600 w-full">
            <tr className="flex justify-between px-2 md:px-4 py-2">
              <th className="px-1 md:px-4 py-2 w-2/12">Name</th>
              <th className="px-1 md:px-4 py-2 w-3/12">Email</th>
              <th className="px-1 md:px-4 py-2 w-5/12">Message</th>
              <th className="px-1 md:px-4 py-2 w-2/12">Delete</th>
            </tr>
          </div>
          <div>
            {contactData.map((curContactData, index) => {
              const { username, email, phone, message, _id } = curContactData;
              return (
                <div
                  className="flex justify-between my-4 font-mono"
                  key={index}
                >
                  <p className="px-1 md:px-4 py-2 w-2/12">{username}</p>
                  <p className="px-2 md:px-4  w-3/12 py-2 break-words">{email}</p>
                  {/* {phone && (
                    <p className="px-2 md:px-4  w-2/12 py-2">{phone}</p>
                  )} */}
                  <p className="px-2 md:px-4  w-5/12  py-2">{message}</p>
                  <button
                    className="md:mr-4 w-2/12 mr-0  h-10 my-auto bg-red-600 md:w-[6rem] text-white border-2 rounded-lg p-1"
                    onClick={() => deleteContactById(_id)}
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
