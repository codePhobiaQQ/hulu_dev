import Link from "next/link";
import { motion } from "framer-motion";
import { IBlogFinal } from "../../pages/blog";
import { ICategory } from "../../models/galaryInterfaces";
import { fadeIn } from "../../motions/BlogPage.motion";
import { BackUrl } from "../../vars";
import ReactMarkdown from "react-markdown";

interface IBlogElem {
  blogEl: IBlogFinal;
  categories: ICategory[];
  activeCategory: number;
}

const BlogElem = ({ blogEl, categories, activeCategory }: IBlogElem) => {
  return (
    <motion.li initial="hidden" animate="visible" variants={fadeIn}>
      <Link href={`/blog/${blogEl.id}`}>
        <a>
          {blogEl.PreviewImg.data?.attributes?.url ? (
            <div className="imgWrapper">
              <img
                src={BackUrl + blogEl.PreviewImg.data.attributes.url}
                alt="blog"
              />
            </div>
          ) : null}
          <div className="content">
            <h3>{blogEl.ShortTitle}</h3>
            <div className="innerContent">
              <ReactMarkdown
                transformImageUri={(uri: any) =>
                  uri.startsWith("http") ? uri : `${BackUrl}${uri}`
                }
              >
                {blogEl.PreviewText.split("").slice(0, 300).join("") + "..."}
              </ReactMarkdown>
            </div>
            {blogEl.blog_categories[0]?.name ? (
              <span>{blogEl.blog_categories[0].name}</span>
            ) : null}
          </div>
        </a>
      </Link>
    </motion.li>
  );
};

export default BlogElem;
