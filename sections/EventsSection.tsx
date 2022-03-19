import Link from "next/link";
import ecom from "../public/assets/img/ecom.jpg";

interface IEvent {
  link: string;
  img: string;
  day: string;
  date: string;
  location: string;
  name: string;
  whatIs: string;
}

const EventsSection = () => {
  const events: IEvent[] = [
    {
      link: "https://huntli.vercel.app/",
      img: ecom.src,
      day: "08",
      date: "03 / 2022",
      whatIs: "Webinar",
      location: "Riga, Latvia",
      name: "Ecom21 Conference",
    },
    {
      link: "https://huntli.vercel.app/",
      img: ecom.src,
      day: "08",
      date: "03 / 2022",
      whatIs: "Webinar",
      location: "Riga, Latvia",
      name: "Ecom21 Conference",
    },
    {
      link: "https://huntli.vercel.app/",
      img: ecom.src,
      day: "08",
      date: "03 / 2022",
      whatIs: "Webinar",
      location: "Riga, Latvia",
      name: "Ecom21 Conference",
    },
  ];

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
          {events.map((event, index) => (
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
                    <span className="prepis">{event.whatIs}</span>
                  </div>
                  <div className="rightSide">
                    <img src={event.img} alt="ecom" />
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
