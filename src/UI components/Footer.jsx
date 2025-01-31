import github from "./img/github.png";

function Footer() {
  return (
    <div className="bg-white">
      <div className="link">
        <a href="https://github.com/v53-tier2-team-28/tree/main">
          <img className="" src={github}></img>
          Chingu Voyage 47 Tier 2 Team 28 Repo
        </a>
        <ul>
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
            Theresa Green | <a href="">Github</a> | <a href="">LinkedIn</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
