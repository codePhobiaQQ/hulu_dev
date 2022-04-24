import dmitor from "../public/assets/img/dmitor.jpg";
import linkIn from "../public/assets/svg/in.svg";
import { useEffect, useRef, useState } from "react";

interface ILeader {
  img: string;
  name: string;
  text: string;
  link: string;
}

const TeamLeader = ({ img, name, text, link }: ILeader) => {
  const teamer = useRef<HTMLParagraphElement>(null);
  const man = useRef(null);

  // const hoverHandler = (e: MouseEvent) => {
  //   console.log(e.pageX, e.pageY);
  // };
  //
  // useEffect(() => {
  //   // @ts-ignore
  //   man.current.addEventListener("mousemove", (e) => hoverHandler(e));
  //   return () => {
  //     // @ts-ignore
  //     man.current.removeEventListener("mousemove", hoverHandler);
  //   };
  // }, []);

  return (
    <li ref={man}>
      <div className="cardWrap">
        <img className="teamImg" src={img} alt="team" />
        <div className="cardInfo">
          <div className="mainInfo">
            <span>{name}</span>
            <img src={linkIn.src} alt="in" />
          </div>
          <div className="subInfo">
            <p ref={teamer}>{text}</p>
          </div>
        </div>
      </div>
    </li>
  );
};

export default TeamLeader;
