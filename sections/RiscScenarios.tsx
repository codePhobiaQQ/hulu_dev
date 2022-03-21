import StartIcon from "../components/UI/StartIcon";
import TopLine from "../components/UI/riscSection/TopLine";
import RiskElem from "../components/riskSection/RiskElem";
import Finish from "../components/UI/riscSection/Finish";
import RightLine from "../components/riskSection/RightLine";
import LeftLine from "../components/riskSection/LeftLine";

const RiscScenarios = () => {
  return (
    <section id="Risk" className="RiscScenarios">
      <div className="container">
        <h2>RISK SCENARIOS</h2>
      </div>
      <div className="riskContainer">
        <div className="schemaWrapper">
          <div className="leftSide">
            <div className="startBtn">
              <RightLine />
              <StartIcon />
              <span>input</span>
              <div className="plainLine"></div>
              <TopLine classing={"topLine"} />
              <TopLine classing={"topLine second"} />
              <div className="startInner"></div>
            </div>
          </div>
          <div className="secondSide">
            <LeftLine />
            <RightLine />
            <RiskElem
              classMob={"mobi"}
              text={"Client_sorter_latest"}
              classing={"topLine"}
            />
            <RiskElem
              classMob={"mob"}
              text={"Loan_type_latest"}
              classing={"bottomLine"}
            />
            <div className="plainLine"></div>
          </div>
          <div className="thirdSide">
            <div className="thirdSideInner"></div>
            <RiskElem text={"Loan_sorter_latest"} plainLine={"plainLine"} />
          </div>
          <div className="finishSide">
            <div className="finishBtn">
              <Finish />
              <span>Output</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RiscScenarios;
