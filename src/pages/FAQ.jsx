export const FAQ = () => {
  return (
    <div className="p-4 bg-blue-50  pb-20 md:pb-40">
      <div className="my-16 mt-4 mb-40]">
        <p className="text-4xl md:text-6xl font-bold  text-center  text-blue-600">
          Frequently Asked Questions
        </p>
        <p className="my-10 text-center md:text-lg font-medium">
          Please reach out to us, if you cannot find satisfactory answer to your
          question.
        </p>
      </div>
      <div className="">
        <div className="join join-vertical md:mx-80">
          <div className="collapse collapse-arrow join-item">
            <input type="radio" name="my-accordion-4" defaultChecked />
            <div className="collapse-title text-lg md:text-2xl font-bold ">
              How do students receive financial assistance?
            </div>
            <div className="collapse-content">
              <p className="font-normal">
                We have a transparent process where students in need can apply
                for direct financial aid to cover educational expenses.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item">
            <input type="radio" name="my-accordion-4" defaultChecked />
            <div className="collapse-title text-lg md:text-2xl font-bold ">
              What kind of clothing do you accept?
            </div>
            <div className="collapse-content">
              <p className="font-normal">
                We accept gently used clothing suitable for students of all
                ages.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item">
            <input type="radio" name="my-accordion-4" defaultChecked />
            <div className="collapse-title text-lg md:text-2xl font-bold ">
              How do you ensure the food items reach those who need them?
            </div>
            <div className="collapse-content">
              <p className="font-normal">
                We collaborate with local organizations to distribute food
                donations efficiently to those facing food insecurity.
              </p>
            </div>
          </div>

          <div className="collapse collapse-arrow join-item">
            <input type="radio" name="my-accordion-4" defaultChecked />
            <div className="collapse-title text-lg md:text-2xl font-bold ">
              Is LIFT a registered non-profit organization?
            </div>
            <div className="collapse-content">
              <p className="font-normal">
                Yes, LIFT is a registered non-profit organization. You can find
                our registration details on our "About Us" section.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item">
            <input type="radio" name="my-accordion-4" defaultChecked />
            <div className="collapse-title text-lg md:text-2xl font-bold ">
              What happens to donated clothing and food items?
            </div>
            <div className="collapse-content">
              <p className="font-normal">
                LIFT collaborates with local underprivileged communities to
                ensure donated clothing reaches those in need. We partner with
                reputable organizations for efficient food distribution to
                address food insecurity.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item">
            <input type="radio" name="my-accordion-4" defaultChecked />
            <div className="collapse-title text-lg md:text-2xl font-bold ">
              Who is eligible to receive resources from LIFT?{" "}
            </div>
            <div className="collapse-content">
              <p className="font-normal">
                LIFT prioritizes underprivileged students facing financial
                hardship and struggling to access essential educational
                resources. We work with local organizations to identify students
                in need.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
