import { SetStateAction, useEffect } from "react";
import { Dispatch } from "react";
import { ICategory } from "../../models/galaryInterfaces";
import { IBlog } from "../../pages/blog";

interface IFilters {
  categories: ICategory[];
  activeCategory: number;
  setActive: Dispatch<SetStateAction<number>>;
  blogsEl: IBlog[];
  setBlogs: Dispatch<SetStateAction<IBlog[]>>;
}

const Filters = ({
  categories,
  activeCategory,
  setActive,
  blogsEl,
  setBlogs,
}: IFilters) => {
  useEffect(() => {
    if (activeCategory == 1) {
      setBlogs(blogsEl);
    } else {
      const filter = blogsEl.filter((blogEl, index) =>
        blogEl.category.map((el) => el.id).includes(activeCategory)
      );
      console.log(filter);
      setBlogs(filter);
    }
  }, [activeCategory]);

  return (
    <ul className="categoriesHead">
      {categories.map((category, index) => (
        <li
          className={category.id == activeCategory ? "active" : ""}
          key={"category" + category.id}
          onClick={() => setActive(category.id)}
        >
          {category.name}
        </li>
      ))}
    </ul>
  );
};

export default Filters;
