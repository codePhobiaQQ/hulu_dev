import Image from "next/image";
import { motion } from "framer-motion";
import { fadeFromLeft } from "./../../motions/DashBoard.motion";
import Jane from "./../../public/assets/img/dashboard/Jane.jpg";
import col1 from "./../../public/assets/img/dashboard/1.png";
import col2 from "./../../public/assets/img/dashboard/2.png";
import col3 from "./../../public/assets/img/dashboard/3.png";
import col4 from "./../../public/assets/img/dashboard/4.png";
import Circles from "./../../public/assets/img/dashboard/circles.png";

const ScreeningMonitor = () => {
  const listTable = [...Array(16)];
  return (
    <motion.div
      variants={fadeFromLeft}
      custom={{ delaying: 0.8, xing: 0 }}
      className={"screeningMonitor"}
    >
      <motion.div
        variants={fadeFromLeft}
        custom={{ delaying: 0.9, xing: 0 }}
        className="topi"
      >
        <div className="circles">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
      </motion.div>
      <div className="contenti">
        <div className="infoLine">
          <div className="leftSide">
            <motion.div
              variants={fadeFromLeft}
              custom={{ delaying: 1, xing: 0 }}
              className="imgWrap"
            >
              <Image
                src={Jane.src}
                width={84}
                height={84}
                objectFit={"contain"}
                alt={"who"}
              />
            </motion.div>
            <div className="leftSideContent">
              <motion.h3
                variants={fadeFromLeft}
                custom={{ delaying: 1.1, xing: 0, ying: 10 }}
              >
                Customer
              </motion.h3>
              <motion.span
                variants={fadeFromLeft}
                custom={{ delaying: 1.2, xing: 0, ying: 10 }}
              >
                Jane Doe
              </motion.span>
            </div>
          </div>
          <div className="rightSide">
            <motion.span
              variants={fadeFromLeft}
              custom={{ delaying: 1.3, xing: 0, ying: 10 }}
            >
              Risk Score
            </motion.span>
            <motion.div
              variants={fadeFromLeft}
              custom={{ delaying: 1.2, xing: 0, ying: 10, rotate: 180 }}
              className="imgWrap"
            >
              <Image src={Circles.src} width={80} height={80} alt={"diagram"} />
            </motion.div>
          </div>
        </div>
        <ul className="tableLine">
          <motion.li
            variants={fadeFromLeft}
            custom={{ delaying: 1.5, xing: 0 }}
          >
            Date
          </motion.li>
          <motion.li
            variants={fadeFromLeft}
            custom={{ delaying: 1.6, xing: 0 }}
          >
            Transaction
          </motion.li>
          <motion.li
            variants={fadeFromLeft}
            custom={{ delaying: 1.7, xing: 0 }}
          >
            Type
          </motion.li>
          <motion.li
            variants={fadeFromLeft}
            custom={{ delaying: 1.8, xing: 0 }}
          >
            Status
          </motion.li>
          {listTable.map((el, index) => (
            <motion.li
              variants={fadeFromLeft}
              custom={{ delaying: 1.8 + index * 0.05, ying: 10 }}
              key={index + "tableElem"}
            ></motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default ScreeningMonitor;

export const TransactionMonitor = () => {
  const listTable = [...Array(16)];
  return (
    <motion.div
      variants={fadeFromLeft}
      custom={{ delaying: 0.8, xing: 0 }}
      className={"screeningMonitor"}
    >
      <motion.div
        variants={fadeFromLeft}
        custom={{ delaying: 0.9, xing: 0 }}
        className="topi"
      >
        <div className="circles">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
      </motion.div>
      <div className="contenti">
        <div className="infoLine">
          <div className="leftSide">
            <div className="leftSideContent single">
              <motion.h3
                variants={fadeFromLeft}
                custom={{ delaying: 1, xing: 0, ying: 10 }}
              >
                Transactions
              </motion.h3>
              <motion.span
                variants={fadeFromLeft}
                custom={{ delaying: 1.1, xing: 0, ying: 10 }}
              >
                Dashboard Transactions
              </motion.span>
            </div>
          </div>
        </div>
        <div className="secondTableLine">
          <div className="left">
            <motion.img
              variants={fadeFromLeft}
              custom={{ delaying: 1.2, xing: -10, ying: 10 }}
              src={col4.src}
              alt="col4"
            />
          </div>
          <div className="right">
            <div className="top">
              <motion.img
                variants={fadeFromLeft}
                custom={{ delaying: 1.3, xing: 0, ying: 10 }}
                src={col1.src}
                alt="col1"
              />
            </div>
            <div className="botWrap">
              <motion.img
                variants={fadeFromLeft}
                custom={{ delaying: 1.4, xing: 0, ying: 10 }}
                src={col3.src}
                alt="col3"
              />
              <motion.img
                variants={fadeFromLeft}
                custom={{ delaying: 1.5, xing: 0, ying: 10 }}
                src={col2.src}
                alt="col2"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
