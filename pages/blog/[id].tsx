import Header from "../../hoc/Header/Header";
import Link from "next/link";
import LeftArrow from "../../components/UI/LeftArrow";
import { IBlog } from "./index";
import people from "../../public/assets/img/news/pepole.jpg";
import arca from "../../public/assets/img/news/arca.jpg";
import Date from "../../components/UI/date";

const BlogSinglePage = () => {
  const blog: IBlog = {
    id: 1,
    name: "LOREM IPSUM",
    shortText:
      "Huntli is an all-in-one solution that helps you fight financial" +
      " fraud and keep you in check with day-to-day compliance. Our one-fits-all" +
      " system is easy to set up and integrate with your core banking. Our support" +
      "is available 24/7 to assist you with that.",
    longText:
      "Augue non morbi nec eleifend sit ultricies. Arcu morbi lectus mattis cursus et morbi ut. Venenatis quam, ultricies. Efficitur dui nulla mattis dictum. Dictum non id nunc hac libero, id accumsan non eleifend interdum amet, non cras sed lorem dictumst. Amet luctus mattis vel amet, faucibus. Luctus pulvinar mattis pellentesque orci, nisi orci, non luctus faucibus. Mattis nec eleifend dapibus eleifend ex. Risus molestie dolor interdum ultricies. In ultricies. Dictum. Orci, luctus mauris elit. Platea ornare amet, vestibulum tempus urna nec dui ex. Molestie velit sed imperdiet aenean in molestie interdum interdum dolor nunc dolor dictum vestibulum efficitur nunc risus ultricies. Lectus hac amet sed tortor, lacinia non nunc ex. Dapibus tempus ornare aenean luctus in augue ornare vitae quis, cras dolor lorem dictum habitasse platea leo, vitae cursus elit. Dictum. Amet, sit id non sit quis, eget sodales ut. Non quam, eleifend ultricies. Est. Sit risus dapibus tortor, dapibus sed platea justo faucibus. Aenean imperdiet efficitur pulvinar morbi mattis est. Orci, luctus mauris leo, quam, dictum dictumst. Nec libero, est. Elit. Lorem lorem sit lorem augue ornare imperdiet morbi efficitur dictum. Sit ultricies. Nec amet, amet, luctus molestie molestie non habitasse faucibus. Vulputate dui sit accumsan aenean amet in ultricies. Faucibus. Dictum. Tempus in urna est. Eleifend eleifend pellentesque lorem in habitasse platea risus eget id nunc quis, aenean arcu in mattis non morbi luctus mattis est. Vitae imperdiet tortor, accumsan amet sodales sit cras efficitur nec ipsum lorem vulputate consectetur id faucibus. Risus odio. Leo, vitae et venenatis interdum habitasse tempus nec tempus cursus nunc amet consectetur leo, in sed amet, pulvinar arcu sit efficitur est. Tortor, pulvinar leo, eget mattis efficitur et. Pellentesque accumsan molestie et. Nulla dapibus elit. Non tortor, sed nisi aenean non odio. Non non non aenean mattis non ipsum quam, mattis dictumst. Sed mattis quis, elit. Sed mollis \n" +
      "sit in id mauris ex. Orce pulvinar consectetur et. Dictu",
    date: "10 February 2022",
    category: [
      {
        name: "Case study",
        id: 3,
      },
    ],
    littleImg: people.src,
    bigImg: arca.src,
  };

  return (
    <Header>
      <section className="BlogSinglePage">
        <div className="container">
          <Link href="/blog">
            <a className="goBackBtn">
              <LeftArrow />
              <span>Blog main page</span>
            </a>
          </Link>
          <div className="contentWrap">
            <img src={blog.bigImg} alt="blog" />
            <h3>VENENATIS AMET, ORCI, LOREM ET. EGET VITAE DUI EX.</h3>
            <div className="infoWrapper">
              <div className="date">
                <Date />
                <span>{blog.date}</span>
              </div>
              <span className="separator"></span>
              <div className="categoryBtn">
                <span>{blog.category[0].name}</span>
              </div>
              <div className="socLinks">link</div>
            </div>
            <p>{blog.longText}</p>
            <p>{blog.longText}</p>
            <p>{blog.longText}</p>
          </div>
        </div>
      </section>
    </Header>
  );
};

export default BlogSinglePage;
