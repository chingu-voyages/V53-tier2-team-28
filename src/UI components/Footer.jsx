import github from "../assets/github.png";

function Footer() {
  // * NOTES:
  // * footer to be fixed at the bottom of the HOMEPAGE otherwise it will be at the bottom of the page but need to scroll down to see it
  return (
    // ! main container
    <footer className=" bg-background w-full p-4 px-8 ">
      <div className=" flex flex-wrap gap-4 justify-between items-center">
        {/* Left section: GitHub Link */}
        <a
          href="https://github.com/chingu-voyages/v53-tier2-team-28"
          className="flex items-center space-x-2 w-full sm:w-auto"
        >
          <img className="w-24" src={github} alt="GitHub" />
          <span>Chingu Voyage 53 Tier 2 Team 28 Repo</span>
        </a>

        {/* Right section: peoples' info list */}
        <div className="flex gap-4 w-full sm:w-auto flex-wrap">
          {/* Developer section */}
          <ul className="text-left w-full sm:w-auto">
            <li className="text-textColor">
              <strong>Developers</strong>
            </li>
            <li className="text-textColor">
              Bogdan Terzic |{" "}
              <a href="https://github.com/minorObsession" className="underline">
                GitHub
              </a>{" "}
              |{" "}
              <a
                href="https://www.linkedin.com/in/bogdanterzic95/"
                className="underline"
              >
                LinkedIn
              </a>
            </li>
            <li className="text-textColor">
              Erica C |{" "}
              <a href="https://github.com/chonger878" className="underline">
                GitHub
              </a>{" "}
              |{" "}
              <a
                href="https://www.linkedin.com/in/charwaeericachong/"
                className="underline"
              >
                LinkedIn
              </a>
            </li>
            <li className="text-textColor">
              Frosty/Laura |{" "}
              <a href="https://github.com/frosty8104" className="underline">
                GitHub
              </a>{" "}
              |{" "}
              <a
                href="https://www.linkedin.com/in/laura-gieg-web-designer-dev/"
                className="underline"
              >
                LinkedIn
              </a>
            </li>
          </ul>

          {/* Scrum Master section */}
          <ul className="text-left w-full sm:w-auto">
            <li className="text-textColor">
              <strong>Scrum Masters</strong>
            </li>
            <li className="text-textColor">
              Noelle Jefferson |{" "}
              <a href="https://github.com/Equillibria" className="underline">
                GitHub
              </a>{" "}
              |{" "}
              <a
                href="https://www.linkedin.com/in/noelle-jefferson/"
                className="underline"
              >
                LinkedIn
              </a>
            </li>
            <li className="text-textColor">
              Theresa Green |{" "}
              <a href="https://github.com/Tegsy" className="underline">
                GitHub
              </a>{" "}
              |{" "}
              <a
                href="https://www.linkedin.com/in/t-g-78b60b5/"
                className="underline"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
