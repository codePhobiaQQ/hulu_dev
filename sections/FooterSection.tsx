import logo from "../public/assets/svg/Logo.svg";
import { ILink, linksMenu } from "../components/Menu";
import Link from "next/link";
import SocLinks from "../components/UI/SocLinks";
import { useEffect, useState } from "react";
import axios from "axios";
import { BackUrl } from "../vars";
import { useDispatch } from "react-redux";
import { setPolicityOpen } from "../redux/slices/AppSlice";

interface ILinksInt {
  index: number;
  el: ILink;
}

interface IContactInfo {
  address: string;
  email: string;
}

const FirstFootLink = ({ index, el }: ILinksInt) => {
  if (index <= 4) {
    return (
      <li>
        <Link href={`${el.link}`}>
          <a>{el.name}</a>
        </Link>
      </li>
    );
  }
  return null;
};

const SecondFootLink = ({ index, el }: ILinksInt) => {
  if (index > 4) {
    return (
      <li key={"footer" + el.name + el.link + "second"}>
        <Link href={`${el.link}`}>
          <a>{el.name}</a>
        </Link>
      </li>
    );
  }
  return null;
};

const FooterSection = () => {
  const [pageData, setPageData] = useState<IContactInfo>({
    address: "Kronvalda bulvāris 10, Centra rajons, Rīga, Latvia, LV-1010",
    FacebookLink: "https://google.com",
    InstagramLink: "https://google.com",
    LinkedinLink: "https://google.com",
    TelegramLink: "https://google.com",
    TwitterLink: "https://google.com",
    email: "dmytro@huntli.io",
  } as IContactInfo);

  const dispatch = useDispatch();

  useEffect(() => {
    const takeData = async () => {
      const response = await axios.get(BackUrl + "/api/contact-info");
      setPageData(response.data.data.attributes);
    };
    takeData();
  }, []);

  return (
    <footer className="footerSection">
      <div className="container">
        <div className="leftCol">
          <Link href="/">
            <a>
              <img src={logo.src} alt="Logo" />
            </a>
          </Link>
          <span onClick={() => dispatch(setPolicityOpen(true))}>
            Privacy policy
          </span>
        </div>
        <div className="centerCol">
          <h3>Navigate</h3>
          <div className="linksLists">
            <ul className="links left">
              {linksMenu.map((el, index) => (
                <FirstFootLink
                  key={"footer" + el.name + el.link + "first"}
                  index={index}
                  el={el}
                />
              ))}
            </ul>
            <ul className="links right">
              {linksMenu.map((el, index) => (
                <SecondFootLink
                  key={"footer" + el.name + el.link + "second"}
                  index={index}
                  el={el}
                />
              ))}
            </ul>
          </div>
        </div>
        <div className="rightCol">
          <div className="rightColInner">
            <h3>CONTACT</h3>
            <span className="address">{pageData.address}</span>
            <a className="email" href={`mailto:${pageData.email}`}>
              {pageData.email}
            </a>
            <SocLinks />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
