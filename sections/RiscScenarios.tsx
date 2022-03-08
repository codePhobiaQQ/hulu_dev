import StartIcon from "../components/UI/StartIcon";
import TopLine from "../components/UI/riscSection/TopLine";
import RiskElem from "../components/riskSection/RiskElem";
import Finish from "../components/UI/riscSection/Finish";

const RiscScenarios = () => {
  return (
    <section className="RiscScenarios">
      <div className="container">
        <h2>RISK SCENARIOS</h2>
        <div className="riskContainer">
          <div className="schemaWrapper">
            <div className="leftSide">
              <div className="startBtn">
                <StartIcon />
                <span>input</span>
                <TopLine classing={"topLine"} />
                <TopLine classing={"topLine second"} />
              </div>
            </div>
            <div className="secondSide">
              <RiskElem classing={"topLine"} />
              <RiskElem classing={"bottomLine"} />
            </div>
            <div className="thirdSide">
              <RiskElem plainLine={"plainLine"} />
            </div>
            <div className="finishSide">
              <div className="finishBtn">
                <Finish />
                <span>Output</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RiscScenarios;
