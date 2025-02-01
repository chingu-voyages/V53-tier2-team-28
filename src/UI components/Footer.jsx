import github from "../assets/github.png";

function Footer() {
  return (
    // ! main container
    <div className=" bg-white max-h-[20vh]">
      <div className="link flex gap-2 justify-between">
        <a href="https://github.com/v53-tier2-team-28/tree/main">
          <img className="w-52" src={github} alt="GitHub" />
          Chingu Voyage 53 Tier 2 Team 28 Repo
        </a>
        <ul className="overflow-auto">
          <li className="text-black">
            <strong>Developer</strong>
          </li>
          <li className="text-black">
            Erica C | <a href="https://github.com/chonger878">Github</a> |
            <a href="https://www.linkedin.com/in/charwaeericachong/">
              LinkedIn
            </a>
          </li>
          <li className="text-black">
            Frosty/Laura | <a href="https://github.com/frosty8104">Github</a> |
            <a href="https://www.linkedin.com/in/laura-gieg-web-designer-dev/">
              LinkedIn
            </a>
          </li>
          <li className="text-black">
            Bogdan Terzic |{" "}
            <a href="https://github.com/minorObsession">Github</a> |
            <a href="https://www.linkedin.com/in/bogdanterzic95/">LinkedIn</a>
          </li>
          <li className="text-black">
            <strong>Scrum Master</strong>
          </li>
          <li className="text-black">
            Noelle Jefferson |{" "}
            <a href="https://github.com/Equillibria">Github</a> |
            <a href="https://www.linkedin.com/in/noelle-jefferson/">LinkedIn</a>
          </li>
          <li className="text-black">
            Theresa Green | <a href="https://github.com/Tegsy">Github</a> |
            <a href="https://www.linkedin.com/in/t-g-78b60b5/">LinkedIn</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
