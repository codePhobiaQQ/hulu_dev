import linkIn from "../public/assets/svg/in.svg";
import React from "react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
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

  const resizeHandler = (e: any) => {
    setWindowWidth(e.target.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, [windowWidth]);

  useEffect(() => {
    console.log("change window width");
  }, [windowWidth]);

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
              <Image width={40} height={40} src={linkIn.src} alt="in" />
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
          <a href="#" target="_blank">
            Follow me
          </a>
        </div>
      </div>
    </li>
  );
};

export default TeamLeader;
