import LiquidButton from "../components/UI/LiquidButton";

interface IMainSection {
  hideMain: boolean;
}

const MainSection = ({ hideMain }: IMainSection) => {
  return (
    <section className="mainSection">
      <div className="dirty"></div>
      <div className="container">
        <div className={hideMain ? "content hide" : "content"}>
          <h1>
            Most flexible transaction monitoring for your compliance
            <span> needs</span>
          </h1>
          <LiquidButton />
        </div>
      </div>
    </section>
  );
};

export default MainSection;
