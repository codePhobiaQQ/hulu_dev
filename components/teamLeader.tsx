import linkIn from "../public/assets/svg/in.svg";
import React from "react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { log } from "util";

interface ILeader {
  img: string;
  name: string;
  text: string;
  link: string;
  sectionOffset: number;
}

const TeamLeader = ({ img, name, text, link, sectionOffset }: ILeader) => {
  const [isMobileInfo, setIsMobileInfo] = useState(true);
  const man = useRef<HTMLLIElement>(null);
  const [windowWidth, setWindowWidth] = useState(1920);
  const [isHover, setIsHover] = useState<boolean>(false);
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [left, setLeft] = useState<number>(0);
  const [top, setTop] = useState<number>(10000);
  const [mouseX, setMouseX] = useState<number>(0);
  const [mouseY, setMouseY] = useState<number>(0);
  const [textHeight, setTextHeight] = useState<number>(0);

  let mouseLeaveDelay: any = null;

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  const textEl = useRef<HTMLDivElement>(null);
  const helpRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    man.current ? setHeight(man.current.offsetHeight) : null;
    man.current ? setWidth(man.current.offsetWidth) : null;
  }, [man.current]);

  useEffect(() => {
    man.current ? setLeft(man.current.offsetLeft) : null;
    man.current ? setTop(man.current.offsetTop) : null;
  }, [sectionOffset]);

  useEffect(() => {
    textEl.current ? setTextHeight(textEl.current.clientHeight) : null;
  }, [textEl.current]);

  console.log("textHeight", textHeight);

  const mousePX = () => mouseX / width;
  const mousePY = () => mouseY / height;

  const cardStyle = () => {
    const rX = mousePX() * 15;
    const rY = mousePY() * 15;
    return {
      transform: `rotateY(${rY}deg) rotateX(${rX}deg)`,
    };
  };
  const mouseMove = (e: any) => {
    setMouseY(Math.abs(e.pageY - sectionOffset - top - height / 2));
    setMouseX(Math.abs(e.pageX - left - width / 2));
  };
  const mouseEnter = () => {
    setIsHover(true);
    clearTimeout(mouseLeaveDelay);
  };
  const mouseLeave = () => {
    setIsHover(false);
    mouseLeaveDelay = setTimeout(() => {
      // setMouseX(0);
      // setMouseY(0);
    }, 1000);
  };

  return windowWidth > 992 ? (
    <li
      // onMouseMove={(e) => mouseMove(e)}
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      ref={man}
    >
      <div className="cardWrap" style={{ ...cardStyle() }}>
        <div className="teamImg">
          <Image width={430} height={600} src={img} alt="team" />
        </div>
        <div
          style={
            isHover
              ? { bottom: textHeight - (window.innerWidth > 1200 ? 40 : 150) }
              : {}
          }
          className="cardInfo"
        >
          <div className="mainInfo">
            <span>{name}</span>
            <Image width={40} height={40} src={linkIn.src} alt="in" />
          </div>
          <div ref={textEl} className="subInfo">
            <p>{text}</p>
          </div>
        </div>
      </div>
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
          <div ref={textEl} className="subInfo">
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
