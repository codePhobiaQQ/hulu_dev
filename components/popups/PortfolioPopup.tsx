import { Dispatch, SetStateAction } from "react";
import Close from "../UI/Close";

interface IPortfolioPopup {
  portfolioOpen: boolean;
  setPortfolioOpen: Dispatch<SetStateAction<boolean>>;
}

const PortfolioPopup = ({
  portfolioOpen,
  setPortfolioOpen,
}: IPortfolioPopup) => {
  return (
    <div className={`PortfolioPopup ${portfolioOpen ? "active" : ""}`}>
      <div className="close" onClick={() => setPortfolioOpen(false)}>
        <Close />
      </div>
      <div className="container">portfolio</div>
    </div>
  );
};

export default PortfolioPopup;
