import Link from "next/link";
import { motion } from "framer-motion";
import { IBlog } from "../../pages/blog";
import { ICategory } from "../../models/galaryInterfaces";
import { fadeIn } from "../../motions/BlogPage.motion";

interface IBlogElem {
  blogEl: IBlog;
  categories: ICategory[];
}

const BlogElem = ({ blogEl, categories }: IBlogElem) => {
  return (
    <div className="blogEl">
      <Link href={`/blog/${blogEl.id}`}>
        <a>
          <div className="imgWrapper">
            <img src={blogEl.littleImg} alt="blog" />
          </div>
          <div className="content">
            <h3>{blogEl.name}</h3>
            <p>{blogEl.shortText}</p>
            <span>{blogEl.category[0].name}</span>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default BlogElem;
