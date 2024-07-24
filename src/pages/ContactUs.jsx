import { useState } from "react";
import { useAuth } from "../auth";
import { toast } from "react-toastify";

const defaultContactFormData = {
  username: "",
  email: "",
  phone: "",
  message: "",
};

export const ContactUs = () => {
  const [data, setData] = useState(defaultContactFormData);
  const [userData, setUserData] = useState(true);
  const { user, API } = useAuth();


  if (userData && user) {
    setData({
      username: user.username,
      email: user.email,
      phone: user.phone,
      message: "",
    });
    setUserData(false);
  }

  const handleContactForm = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API}/api/form/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      // console.log("response: ", response);
      // alert(response);

      if (response.ok) {
        setData(defaultContactFormData);
        const responseData = await response.json();
        // console.log(responseData);
        // console.log(responseData);
        toast.success("Message Sent Successfully");
      } else {
        // Handle API error here
        toast.error("Message Not Sent");
        console.error("API Error:", response.status, response.statusText);
      }
    } catch (error) {
      console.error(error);
    }
  };

  // lets tackle our handleInput
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setData({
      ...data,
      [name]: value,
    });
  };
  return (
    <div className="bg-blue-50 py-6">
      <div className="flex">
        <form
          onSubmit={handleContactForm}
          className="w-5/6 border-4 md:w-1/2 p-12 right-0 left-0  bg-white mx-auto my-10 rounded-lg"
        >
          <p className="font-bold text-xl">GET IN TOUCH</p>
          <input
            type="text"
            name="username"
            id="username"
            autoComplete="off"
            className="p-2 my-4 w-full  bg-slate-100 border-2 border-black rounded-lg"
            placeholder="Your Name*"
            onChange={handleInput}
            required
          />
          <input
            type="email"
            name="email"
            id="email"
            autoComplete="off"
            className="p-2 my-4 w-full  bg-slate-100 border-2 border-black rounded-lg"
            placeholder="Email*"
            onChange={handleInput}
            required
          />
          <input
            type="text"
            className="p-2 my-4 w-full  bg-slate-100 border-2  border-black rounded-lg"
            placeholder="Phone no.*"
            required
          />
          <textarea
            className="p-2 my-4 w-full bg-slate-100 border-2 border-black rounded-lg"
            placeholder="Description*"
            name="message"
            id="message"
            autoComplete="off"
            onChange={handleInput}
            required
            cols="30"
            rows="6"
          ></textarea>
          <button className="md:ml-64 mx-32 p-2 md:p-0  bg-blue-800 font-bold text-white md:w-2/12 w-4/12  md:h-8 rounded-3xl">
            Submit
          </button>
        </form>
      </div>

      <div className="ml-4 font-serif">
        {/* <button className="close-btn">&times;</button> */}
        <p>
          Thank you for reaching to us.
          <br />
          We would be contacting you soon.
        </p>
      </div>
    </div>
  );
};