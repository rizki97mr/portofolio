import { EDUCATION } from "../utils/data";

const Education = () => {
  return (
    <section
      className="max-w-screen-xl mx-auto pb-0 md:pb-20 px-6 md:px-20 relative"
      id="education"
    >
      <h5 className="text-white text-2xl md:text-3xl font-semibold text-center pb-14 md:pb-4">
        Education
      </h5>
      {EDUCATION.map((item, index) => (
        <EducationCard
          key={item.id}
          index={index}
          institution={item.institution}
          degree={item.degree}
          major={item.major}
          year={item.year}
        />
      ))}
    </section>
  );
};

// eslint-disable-next-line react/prop-types
const EducationCard = ({ degree, institution, year, major, index, isLast }) => {
  return (
    <div className="relative mt-4">
      <div
        className={`hidden md:block h-[140px]  
        ${index > 0 ? "min-w-96 " : "ml-auto w-40"}
        ${isLast ? "w-40 mr-auto" : ""}`}
      />
      {/* {!isLast && (
        <div className="hidden md:block min-w-96 h-[140px] border-r border-b border-blue-500 border-dashed" />
      )} */}
      <div className="bg-gradient-to-br from-blue-950 to-slate-900 rounded-lg border border-blue-800/40 p-6 mx-0 md:mx-10 md:absolute top-[70px] mb-6 md:mb-0">
        <div className="flex items-center justify-between flex-1">
          <div>
            <p className="text-white text-[13.5px] md:text-base font-medium leading-4 md:leading-5">
              {degree}
            </p>
            <span className="text-blue-400 text-xs">{institution}</span>
          </div>
          <div className="text-sky-200 text-[11px] md:text-xs font-medium bg-blue-950 rounded border border-blue-700/50 border-dashed px-4 ml-10 py-2 justify-center items-center">
            {year}
          </div>
        </div>
        <p className="text-blue-50 text-xs font-normal leading-5 mt-5">
          {major}
        </p>
      </div>
    </div>
  );
};

export default Education;
