import PROFILE_PIC from "../assets/pp.jpg";
import { ABOUT_ME_DATA } from "../utils/data";

const About = () => {
  return (
    <section className="max-w-screen-xl px-6 mx-auto py-10 md:py-24" id="about">
      <h5 className="text-white text-2xl md:text-4xl font-semibold text-center md:text-left pb-10 md:pb-14">
        About Me
      </h5>
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4">
        <img
          src={PROFILE_PIC}
          className="w-full h-80 object-cover rounded-lg mb-4 md:mb-0"
          alt="profile"
        />
        <div className="col-span-2 bg-gradient-to-br from-blue-950 to-slate-900 rounded-lg border border-blue-800/40 p-6">
          <p className="text-blue-50 text-xs md:text-[13px] font-normal text-justify leading-6">
            {ABOUT_ME_DATA.background} {ABOUT_ME_DATA.introduction}{" "}
            {ABOUT_ME_DATA.interest}{" "}
          </p>
          <br />
          <p className="text-blue-50 text-xs md:text-[13px] font-normal text-justify leading-6">
            {ABOUT_ME_DATA.skills} {ABOUT_ME_DATA.projects}{" "}
            {ABOUT_ME_DATA.careerGoals}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
