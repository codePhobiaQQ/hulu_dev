import Link from "next/link";
import LeftArrow from "../../components/UI/LeftArrow";
import { IBlogFinal } from "./index";
import arca from "../../public/assets/img/news/arca.jpg";
import Date from "../../components/UI/date";
import Twit from "../../components/UI/soc/twit";
import FaceBook from "../../components/UI/soc/faceBook";
import LinkIn from "../../components/UI/soc/LinkIn";
import { useEffect, useState } from "react";
import HeaderBlog from "../../hoc/Header/HeaderBlog";
import axios from "axios";
import { BackUrl } from "../../vars";
import { useRouter } from "next/router";
import ReactMarkdown from "react-markdown";

const BlogSinglePage = () => {
  // @ts-ignore
  const [categoryElem, setCategoryElem] = useState<IBlogFinal>({
    id: 2,
    BlogBigImg: { data: { attributes: arca.src } },
    BigTitle: "Test",
    TwitLink: "https://google.com",
    LinkedinLink: "https://google.com",
    FacebookLink: "https://google.com",
    ContentText: "test",
    Date: "10 February 2022",
    blog_categories: { data: [{ attributes: { ids: 0, name: "All" } }] },
  } as IBlogFinal);
  const [colorMode, setColorMode] = useState<string>("black");
  useEffect(() => {
    if (typeof window !== "undefined") {
      setColorMode(localStorage.getItem("color") || "black");
    }
  }, []);

  const link = useRouter();

  useEffect(() => {
    const takeData = async () => {
      try {
        const responsElem = await axios.get(
          BackUrl +
            `/api/blogs/${
              categoryElem.id + 1
            }?populate=BlogBigImg&populate=PreviewImg&populate=blog_categories`
        );
        setCategoryElem(responsElem.data.data.attributes);
        console.log(responsElem);
      } catch (e) {
        console.log(e);
      }
    };
    takeData();
  }, []);

  console.log(categoryElem);

  return (
    <HeaderBlog colorMode={colorMode} setColorMode={setColorMode}>
      <section className={"BlogSinglePage " + colorMode}>
        <div className="container">
          <Link href="/blog">
            <a className="goBackBtn">
              <LeftArrow />
              <span>Blog main page</span>
            </a>
          </Link>
          <div className="contentWrap">
            <img
              width={390}
              src={BackUrl + categoryElem.BlogBigImg.data.attributes.url}
              alt="blog"
            />
            <h3>{categoryElem.BigTitle}</h3>
            <div className="infoWrapper">
              <div className="date">
                <Date />
                <span>{categoryElem.Date}</span>
              </div>
              <span className="separator"></span>
              <div className="categoryBtn">
                <span>
                  {categoryElem.blog_categories.data[0].attributes.name}
                </span>
              </div>
              <div className="socLinks">
                <a
                  rel="noreferrer"
                  target={"_blank"}
                  href={categoryElem.TwitLink}
                >
                  <Twit />
                </a>
                <a
                  rel="noreferrer"
                  target={"_blank"}
                  href={categoryElem.FacebookLink}
                >
                  <FaceBook />
                </a>
                <a
                  rel="noreferrer"
                  target={"_blank"}
                  href={categoryElem.LinkedinLink}
                >
                  <LinkIn />
                </a>
              </div>
            </div>
            <ReactMarkdown
              transformImageUri={(uri: any) =>
                uri.startsWith("http") ? uri : `${BackUrl}${uri}`
              }
            >
              {categoryElem.ContentText}
            </ReactMarkdown>
          </div>
        </div>
      </section>
    </HeaderBlog>
  );
};

export default BlogSinglePage;
