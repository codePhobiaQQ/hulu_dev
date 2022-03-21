import TopLine from "../UI/riscSection/TopLine";
import PlainLine from "../UI/riscSection/PlainLine";
import { useState } from "react";

interface IRiskElem {
  classing?: string;
  plainLine?: string;
  text: string;
  classMob?: string;
}

const RiskElem = ({ classing, plainLine, text, classMob }: IRiskElem) => {
  return (
    <div className={`riskBlock ${classMob ? classMob : ""}`}>
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
        <span>{text}</span>
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
        <div className={"active left"}>Data Mapping</div>
        <div className={"right"}>Rule Detail</div>
      </div>
    </div>
  );
};

export default RiskElem;
