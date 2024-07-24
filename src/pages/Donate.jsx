export const Donate = () => {
  return (
    <div className="p-4 bg-blue-50">
      <div className="rounded-lg shadow-xl border-2 md:w-1/2 mx-auto p-10">
        <div>
          <p className="py-10 text-xl md:text-3xl font-bold text-center">Thank You</p>
          <p className="font-serif py-4">
            We appreciate your thoughtfulness in helping poor deserving students
            of BIT Sindri. To proceed with the payment, kindly transfer the
            funds to the following account :-
          </p>
          <p className="py-4 text-center font-medium text-lg underline">
            Organization Account Details
          </p>
          <p className="text-white mx-auto bg-blue-800 text-center font-bold  py-2 my-4 rounded-lg w-7/12">
            Account Number: 242601000895
          </p>
          <p className="text-white mx-auto bg-blue-800 text-center font-bold  py-2 my-4 rounded-lg w-7/12">
            IFSC Code: ICIC0002426
          </p>
          <p className="text-white mx-auto bg-blue-800 text-center font-bold  py-2 my-4 rounded-lg w-7/12">
            Bank: ICICI BANK LIMITED
          </p>
          <p className="text-white mx-auto bg-blue-800 text-center  font-bold  py-2 my-4 rounded-lg w-7/12">
            Account Holder Name: SUJIT KUMAR MITRA
          </p>
        </div>
      </div>

      <div className="rounded-lg shadow-xl border-2 md:w-1/2 mx-auto p-10 my-10">
        <form className="">
          <p className="font-serif py-4 text-center">
            If you encounter any issues with making payments, Please fill in the
            following information and we will reach out to you for payment
            arrangement. Thank you again.
          </p>
          <input
            type="text"
            className="p-2 my-4 w-full  bg-slate-100 border-2  border-black rounded-lg"
            placeholder="Your Name*"
            required
          />
          <input
            type="email"
            className="p-2 my-4 w-full  bg-slate-100 border-2  border-black rounded-lg"
            placeholder="Email*"
            required
          />
          <input
            type="text"
            className="p-2 my-4 w-full  bg-slate-100 border-2  border-black rounded-lg"
            placeholder="Phone no.*"
            required
          />
          <span>
            <div className="form-control">
              <label className="cursor-pointer label">
                <input
                  type="checkbox"
                  defaultChecked
                  className="checkbox checkbox-success"
                />
                <span className="label-text text-lg">
                  Do you receive WhatsApp messages on this number?
                </span>
              </label>
            </div>
          </span>
          <input
            type="text"
            className="p-2 my-4 w-full  bg-slate-100 border-2  border-black rounded-lg"
            placeholder="Country code*"
            required
          />
          <input
            type="text"
            className="p-2 my-4 w-full  bg-slate-100 border-2  border-black rounded-lg"
            placeholder="Amount*"
            required
          />
          <button className="md:mx-[15rem] mx-[10rem] h-12 md:h-10 bg-blue-800 font-bold text-white md:w-3/12 w-4/12 rounded-3xl">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};
