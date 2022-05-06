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
}

const BlogElem = ({ blogEl, categories }: IBlogElem) => {
  return (
    <motion.li initial="hidden" animate="visible" variants={fadeIn}>
      <Link href={`/blog/${blogEl.id}`}>
        <a>
          <div className="imgWrapper">
            <img
              src={BackUrl + blogEl.PreviewImg.data.attributes.url}
              alt="blog"
            />
          </div>
          <div className="content">
            <h3>{blogEl.ShortTitle}</h3>
            <div className="innerContent">
              <ReactMarkdown
                transformImageUri={(uri: any) =>
                  uri.startsWith("http") ? uri : `${BackUrl}${uri}`
                }
              >
                {blogEl.PreviewText}
              </ReactMarkdown>
            </div>

            <span>{blogEl.blog_categories[0].name}</span>
          </div>
        </a>
      </Link>
    </motion.li>
  );
};

export default BlogElem;
