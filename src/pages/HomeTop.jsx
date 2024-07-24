import IMAGE from "../utilis/featured photo.png";
export const HomeTop = () =>{
    return (<div>
        <div className="flex md:flex-row flex-col-reverse justify-between bg-white">
        <div className="md:align-middle mb-4 md:mb-0  md:w-5/12 mt-16  md:mt-48 p-2 md:m-4 md:p-4">
          <div className="font-bold">
            <p className="text-5xl md:text-7xl">
              Get <span className="text-blue-700">Full</span> <br />
              <span className="text-blue-700">Scholarship </span>
              <br />
              With Us
            </p>
          </div>
          <div>
            <p className="font-medium text-xl md:text-2xl">
              Get your scholarship* from Prayas 75 to cover <br />
              complete college tuition fees and be a part <br />
              of advancing education around the world. <br />
              <span className="font-serif text-sm">Conditions Apply*</span>
            </p>
          </div>
        </div>
        <div className="md:w-10/12 bg-transparent">
          <img  className="h-full w-full" src={IMAGE}></img>
        </div>
      </div>
    </div>)

}