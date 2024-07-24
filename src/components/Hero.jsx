import { PROFILE_DATA } from "../utils/data";
import PROFILE_PIC from "../assets/photo.jpeg";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FiMail } from "react-icons/fi";
import {
  FaGithub,
  FaGithubSquare,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-scroll";

const Hero = () => {
  const { name, jobtitle, bio, email, location, github, skills } = PROFILE_DATA;
  return (
    <section
      className="flex flex-col max-w-screen-xl px-6 pt-16 pb-20 mx-auto gap-14 md:flex-row md:items-center md:pt-28"
      id="hero"
    >
      <div className="flex-1 text-center md:text-left z-[1]">
        <span className="text-xs text-blue-200 font-sm md:text-sm">
          Web Developer
        </span>
        <h2 className="mt-3 text-3xl md:text-5xl md:mt-5">{name}</h2>
        <p className="w-full text-xs font-medium text-neutral-50 leading-5 my-6 lg:w-[38vw] md:text-xl md:leading-6 md:my-8">
          {bio}
        </p>
        <Link Link to="contact" smooth spy offset={-80}>
          {" "}
          <button className="primary-btn">Contact Me</button>
        </Link>
      </div>
      <div className="flex gap-2 justify-center md:gap-3 lg:gap:5 z-[1]">
        <div className="w-[403px] bg-gradient-to-br from-blue-950 to-slate-900 rounded-lg border border-blue-950 p-6">
          <div className="flex items-center justify-center">
            <img className="hero-img" src={PROFILE_PIC} alt="img one" />
          </div>
          <div className="p-4 mt-3 text-center rounded-md bg-cardbg">
            <h5 className="text-sm text-white md:text-base">{name}</h5>
            <p className="mt-1 text-xs text-slate-500 md:font-medium">
              {jobtitle}
            </p>
            <div className="flex items-center justify-center gap-2 mt-1 text-xs text-slate-500">
              <HiOutlineLocationMarker />
              <p className="font-medium">{location}</p>
            </div>
          </div>
          <InfoTile
            icon={
              <FiMail size={20} className="text-sky-400 hover:select-all" />
            }
            text={email}
          />

          <InfoTile
            icon={<FaGithubSquare size={20} className="text-sky-400" />}
            text={github}
          />

          <div className="flex flex-wrap items-center gap-2 my-3">
            {skills.map((skill) => (
              <div
                key={skill.id}
                className="text-[11px] bg-blue-800/30 rounded md:text-xs px-3 py-1"
              >
                {skill}
                {/* <img src={skill.icon} alt={skill.title} />
                <p className="text-xs font-medium md:text-sm">{skill.title}</p> */}
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <div className="p-2 rounded bg-blue-800/30">
              <a href="https://github.com/rizki97mr">
                <FaGithub className="text-lg md:text-xl" />
              </a>
            </div>
            <div className="p-2 rounded bg-blue-800/30">
              <FaInstagram className="text-lg md:text-xl" />
            </div>
            <div className="p-2 rounded bg-blue-800/30">
              <a href="https://wa.me/087708454955">
                <FaWhatsapp className="text-lg md:text-xl" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="absolute ui-circle top-6 md:top-10 -left-10 md:left-0"></div> */}
    </section>
  );
};

// eslint-disable-next-line react/prop-types
const InfoTile = ({ icon, text }) => {
  return (
    <div className="flex items-center gap-4 p-4 mt-3 rounded-md bg-cardbg">
      {icon}
      <h4 className="text-xs font-normal md:text-sm">{text}</h4>
    </div>
  );
};

export default Hero;
