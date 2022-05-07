import Link from "next/link";
import newsImg from "../public/assets/img/news/newsImg.jpg";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import axios from "axios";
import { BackUrl } from "../vars";

interface IBlogSection {
  setTopPosition: Dispatch<SetStateAction<number>>;
}

interface IBlogData {
  title: string;
  LeftColImg: string;
  LeftColDate: string;
  LeftColText: string;
  LeftCollInk: string;
  RightColLink1: string;
  RightColCategory1: string;
  RightColDate1: string;
  RightColText1: string;
  RightColLink2: string;
  RightColCategory2: string;
  RightColDate2: string;
  RightColText2: string;
  RightColLink3: string;
  RightColCategory3: string;
  RightColDate3: string;
  RightColText3: string;
}

const BlogSection = ({ setTopPosition }: IBlogSection) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [sectionData, setSectionData] = useState<IBlogData>({
    title: "Blog",
    LeftColImg: newsImg.src,
    LeftColDate: "10-12-2022",
    LeftCollInk: "/blog/4",
    LeftColText:
      "What an extraordinary expirience it was this year at #ecom21. I had a chance to meet all the leading professionals from #banking #compliance #ai #startups and also share piece of mind on the future of #fintech. Looking forward for the next year for sure",
    RightColLink1: "/blog/4",
    RightColCategory1: "Event",
    RightColDate1: "10-12-2022",
    RightColText1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    RightColLink2: "/blog/4",
    RightColCategory2: "Event",
    RightColDate2: "10-12-2022",
    RightColText2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    RightColLink3: "/blog/4",
    RightColCategory3: "Event",
    RightColDate3: "10-12-2022",
    RightColText3: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  });

  useEffect(() => {
    const takeData = async () => {
      const response = await axios.get(
        BackUrl +
          "/api/main-page-fields?populate=BlogSection&populate=BlogSection.LeftColImg"
      );
      setSectionData({
        ...response.data.data.attributes.BlogSection,
        LeftColImg:
          BackUrl +
          response.data.data.attributes.BlogSection.LeftColImg.data.attributes
            .url,
      });
    };
    takeData();
  }, []);

  useEffect(() => {
    sectionRef.current
      ? setTopPosition(sectionRef.current.offsetTop - 100)
      : null;
  }, [sectionRef]);

  return (
    <section ref={sectionRef} id="Blog" className="BlogSection">
      <div className="container">
        <div className="leftCol">
          <h2>{sectionData.title}</h2>
          <div className="imgContainer">
            <img src={sectionData.LeftColImg} alt="news" />
            <div className="spansWrap">
              <Link href={sectionData.LeftCollInk}>
                <a>News</a>
              </Link>
              <span className="when">{sectionData.LeftColDate}</span>
            </div>
          </div>
          <p className="what">{sectionData.LeftColText}</p>
        </div>
        <div className="rightCol">
          <div className="news">
            <div className="helpsWrap">
              <Link href={sectionData.RightColLink1}>
                <a className="link">News</a>
              </Link>
              <span className="classification">
                {sectionData.RightColCategory1}
              </span>
              <span className="when">{sectionData.RightColDate1}</span>
            </div>
            <p className="shortText">{sectionData.RightColText1}</p>
          </div>
          <div className="news">
            <div className="helpsWrap">
              <Link href={sectionData.RightColLink2}>
                <a className="link">News</a>
              </Link>
              <span className="classification">
                {sectionData.RightColCategory2}
              </span>
              <span className="when">{sectionData.RightColDate2}</span>
            </div>
            <p className="shortText">{sectionData.RightColText2}</p>
          </div>
          <div className="news">
            <div className="helpsWrap">
              <Link href={sectionData.RightColLink3}>
                <a className="link">News</a>
              </Link>
              <span className="classification">
                {sectionData.RightColCategory3}
              </span>
              <span className="when">{sectionData.RightColDate3}</span>
            </div>
            <p className="shortText">{sectionData.RightColText3}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
