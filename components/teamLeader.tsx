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

  return (
    <li>
      <img className="teamImg" src={img} alt="team" />
      <div className="innerWrapper">
        <div className="info">
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
