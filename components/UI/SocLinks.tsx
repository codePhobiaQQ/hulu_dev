import facebookB from "../../public/assets/svg/soc/facebookB.svg";
import instagramB from "../../public/assets/svg/soc/InstagramB.svg";
import LinkedinB from "../../public/assets/svg/soc/LinkedinB.svg";
import TelegramB from "../../public/assets/svg/soc/TelegramB.svg";
import twitterB from "../../public/assets/svg/soc/twitterB.svg";

interface ISocLink {
  img: string;
  link: string;
}

interface ISocLinksProps {
  social?: any;
}

const SocLinks = ({ social }: ISocLinksProps) => {
  const links: ISocLink[] = [
    {
      link: "#",
      img: facebookB.src,
    },
    {
      link: "#",
      img: instagramB.src,
    },
    {
      link: "#",
      img: LinkedinB.src,
    },
    {
      link: "#",
      img: TelegramB.src,
    },
    {
      link: "#",
      img: twitterB.src,
    },
  ];
  return (
    <ul ref={social}>
      {links.map((link, index) => (
        <li key={"socLInk" + index + link.link}>
          <a href={link.link}>
            <img src={link.img} alt="soc" />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocLinks;
