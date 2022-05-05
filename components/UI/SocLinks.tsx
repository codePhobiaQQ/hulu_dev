import facebookB from "../../public/assets/svg/soc/facebookB.svg";
import instagramB from "../../public/assets/svg/soc/InstagramB.svg";
import LinkedinB from "../../public/assets/svg/soc/LinkedinB.svg";
import TelegramB from "../../public/assets/svg/soc/TelegramB.svg";
import twitterB from "../../public/assets/svg/soc/twitterB.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import { BackUrl } from "../../vars";

interface ISocLink {
  img: string;
  link: string;
}

interface ISocLinksProps {
  social?: any;
}

const SocLinks = ({ social }: ISocLinksProps) => {
  const [pageData, setPageData] = useState<ISocLink[]>([
    { img: facebookB.src, link: "https://google.com" },
    { img: instagramB.src, link: "https://google.com" },
    { img: LinkedinB.src, link: "https://google.com" },
    { img: TelegramB.src, link: "https://google.com" },
    { img: twitterB.src, link: "https://google.com" },
  ] as ISocLink[]);

  useEffect(() => {
    const takeData = async () => {
      const response = await axios.get(
        BackUrl + "/api/social-infos?populate=img"
      );
      console.log(response);
      setPageData(
        response.data.data.map((el: any) => {
          return {
            link: el.attributes.link,
            img: BackUrl + el.attributes.img.data.attributes.url,
          };
        })
      );
    };
    takeData();
  }, []);

  useEffect(() => {
    console.log(pageData);
  }, [pageData]);

  return (
    <ul className={"socLinks"} ref={social}>
      {pageData.map((link, index) => (
        <li key={"socLInk" + link.img + link.link}>
          <a href={link.link}>
            <img src={link.img} alt="soc" />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocLinks;
