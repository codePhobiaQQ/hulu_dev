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
  useEffect(() => {
    setBottom(
      teamer.current?.offsetHeight
        ? teamer.current?.offsetHeight + 35
        : teamer.current?.offsetHeight
    );
  }, []);

  const [hovering, setHovering] = useState<boolean>(false);
  const [bottomimg, setBottom] = useState<number | undefined>(106);

  const leaveAction = () => {
    setTimeout(() => {
      setHovering(false);
    }, 500);
  };

  return (
    <li onMouseEnter={() => setHovering(true)} onMouseLeave={leaveAction}>
      <img className="teamImg" src={img} alt="team" />
      <div className="innerWrapper">
        <div
          style={{ transform: `translateY(${!hovering ? bottomimg : 10}px)` }}
          className="info"
        >
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
