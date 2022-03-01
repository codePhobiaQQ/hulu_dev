import LiquidButton from "../components/UI/LiquidButton";

const MainSection = () => {
  return (
    <section className="mainSection">
      <div className="dirty"></div>
      <div className="container">
        <div className="content">
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
