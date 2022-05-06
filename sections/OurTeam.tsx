import dmitor from "../public/assets/img/dmitor.jpg";
import lev from "../public/assets/img/lev.jpg";
import sergei from "../public/assets/img/sergei.jpg";
import TeamLeader from "../components/teamLeader";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { BackUrl } from "../vars";

export interface TeamI {
  img: string;
  name: string;
  text: string;
  link: string;
}

const OurTeam = () => {
  const [scrollTop, setScrollTop] = useState<number>(0);
  const teamSection = useRef<HTMLElement>(null);
  const [sectionData, setSectionData] = useState<TeamI[]>([
    {
      name: "Lev",
      img: lev.src,
      text: "text",
      link: "https://google.com",
    },
    {
      name: "Lev",
      img: lev.src,
      text: "text",
      link: "https://google.com",
    },
    {
      name: "Lev",
      img: lev.src,
      text: "text",
      link: "https://google.com",
    },
  ]);

  const changeTop = () => {
    teamSection.current ? setScrollTop(teamSection.current.offsetTop) : null;
  };

  useEffect(() => {
    window.addEventListener("resize", changeTop);
    return () => window.removeEventListener("resize", changeTop);
  }, []);

  useEffect(() => {
    const takeData = async () => {
      const response = await axios.get(BackUrl + "/api/teams?populate=img");
      setSectionData(
        response.data.data.map((el: any) => {
          return {
            ...el.attributes,
            img: BackUrl + el.attributes.img.data.attributes.url,
          };
        })
      );
    };
    takeData();
  }, []);

  return (
    <section ref={teamSection} id="OurTeam" className="OurTeamSection">
      <div className="triangle"></div>
      <div className="container">
        <h2>OUR TEAM</h2>
        <ul className={"teamLists"}>
          <TeamLeader
            text={sectionData[0].text}
            name={sectionData[0].name}
            img={sectionData[0].img}
            link={sectionData[0].link}
            sectionOffset={scrollTop}
          />
          <TeamLeader
            text={sectionData[1].text}
            name={sectionData[1].name}
            img={sectionData[1].img}
            link={sectionData[1].link}
            sectionOffset={scrollTop}
          />
          <TeamLeader
            text={sectionData[2].text}
            name={sectionData[2].name}
            img={sectionData[2].img}
            link={sectionData[2].link}
            sectionOffset={scrollTop}
          />
        </ul>
      </div>
    </section>
  );
};

export default OurTeam;
