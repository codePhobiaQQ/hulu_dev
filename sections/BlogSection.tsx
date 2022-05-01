import Link from "next/link";
import newsImg from "../public/assets/img/news/newsImg.jpg";
import { Dispatch, SetStateAction, useEffect, useRef } from "react";

interface IBlogSection {
  setTopPosition: Dispatch<SetStateAction<number>>;
}

const BlogSection = ({ setTopPosition }: IBlogSection) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    sectionRef.current
      ? setTopPosition(sectionRef.current.offsetTop - 150)
      : null;
  }, [sectionRef]);

  return (
    <section ref={sectionRef} id="Blog" className="BlogSection">
      <div className="container">
        <div className="leftCol">
          <h2>BLOG</h2>
          <div className="imgContainer">
            <img src={newsImg.src} alt="news" />
            <div className="spansWrap">
              <Link href="/blog">
                <a>News</a>
              </Link>
              <span className="when">2 days ago</span>
            </div>
          </div>
          <p className="what">
            What an extraordinary expirience it was this year at #ecom21. I had
            a chance to meet all the leading professionals from #banking
            #compliance #ai #startups and also share piece of mind on the future
            of #fintech. Looking forward for the next year for sure
          </p>
        </div>
        <div className="rightCol">
          <div className="news">
            <div className="helpsWrap">
              <Link href="/blog">
                <a className="link">News</a>
              </Link>
              <span className="classification">Event</span>
              <span className="when">2 days ago</span>
            </div>
            <p className="shortText">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="news">
            <div className="helpsWrap">
              <Link href="/blog">
                <a className="link">News</a>
              </Link>
              <span className="classification">Case study</span>
              <span className="when">2 days ago</span>
            </div>
            <p className="shortText">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="news">
            <div className="helpsWrap">
              <Link href="/blog">
                <a className="link">News</a>
              </Link>
              <span className="classification">Corporate</span>
              <span className="when">2 days ago</span>
            </div>
            <p className="shortText">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
