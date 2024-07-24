// eslint-disable-next-line react/prop-types
const MobileNavbar = ({ isOpen, setIsMenuOpen }) => {
  const handleScroll = (selectionId) => {
    if (isOpen) setIsMenuOpen(false);
    document.getElementById(selectionId).scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="w-screen fixed top-0 z-20">
      <div className="w-1/2 h-screen flex flex-col p-8 bg-background">
        <div className="ui-circle -ml-20 -m-10" />
        <ul>
          <li className="mb-5">
            <a className="menu-item" onClick={() => handleScroll("hero")}>
              Home
            </a>
          </li>
          <li className="mb-5">
            <a className="menu-item" onClick={() => handleScroll("skills")}>
              Skills
            </a>
          </li>
          <li className="mb-5">
            <a className="menu-item" onClick={() => handleScroll("education")}>
              Education
            </a>
          </li>
          <li className="mb-5">
            <a className="menu-item" onClick={() => handleScroll("about")}>
              About Me
            </a>
          </li>
          <li className="mb-5">
            <a className="menu-item" onClick={() => handleScroll("hero")}>
              Home
            </a>
          </li>
        </ul>
        <button
          className="h-10 bg-primary text-white text-xs md:text-sm px-6 rounded hover:bg-blue-200 hover:text-primary md:block"
          onClick={() => handleScroll("contact")}
        >
          Contact Us
        </button>
      </div>
      <div
        onClick={() => {
          setIsMenuOpen(false);
        }}
        className="w-screen h-screen bg-overLayBg fixed top-0 -z-10"
      />
    </div>
  );
};

export default MobileNavbar;
