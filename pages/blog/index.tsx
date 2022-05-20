import { useEffect, useState } from "react";
import { ICategory } from "../../models/galaryInterfaces";
import Filters from "../../components/blog/Filters";
import BlogElem from "../../components/blog/blogElem";
import HeaderBlog from "../../hoc/Header/HeaderBlog";
import axios from "axios";
import { BackUrl } from "../../vars";

export interface IBlogFinal {
  id: number;
  ShortTitle: string;
  PreviewText: string;
  PreviewImg: any;
  Date: any;
  BigTitle: string;
  TwitLink: string;
  FacebookLink: string;
  LinkedinLink: string;
  ContentText: string;
  BlogBigImg: any;
  // eslint-disable-next-line camelcase
  blog_categories: any;
}

const Blog = () => {
  const [categoryData, setCategoryData] = useState<ICategory[]>(
    [] as ICategory[]
  );
  const [categoryElems, setCategoryElems] = useState<IBlogFinal[]>(
    [] as IBlogFinal[]
  );
  const [showBlogs, setBlogs] = useState<IBlogFinal[]>([] as IBlogFinal[]);
  const [activeCategory, setActive] = useState<number>(0);

  useEffect(() => {
    const takeData = async () => {
      const response = await axios.get(
        BackUrl + "/api/blog-categories?populate=*"
      );
      const responsElems = await axios.get(
        BackUrl +
          "/api/blogs?populate=BlogBigImg&populate=PreviewImg&populate=blog_categories"
      );
      setCategoryData([
        { name: "All", ids: 0 },
        ...response.data.data.map((el: any) => el.attributes),
      ]);
      setCategoryElems(
        [
          ...responsElems.data.data.map((el: any, index: number) => {
            return {
              ...el.attributes,
              blog_categories: el.attributes.blog_categories.data.map(
                (el: any) => el.attributes
              ),
              id: responsElems.data.data[index].id,
            };
          }),
        ].sort(function (a, b) {
          const c = new Date(a.Date);
          const d = new Date(b.Date);
          // @ts-ignore
          return d - c;
        })
      );
      console.log(categoryElems);
    };
    takeData();
  }, []);

  return (
    <HeaderBlog>
      <section className="BlogPageSection">
        <div className="container">
          <Filters
            activeCategory={activeCategory}
            setActive={setActive}
            setBlogs={setBlogs}
            categories={categoryData}
            blogsEl={categoryElems}
          />
          <ul className="blogEls">
            {showBlogs.map((blogEl, index) => (
              <BlogElem
                key={"blogEl" + index}
                categories={categoryData}
                blogEl={blogEl}
                activeCategory={activeCategory}
              />
            ))}
          </ul>
        </div>
      </section>
    </HeaderBlog>
  );
};

export default Blog;
