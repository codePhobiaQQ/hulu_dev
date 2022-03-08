import Header from "../../hoc/Header/Header";
import { useState } from "react";
import { ICategory } from "../../models/galaryInterfaces";
import arca from "../../public/assets/img/news/arca.jpg";
import { uuid } from "uuidv4";
import Link from "next/link";
import shar from "../../public/assets/img/news/shar.jpg";
import people from "../../public/assets/img/news/pepole.jpg";
import { motion } from "framer-motion";
import Filters from "../../components/blog/Filters";
import { wrapperVariant } from "../../motions/BlogPage.motion";
import BlogElem from "../../components/blog/blogElem";

export interface IBlog {
  name: string;
  shortText: string;
  longText: string;
  category: ICategory[];
  littleImg: string;
  bigImg: string;
  date: string;
  id: number;
}

const Blog = () => {
  const [showBlogs, setBlogs] = useState<IBlog[]>([] as IBlog[]);
  const [activeCategory, setActive] = useState<number>(1);
  const categories: ICategory[] = [
    {
      name: "All",
      id: 1,
    },
    {
      name: "Event",
      id: 2,
    },
    {
      name: "Case study",
      id: 3,
    },
    {
      name: "Corporate",
      id: 4,
    },
    {
      name: "Opinion",
      id: 5,
    },
  ];
  const blogsEl: IBlog[] = [
    {
      id: 1,
      name: "LOREM IPSUM",
      shortText:
        "Huntli is an all-in-one solution that helps you fight financial" +
        " fraud and keep you in check with day-to-day compliance. Our one-fits-all" +
        " system is easy to set up and integrate with your core banking. Our support" +
        "is available 24/7 to assist you with that.",
      longText:
        "Augue non morbi nec eleifend sit ultricies. Arcu morbi lectus mattis cursus et morbi ut. Venenatis quam, ultricies. Efficitur dui nulla mattis dictum. Dictum non id nunc hac libero, id accumsan non eleifend interdum amet, non cras sed lorem dictumst. Amet luctus mattis vel amet, faucibus. Luctus pulvinar mattis pellentesque orci, nisi orci, non luctus faucibus. Mattis nec eleifend dapibus eleifend ex. Risus molestie dolor interdum ultricies. In ultricies. Dictum. Orci, luctus mauris elit. Platea ornare amet, vestibulum tempus urna nec dui ex. Molestie velit sed imperdiet aenean in molestie interdum interdum dolor nunc dolor dictum vestibulum efficitur nunc risus ultricies. Lectus hac amet sed tortor, lacinia non nunc ex. Dapibus tempus ornare aenean luctus in augue ornare vitae quis, cras dolor lorem dictum habitasse platea leo, vitae cursus elit. Dictum. Amet, sit id non sit quis, eget sodales ut. Non quam, eleifend ultricies. Est. Sit risus dapibus tortor, dapibus sed platea justo faucibus. Aenean imperdiet efficitur pulvinar morbi mattis est. Orci, luctus mauris leo, quam, dictum dictumst. Nec libero, est. Elit. Lorem lorem sit lorem augue ornare imperdiet morbi efficitur dictum. Sit ultricies. Nec amet, amet, luctus molestie molestie non habitasse faucibus. Vulputate dui sit accumsan aenean amet in ultricies. Faucibus. Dictum. Tempus in urna est. Eleifend eleifend pellentesque lorem in habitasse platea risus eget id nunc quis, aenean arcu in mattis non morbi luctus mattis est. Vitae imperdiet tortor, accumsan amet sodales sit cras efficitur nec ipsum lorem vulputate consectetur id faucibus. Risus odio. Leo, vitae et venenatis interdum habitasse tempus nec tempus cursus nunc amet consectetur leo, in sed amet, pulvinar arcu sit efficitur est. Tortor, pulvinar leo, eget mattis efficitur et. Pellentesque accumsan molestie et. Nulla dapibus elit. Non tortor, sed nisi aenean non odio. Non non non aenean mattis non ipsum quam, mattis dictumst. Sed mattis quis, elit. Sed mollis \n" +
        "cras in id non habitasse dictum accumsan vestibulum pulvinar velit hac ut. Eget dui vulputate adipiscing cursus urna morbi eleifend quis, libero, id sit risus aenean imperdiet amet, nisi elit. Nulla venenatis nisi sit dolor ornare amet, dapibus interdum non sed augue eget in id mauris ex. Orci, eleifend ipsum venenatis cursus nec imperdiet nisi justo malesuada nec ornare amet ornare pulvinar consectetur mollis molestie est. Ornare risus cursus sit sit in lacinia vitae id amet, et. Dictu",
      date: "10 February 2022",
      category: [
        {
          name: "Corporate",
          id: 4,
        },
      ],
      littleImg: arca.src,
      bigImg: arca.src,
    },
    {
      id: 1,
      name: "LOREM IPSUM",
      shortText:
        "Huntli is an all-in-one solution that helps you fight financial" +
        " fraud and keep you in check with day-to-day compliance. Our one-fits-all" +
        " system is easy to set up and integrate with your core banking. Our support" +
        "is available 24/7 to assist you with that.",
      longText:
        "Augue non morbi nec eleifend sit ultricies. Arcu morbi lectus mattis cursus et morbi ut. Venenatis quam, ultricies. Efficitur dui nulla mattis dictum. Dictum non id nunc hac libero, id accumsan non eleifend interdum amet, non cras sed lorem dictumst. Amet luctus mattis vel amet, faucibus. Luctus pulvinar mattis pellentesque orci, nisi orci, non luctus faucibus. Mattis nec eleifend dapibus eleifend ex. Risus molestie dolor interdum ultricies. In ultricies. Dictum. Orci, luctus mauris elit. Platea ornare amet, vestibulum tempus urna nec dui ex. Molestie velit sed imperdiet aenean in molestie interdum interdum dolor nunc dolor dictum vestibulum efficitur nunc risus ultricies. Lectus hac amet sed tortor, lacinia non nunc ex. Dapibus tempus ornare aenean luctus in augue ornare vitae quis, cras dolor lorem dictum habitasse platea leo, vitae cursus elit. Dictum. Amet, sit id non sit quis, eget sodales ut. Non quam, eleifend ultricies. Est. Sit risus dapibus tortor, dapibus sed platea justo faucibus. Aenean imperdiet efficitur pulvinar morbi mattis est. Orci, luctus mauris leo, quam, dictum dictumst. Nec libero, est. Elit. Lorem lorem sit lorem augue ornare imperdiet morbi efficitur dictum. Sit ultricies. Nec amet, amet, luctus molestie molestie non habitasse faucibus. Vulputate dui sit accumsan aenean amet in ultricies. Faucibus. Dictum. Tempus in urna est. Eleifend eleifend pellentesque lorem in habitasse platea risus eget id nunc quis, aenean arcu in mattis non morbi luctus mattis est. Vitae imperdiet tortor, accumsan amet sodales sit cras efficitur nec ipsum lorem vulputate consectetur id faucibus. Risus odio. Leo, vitae et venenatis interdum habitasse tempus nec tempus cursus nunc amet consectetur leo, in sed amet, pulvinar arcu sit efficitur est. Tortor, pulvinar leo, eget mattis efficitur et. Pellentesque accumsan molestie et. Nulla dapibus elit. Non tortor, sed nisi aenean non odio. Non non non aenean mattis non ipsum quam, mattis dictumst. Sed mattis quis, elit. Sed mollis \n" +
        "cras in id non habitasse dictum accumsan vestibulum pulvinar velit hac ut. Eget dui vulputate adipiscing cursus urna morbi eleifend quis, libero, id sit risus aenean imperdiet amet, nisi elit. Nulla venenatis nisi sit dolor ornare amet, dapibus interdum non sed augue eget in id mauris ex. Orci, eleifend ipsum venenatis cursus nec imperdiet nisi justo malesuada nec ornare amet ornare pulvinar consectetur mollis molestie est. Ornare risus cursus sit sit in lacinia vitae id amet, et. Dictu",
      date: "10 February 2022",
      category: [
        {
          name: "Events",
          id: 2,
        },
      ],
      littleImg: shar.src,
      bigImg: arca.src,
    },
    {
      id: 1,
      name: "LOREM IPSUM",
      shortText:
        "Huntli is an all-in-one solution that helps you fight financial" +
        " fraud and keep you in check with day-to-day compliance. Our one-fits-all" +
        " system is easy to set up and integrate with your core banking. Our support" +
        "is available 24/7 to assist you with that.",
      longText:
        "Augue non morbi nec eleifend sit ultricies. Arcu morbi lectus mattis cursus et morbi ut. Venenatis quam, ultricies. Efficitur dui nulla mattis dictum. Dictum non id nunc hac libero, id accumsan non eleifend interdum amet, non cras sed lorem dictumst. Amet luctus mattis vel amet, faucibus. Luctus pulvinar mattis pellentesque orci, nisi orci, non luctus faucibus. Mattis nec eleifend dapibus eleifend ex. Risus molestie dolor interdum ultricies. In ultricies. Dictum. Orci, luctus mauris elit. Platea ornare amet, vestibulum tempus urna nec dui ex. Molestie velit sed imperdiet aenean in molestie interdum interdum dolor nunc dolor dictum vestibulum efficitur nunc risus ultricies. Lectus hac amet sed tortor, lacinia non nunc ex. Dapibus tempus ornare aenean luctus in augue ornare vitae quis, cras dolor lorem dictum habitasse platea leo, vitae cursus elit. Dictum. Amet, sit id non sit quis, eget sodales ut. Non quam, eleifend ultricies. Est. Sit risus dapibus tortor, dapibus sed platea justo faucibus. Aenean imperdiet efficitur pulvinar morbi mattis est. Orci, luctus mauris leo, quam, dictum dictumst. Nec libero, est. Elit. Lorem lorem sit lorem augue ornare imperdiet morbi efficitur dictum. Sit ultricies. Nec amet, amet, luctus molestie molestie non habitasse faucibus. Vulputate dui sit accumsan aenean amet in ultricies. Faucibus. Dictum. Tempus in urna est. Eleifend eleifend pellentesque lorem in habitasse platea risus eget id nunc quis, aenean arcu in mattis non morbi luctus mattis est. Vitae imperdiet tortor, accumsan amet sodales sit cras efficitur nec ipsum lorem vulputate consectetur id faucibus. Risus odio. Leo, vitae et venenatis interdum habitasse tempus nec tempus cursus nunc amet consectetur leo, in sed amet, pulvinar arcu sit efficitur est. Tortor, pulvinar leo, eget mattis efficitur et. Pellentesque accumsan molestie et. Nulla dapibus elit. Non tortor, sed nisi aenean non odio. Non non non aenean mattis non ipsum quam, mattis dictumst. Sed mattis quis, elit. Sed mollis \n" +
        "cras in id non habitasse dictum accumsan vestibulum pulvinar velit hac ut. Eget dui vulputate adipiscing cursus urna morbi eleifend quis, libero, id sit risus aenean imperdiet amet, nisi elit. Nulla venenatis nisi sit dolor ornare amet, dapibus interdum non sed augue eget in id mauris ex. Orci, eleifend ipsum venenatis cursus nec imperdiet nisi justo malesuada nec ornare amet ornare pulvinar consectetur mollis molestie est. Ornare risus cursus sit sit in lacinia vitae id amet, et. Dictu",
      date: "10 February 2022",
      category: [
        {
          name: "Case study",
          id: 3,
        },
      ],
      littleImg: people.src,
      bigImg: arca.src,
    },
    {
      id: 1,
      name: "LOREM IPSUM",
      shortText:
        "Huntli is an all-in-one solution that helps you fight financial" +
        " fraud and keep you in check with day-to-day compliance. Our one-fits-all" +
        " system is easy to set up and integrate with your core banking. Our support" +
        "is available 24/7 to assist you with that.",
      longText:
        "Augue non morbi nec eleifend sit ultricies. Arcu morbi lectus mattis cursus et morbi ut. Venenatis quam, ultricies. Efficitur dui nulla mattis dictum. Dictum non id nunc hac libero, id accumsan non eleifend interdum amet, non cras sed lorem dictumst. Amet luctus mattis vel amet, faucibus. Luctus pulvinar mattis pellentesque orci, nisi orci, non luctus faucibus. Mattis nec eleifend dapibus eleifend ex. Risus molestie dolor interdum ultricies. In ultricies. Dictum. Orci, luctus mauris elit. Platea ornare amet, vestibulum tempus urna nec dui ex. Molestie velit sed imperdiet aenean in molestie interdum interdum dolor nunc dolor dictum vestibulum efficitur nunc risus ultricies. Lectus hac amet sed tortor, lacinia non nunc ex. Dapibus tempus ornare aenean luctus in augue ornare vitae quis, cras dolor lorem dictum habitasse platea leo, vitae cursus elit. Dictum. Amet, sit id non sit quis, eget sodales ut. Non quam, eleifend ultricies. Est. Sit risus dapibus tortor, dapibus sed platea justo faucibus. Aenean imperdiet efficitur pulvinar morbi mattis est. Orci, luctus mauris leo, quam, dictum dictumst. Nec libero, est. Elit. Lorem lorem sit lorem augue ornare imperdiet morbi efficitur dictum. Sit ultricies. Nec amet, amet, luctus molestie molestie non habitasse faucibus. Vulputate dui sit accumsan aenean amet in ultricies. Faucibus. Dictum. Tempus in urna est. Eleifend eleifend pellentesque lorem in habitasse platea risus eget id nunc quis, aenean arcu in mattis non morbi luctus mattis est. Vitae imperdiet tortor, accumsan amet sodales sit cras efficitur nec ipsum lorem vulputate consectetur id faucibus. Risus odio. Leo, vitae et venenatis interdum habitasse tempus nec tempus cursus nunc amet consectetur leo, in sed amet, pulvinar arcu sit efficitur est. Tortor, pulvinar leo, eget mattis efficitur et. Pellentesque accumsan molestie et. Nulla dapibus elit. Non tortor, sed nisi aenean non odio. Non non non aenean mattis non ipsum quam, mattis dictumst. Sed mattis quis, elit. Sed mollis \n" +
        "cras in id non habitasse dictum accumsan vestibulum pulvinar velit hac ut. Eget dui vulputate adipiscing cursus urna morbi eleifend quis, libero, id sit risus aenean imperdiet amet, nisi elit. Nulla venenatis nisi sit dolor ornare amet, dapibus interdum non sed augue eget in id mauris ex. Orci, eleifend ipsum venenatis cursus nec imperdiet nisi justo malesuada nec ornare amet ornare pulvinar consectetur mollis molestie est. Ornare risus cursus sit sit in lacinia vitae id amet, et. Dictu",
      date: "10 February 2022",
      category: [
        {
          name: "Option",
          id: 5,
        },
      ],
      littleImg: shar.src,
      bigImg: arca.src,
    },
  ];

  return (
    <Header>
      <section className="BlogPageSection">
        <div className="container">
          <Filters
            activeCategory={activeCategory}
            setActive={setActive}
            setBlogs={setBlogs}
            categories={categories}
            blogsEl={blogsEl}
          />
          <ul className="blogEls">
            {showBlogs.map((blogEl, index) => (
              <BlogElem
                key={uuid() + "blogEl"}
                categories={categories}
                blogEl={blogEl}
              />
            ))}
          </ul>
        </div>
      </section>
    </Header>
  );
};

export default Blog;
