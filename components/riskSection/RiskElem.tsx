import TopLine from "../UI/riscSection/TopLine";
import PlainLine from "../UI/riscSection/PlainLine";
import { useState } from "react";

interface IRiskElem {
  classing?: string;
  plainLine?: string;
}

const RiskElem = ({ classing, plainLine }: IRiskElem) => {
  const [whatActive, setWhatActive] = useState<number>(1);

  return (
    <div className="riskBlock">
      {classing && <TopLine classing={classing} />}
      {plainLine && <PlainLine classing={plainLine} />}
      <div className="riskInner"></div>
      <span className="showData">Show data</span>
      <div className="field">
        <h4>RULE</h4>
        <span>Clients</span>
      </div>
      <div className="field">
        <h4>VARIABLE</h4>
        <span>Client_sorter_latest</span>
      </div>
      <div className="fieldWrap">
        <div className="field">
          <h4>TYPE</h4>
          <span>Decision Table</span>
        </div>
        <div className="field">
          <h4>VERSION</h4>
          <span>Latest</span>
        </div>
      </div>
      <div className="buttonsWrap">
        <div
          onClick={() => setWhatActive(1)}
          className={whatActive == 1 ? "active left" : "left"}
        >
          Data Mapping
        </div>
        <div
          onClick={() => setWhatActive(2)}
          className={whatActive == 2 ? "right active" : "right"}
        >
          Rule Detail
        </div>
      </div>
    </div>
  );
};

export default RiskElem;
