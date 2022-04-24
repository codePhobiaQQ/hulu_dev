import dmitor from "../public/assets/img/dmitor.jpg";
import linkIn from "../public/assets/svg/in.svg";
import React from "react";
import { useEffect, useRef, useState } from "react";

interface ILeader {
  img: string;
  name: string;
  text: string;
  link: string;
  sectionOffset: number;
}

const TeamLeader = ({ img, name, text, link, sectionOffset }: ILeader) => {
  const man = useRef<HTMLLIElement>(null);
  const [isHover, setIsHover] = useState<boolean>(false);
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [left, setLeft] = useState<number>(0);
  const [top, setTop] = useState<number>(0);
  const [mouseX, setMouseX] = useState<number>(0);
  const [mouseY, setMouseY] = useState<number>(0);
  const [textHeight, setTextHeight] = useState<number>(0);
  let mouseLeaveDelay: any = null;

  const textEl = useRef<HTMLDivElement>(null);

  useEffect(() => {
    man.current ? setHeight(man.current.offsetHeight) : null;
    man.current ? setWidth(man.current.offsetWidth) : null;
    man.current ? setLeft(man.current.offsetTop) : null;
    man.current ? setTop(man.current.offsetLeft) : null;
  }, [man.current]);

  useEffect(() => {
    textEl.current ? setTextHeight(textEl.current.clientHeight) : null;
  }, [textEl.current]);

  const mousePX = () => mouseX / width;
  const mousePY = () => mouseY / height;

  const cardStyle = () => {
    const rX = mousePX() * -15;
    const rY = mousePY() * 15;
    return {
      transform: `rotateY(${rY}deg) rotateX(${rX}deg)`,
    };
  };
  const mouseMove = (e: any) => {
    setMouseX(e.pageX - left - width / 2);
    console.log(top);
    setMouseY(e.pageY - sectionOffset - top - height / 2);
  };
  const mouseEnter = () => {
    setIsHover(true);
    clearTimeout(mouseLeaveDelay);
  };
  const mouseLeave = () => {
    setIsHover(false);
    mouseLeaveDelay = setTimeout(() => {
      setMouseX(0);
      setMouseY(0);
    }, 1000);
  };

  return (
    <li
      onMouseMove={(e) => mouseMove(e)}
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      ref={man}
    >
      <div className="cardWrap" style={{ ...cardStyle() }}>
        <img className="teamImg" src={img} alt="team" />
        <div
          style={{ bottom: isHover ? textHeight - 30 : -60 }}
          className="cardInfo"
        >
          <div className="mainInfo">
            <span>{name}</span>
            <img src={linkIn.src} alt="in" />
          </div>
          <div ref={textEl} className="subInfo">
            <p>{text}</p>
          </div>
        </div>
      </div>
    </li>
  );
};

export default TeamLeader;
