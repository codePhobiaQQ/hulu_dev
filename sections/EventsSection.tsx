import Link from "next/link";
import ecom from "../public/assets/img/ecom.jpg";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import { BackUrl } from "../vars";

interface IEvent {
  link: string;
  img: string;
  day: string;
  date: any;
  location: string;
  name: string;
  category: string;
}

const EventsSection = () => {
  const [pageData, setPageData] = useState<IEvent[]>([
    {
      link: "https://huntli.vercel.app/",
      img: ecom.src,
      day: "08",
      date: "03 / 2022",
      category: "Webinar",
      location: "Riga, Latvia",
      name: "Ecom21 Conference",
    },
    {
      link: "https://huntli.vercel.app/",
      img: ecom.src,
      day: "08",
      date: "03 / 2022",
      category: "Webinar",
      location: "St. Petersburg",
      name: "Economic Forum",
    },
    {
      link: "https://huntli.vercel.app/",
      img: ecom.src,
      day: "08",
      date: "03 / 2022",
      category: "Webinar",
      location: "New-York, USA",
      name: "Ecom21 Conference",
    },
  ]);
  useEffect(() => {
    const takeData = async () => {
      const response = await axios.get(BackUrl + "/api/event?populate=image");

      console.log(
        response.data.data.map((el: any) => {
          console.log(el);
          return {
            ...el.attributes,
            date:
              el.attributes.date.split("-")[0] +
              " / " +
              el.attributes.date.split("-")[1],
            day: el.attributes.date.split("-")[2],
            img: BackUrl + el.attributes.image,
          };
        })
      );

      setPageData(
        response.data.data.map((el: any) => {
          return {
            ...el.attributes,
            day: el.attributes.date.split("-")[2],
            date:
              el.attributes.date.split("-")[0].slice(-2) +
              " / " +
              el.attributes.date.split("-")[1],
            img: BackUrl + el.attributes.image.data.attributes.url,
          };
        })
      );
    };
    takeData();
  }, []);
  useEffect(() => {
    console.log(pageData);
  }, [pageData]);

  return (
    <section id="Events" className="EventsSection">
      <div className="container">
        <div className="leftEls">
          <h2>EVENTS</h2>
          <Link href="#">
            <a>All Events</a>
          </Link>
        </div>

        <ul className="events">
          {pageData.map((event, index) => (
            <li key={"event" + event.name + index}>
              <Link href={event.link}>
                <a className="linkWrapper">
                  <div className="leftSide">
                    <div className="data">
                      <span>{event.day}</span>
                      <span>{event.date}</span>
                    </div>
                    <Link href={event.link}>
                      <a className="button">Learn more</a>
                    </Link>
                  </div>
                  <div className="centerSide">
                    <h3>
                      <span>{event.location}</span>
                      <span>{event.name}</span>
                    </h3>
                    <span className="prepis">{event.category}</span>
                  </div>
                  <div className="rightSide">
                    <Image
                      width={235}
                      height={235}
                      src={event.img}
                      alt="ecom"
                    />
                  </div>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default EventsSection;
