import { SetStateAction, useEffect } from "react";
import { Dispatch } from "react";
import { ICategory } from "../../models/galaryInterfaces";
import { IBlogFinal } from "../../pages/blog";

interface IFilters {
  categories: ICategory[];
  activeCategory: number;
  setActive: Dispatch<SetStateAction<number>>;
  blogsEl: IBlogFinal[];
  setBlogs: Dispatch<SetStateAction<IBlogFinal[]>>;
}

const Filters = ({
  categories,
  activeCategory,
  setActive,
  blogsEl,
  setBlogs,
}: IFilters) => {
  useEffect(() => {
    if (activeCategory == 0) {
      setBlogs(blogsEl);
    } else {
      const filter = blogsEl
        .filter((blogEl, index) =>
          blogEl.blog_categories
            .map((el: any) => {
              return el.ids;
            })
            .includes(activeCategory)
        )
        .sort(function (a, b) {
          const c = new Date(a.Date);
          const d = new Date(b.Date);
          // @ts-ignore
          return d - c;
        });
      setBlogs(filter);
    }
  }, [activeCategory, blogsEl, categories]);

  return (
    <ul className="categoriesHead">
      {categories.map((category, index) => (
        <li
          className={category.ids == activeCategory ? "active" : ""}
          key={"category" + category.ids}
          onClick={() => setActive(category.ids)}
        >
          {category.name}
        </li>
      ))}
    </ul>
  );
};

export default Filters;
