import VISION_IMG from "../utilis/visionbg.png";
import ACHIEVEMENT_IMG from "../utilis/achievementbg.png";
import MISSION_IMG from "../utilis/missionbg.png";
import ROHAN_IMG from "../utilis/Rohan Anand.jpeg";
import ANKIT_IMG from "../utilis/Ankit Kumar.jpeg";

export const About = () => {
  return (
    <div className=" bg-blue-50 md:block flex flex-col justify-evenly">
      <div className="py-10 mx-2 ">
        <p className="text-center mb-[4rem] text-4xl md:text-6xl font-bold text-blue-600 ">
          ABOUT US
        </p>
        <div className="flex md:flex-row flex-col">
          <div className="md:w-5/12 group md:my-10 my-20">
            <div className="hover:scale-110 pb-20 duration-300 group-hover:bg-blue-600 group-hover:text-white border-2 bg-slate-200 mx-10 rounded-xl  p-2 h-full">
              <img
                src={MISSION_IMG}
                className="relative mx-auto -mt-[7rem] w-1/2 "
              ></img>
              <p className="text-2xl md:text-4xl group-hover:text-white   text-blue-600 font-bold text-center -mt-4 md:mt-16 mb-4">
                MISSION
              </p>
              <p className="font-normal md:text-lg text-center px-10 ">
                At LIFT (Learning Includes Everyone For Tomorrow), our mission
                is to ensure equal access to educational resources for all
                students. We believe that education is the key to unlocking
                potential and building a brighter future. We bridge the gap by
                providing essential resources like clothing, textbooks, and
                financial assistance, empowering underprivileged students to
                achieve their academic goals.
              </p>
            </div>
          </div>
          <div className="md:w-5/12 group  md:my-10 my-20">
            <div className="hover:scale-110 pb-20 duration-300 group-hover:bg-blue-600 group-hover:text-white border-2 bg-slate-200 mx-10 rounded-xl  p-2 h-full">
              <img
                src={VISION_IMG}
                className="relative mx-auto -mt-[7rem] w-1/2 "
              ></img>
              <p className="text-2xl md:text-4xl group-hover:text-white   text-blue-600 font-bold text-center -mt-4 md:mt-16 mb-4">
                VISSION
              </p>
              <p className="font-normal md:text-lg text-center px-10 ">
                LIFT envisions a future where every student, regardless of
                background or financial constraints, has the opportunity to
                thrive in education. We strive to create a world where access to
                resources is not a barrier to learning. Through continued growth
                and community support, LIFT aims to empower countless students
                and contribute to a brighter future for all.
              </p>
            </div>
          </div>
          <div className="md:w-5/12 group  md:my-10 my-20">
            <div className="hover:scale-110 pb-20 duration-300 group-hover:bg-blue-600 group-hover:text-white border-2 bg-slate-200 mx-10 rounded-xl  p-2 h-full">
              <img
                src={ACHIEVEMENT_IMG}
                className="relative mx-auto  -mt-[7rem] w-1/2 "
              ></img>
              <p className="text-2xl md:text-4xl group-hover:text-white   text-blue-600 font-bold text-center -mt-4 md:mt-16 mb-4">
                ACHIEVEMENT
              </p>
              <p className="font-normal md:text-lg text-center  px-10">
                LIFT is making a tangible difference. In just one year, we've
                directly supported 10 students with financial aid and
                educational resources. Additionally, our clothing and book
                drives have resulted in the distribution of over 200 items,
                ensuring students have proper attire and essential learning
                materials. These achievements represent a significant step
                towards our vision of educational equity.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <p className="text-center mb-[2rem] text-4xl md:text-6xl font-bold text-blue-600 ">
          TESTIMONIALS
        </p>
        <div className="w-full">
          <div className="border-2 bg-slate-200 mx-auto rounded-xl  p-2  w-11/12 my-10">
            <img
              src={ROHAN_IMG}
              className="rounded-full h-[7rem] w-[7rem] mx-auto my-2"
            ></img>
            <p className="my-4 font-mono">
              "I am writing to express my heartfelt appreciation for the
              incredible impact the Prayas-75 Scholarship (Jubilee Batch
              Scholarship-2023) has had on my academic journey. Being a
              recipient of this scholarship has not only alleviated financial
              burdens but has also empowered me to pursue my educational goals
              with unwavering focus and determination. The financial support
              provided by the aluminus of 1975 Batch has allowed me to dedicate
              more time to my studies and extracurricular activities, enhancing
              my overall college experience. Finally, I want to extend my
              deepest gratitude to the contributor's of Prayas-75 Batch
              Scholarship for investing in my education and for being a catalyst
              for positive change in the lives of students."
            </p>
            <p className="font-bold md:text-lg text-end">
              Rohan Anand (Civil 2k19)
            </p>
          </div>
          <div className="border-2 bg-slate-200 mx-auto rounded-xl  p-2 w-11/12 my-10">
            <img
              src={ANKIT_IMG}
              className="rounded-full h-[7rem] w-[7rem] mx-auto my-2"
            ></img>
            <p className="my-4 font-mono">
              "I am immensely grateful for the scholarship awarded by Prayas 75.
              This scholarship has not only provided solution for financial
              strain of my education but has also inspired me. Our alumini in
              Prayas 75 have broadened my perspective and enhanced my
              understanding of the impact individuals and organizations can have
              on shaping the future. Thank you for making a significant
              difference in my academic journey and for being a crucial part of
              my educational success."
            </p>
            <p className="font-bold md:text-lg text-end">
              Ankit Kumar (IT 2K19)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
