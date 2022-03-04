import dmitor from "../public/assets/img/dmitor.jpg";
import lev from "../public/assets/img/lev.jpg";
import sergei from "../public/assets/img/sergei.jpg";
import TeamLeader from "../components/teamLeader";

const OurTeam = () => {
  return (
    <section id="OurTeam" className="OurTeamSection">
      <div className="triangle"></div>
      <div className="container">
        <h2>OUR TEAM</h2>
        <ul className={"teamLists"}>
          <TeamLeader
            text={
              "Professional Business Developer with Total 10+ years of Sales\n" +
              "              experience combined with 6+ years of Business Development\n" +
              "              experience having main expertise in creating efficient sales\n" +
              "              channels, new partner relationships, and acquiring clients from\n" +
              "              new undiscovered markets."
            }
            name={"Dmytro Medvid"}
            img={dmitor.src}
            link={"#"}
          />
          <TeamLeader
            text={
              "Professional Business Developer with Total 10+ years of Sales\n" +
              "              experience combined with 6+ years of Business Development\n" +
              "              experience having main expertise in creating efficient sales\n" +
              "              channels, new partner relationships, and acquiring clients from\n" +
              "              new undiscovered markets."
            }
            name={"Lev Bass"}
            img={lev.src}
            link={"#"}
          />
          <TeamLeader
            text={
              "Professional Business Developer with Total 10+ years of Sales\n" +
              "              experience combined with 6+ years of Business Development\n" +
              "              experience having main expertise in creating efficient sales\n" +
              "              channels, new partner relationships, and acquiring clients from\n" +
              "              new undiscovered markets."
            }
            name={"Sergii Balan"}
            img={sergei.src}
            link={"#"}
          />
        </ul>
      </div>
    </section>
  );
};

export default OurTeam;
