import Link from "next/link";
import newsImg from "../public/assets/img/news/newsImg.jpg";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import axios from "axios";
import { BackUrl } from "../vars";
import { IBlogFinal } from "../pages/blog";

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

  const [categoryElems, setCategoryElems] = useState<IBlogFinal[]>(
    [] as IBlogFinal[]
  );

  useEffect(() => {
    const takeData = async () => {
      const response = await axios.get(
        BackUrl +
          "/api/main-page-fields?populate=BlogSection&populate=BlogSection.LeftColImg"
      );
      const responsElems = await axios.get(
        BackUrl +
          "/api/blogs?populate=BlogBigImg&populate=PreviewImg&populate=blog_categories"
      );
      setSectionData({
        ...response.data.data.attributes.BlogSection,
        LeftColImg:
          BackUrl +
          response.data.data.attributes.BlogSection.LeftColImg.data.attributes
            .url,
      });
      setCategoryElems(
        [
          ...responsElems.data.data.map((el: any, index: number) => {
            return {
              ...el.attributes,
              blog_categories: el.attributes.blog_categories.data.map(
                (el: any) => el.attributes
              ),
              id: responsElems.data.data[index].id,
              PreviewImg: el.attributes?.PreviewImg?.data?.attributes?.url
                ? BackUrl + el.attributes.PreviewImg.data.attributes.url
                : "",
            };
          }),
        ].sort(function (a, b) {
          const c = new Date(a.Date);
          const d = new Date(b.Date);
          // @ts-ignore
          return d - c;
        })
      );
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
          {categoryElems[0]?.BigTitle ? (
            <h2>{categoryElems[0].BigTitle}</h2>
          ) : null}
          <div className="imgContainer">
            {categoryElems[0]?.PreviewImg ? (
              <img src={categoryElems[0].PreviewImg} alt="news" />
            ) : null}
            <div className="spansWrap">
              {categoryElems[0]?.id ? (
                <Link href={"blog/" + categoryElems[0].id}>
                  <a>News</a>
                </Link>
              ) : null}
              {categoryElems[0]?.Date ? (
                <span className="when">{categoryElems[0].Date}</span>
              ) : null}
            </div>
          </div>
          {categoryElems[0]?.PreviewText ? (
            <p className="what">
              {categoryElems[0].PreviewText.split("").slice(0, 300).join("") +
                "..."}
            </p>
          ) : null}
        </div>
        <div className="rightCol">
          <div className="news">
            <div className="helpsWrap">
              {categoryElems[1]?.id ? (
                <Link href={"blog/" + categoryElems[1].id}>
                  <a>News</a>
                </Link>
              ) : null}
              {categoryElems[1]?.blog_categories[0]?.name ? (
                <span className="classification">
                  {categoryElems[1]?.blog_categories[0]?.name}
                </span>
              ) : null}
              {categoryElems[1]?.Date ? (
                <span className="when">{categoryElems[1].Date}</span>
              ) : null}
            </div>
            {categoryElems[1]?.PreviewText ? (
              <p className="shortText">
                {categoryElems[1].PreviewText.split("").slice(0, 100).join("") +
                  "..."}
              </p>
            ) : null}
          </div>
          <div className="news">
            <div className="helpsWrap">
              {categoryElems[2]?.id ? (
                <Link href={"blog/" + categoryElems[2].id}>
                  <a>News</a>
                </Link>
              ) : null}
              {categoryElems[2]?.blog_categories[0]?.name ? (
                <span className="classification">
                  {categoryElems[2]?.blog_categories[0]?.name}
                </span>
              ) : null}
              {categoryElems[2]?.Date ? (
                <span className="when">{categoryElems[2].Date}</span>
              ) : null}
            </div>
            {categoryElems[2]?.PreviewText ? (
              <p className="shortText">
                {categoryElems[2].PreviewText.split("").slice(0, 100).join("") +
                  "..."}
              </p>
            ) : null}
          </div>
          <div className="news">
            <div className="helpsWrap">
              {categoryElems[3]?.id ? (
                <Link href={"blog/" + categoryElems[3].id}>
                  <a>News</a>
                </Link>
              ) : null}
              {categoryElems[3]?.blog_categories[0]?.name ? (
                <span className="classification">
                  {categoryElems[3]?.blog_categories[0]?.name}
                </span>
              ) : null}
              {categoryElems[3]?.Date ? (
                <span className="when">{categoryElems[3].Date}</span>
              ) : null}
            </div>
            {categoryElems[3]?.PreviewText ? (
              <p className="shortText">
                {categoryElems[3].PreviewText.split("").slice(0, 100).join("") +
                  "..."}
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
