import linkIn from "../public/assets/svg/in.svg";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

// @ts-ignore
import Tilt from "react-tilt";

interface ILeader {
  img: string;
  name: string;
  text: string;
  link: string;
  sectionOffset: number;
}

const TeamLeader = ({ img, name, text, link, sectionOffset }: ILeader) => {
  const [windowWidth, setWindowWidth] = useState(1920);
  const [isHover, setIsHover] = useState<boolean>(false);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  const mouseLeaveDelay: any = null;

  const mouseEnter = () => {
    setIsHover(true);
    clearTimeout(mouseLeaveDelay);
  };
  const mouseLeave = () => {
    setIsHover(false);
  };

  return windowWidth > 992 ? (
    <li onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
      <Tilt
        className="Tilt"
        options={{ max: 10, scale: 1, speed: 1500 }}
        // style={{ height: 600, width: 430 }}
      >
        <div className="cardWrap">
          <div className="teamImg">
            <Image width={430} height={600} src={img} alt="team" />
          </div>
          <div className="cardInfo">
            <div className="mainInfo">
              <span>{name}</span>
              <a href={link} target="_blank" rel="noreferrer">
                <Image width={40} height={40} src={linkIn.src} alt="in" />
              </a>
            </div>
            <div className="subInfo">
              <p>{text}</p>
            </div>
          </div>
        </div>
      </Tilt>
    </li>
  ) : (
    <li>
      <div className="cardWrap">
        <div className="teamImg">
          <Image width={430} height={600} src={img} alt="team" />
        </div>
        <div className="cardInfo">
          <div className="mainInfo">
            <span>{name}</span>
            <Image width={40} height={40} src={linkIn.src} alt="in" />
          </div>
          <div className="subInfo">
            <p>{text}</p>
          </div>
        </div>
        <div className="hoverInfo">
          <p>{text}</p>
          <a href={link} target="_blank" rel="noreferrer">
            Follow me
          </a>
        </div>
      </div>
    </li>
  );
};

export default TeamLeader;
