import github from 'img/github.png';

function Footer () {
    return (
        <div className="footer">
            <div className="link">
                <a href="https://github.com/v53-tier2-team-28/tree/main">
                    <img className="github" src={github}></img>
                    Chingu Voyage 47 Tier 2 Team 28 Repo
                </a>
                <ul>
                    <li><strong>Developer</strong></li>
                    <li>Erica C | <a href="https://github.com/chonger878">Github</a> | 
                    <a href="https://www.linkedin.com/in/charwaeericachong/">LinkedIn</a></li>
                    <li>Frosty/Laura | <a href="https://github.com/frosty8104">Github</a> | 
                    <a href="https://www.linkedin.com/in/laura-gieg-web-designer-dev/">LinkedIn</a></li>
                    <li>Bogdan Terzic | <a href="https://github.com/minorObsession">Github</a> | 
                    <a href="https://www.linkedin.com/in/bogdanterzic95/">LinkedIn</a></li>
                    <li><strong>Scrum Master</strong></li>
                    <li>Noelle Jefferson | <a href="https://github.com/Equillibria">Github</a> | 
                    <a href="https://www.linkedin.com/in/noelle-jefferson/">LinkedIn</a></li>
                    <li>Theresa Green | <a href="">Github</a> | <a href="">LinkedIn</a></li>
                </ul>
            </div>
        </div>
    )
}   