import styles from "./ConcertsSection.module.sass";

import image1 from "../../public/assets/concerts/concert1.jpg";
import image2 from "../../public/assets/concerts/concert2.jpg";
import image3 from "../../public/assets/concerts/concert3.jpg";

import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import MoreArrow from "../../components/MoreArrow/MoreArrow";
import ArrowRight from "../../components/ArrowRight/ArrowRight";

interface IConcert {
  day: string;
  month: string;
  year: string;
  city: string;
  location: string;
  link: string;
}

const ConcertsSection = () => {
  const concerts: IConcert[] = [
    {
      day: "05",
      month: "03",
      year: "2022",
      city: "Berlin",
      location: "Tchaikovsky Concert",
      link: "#",
    },
    {
      day: "28",
      month: "03",
      year: "2022",
      city: "Saint-Petersburg",
      location: "Oktyabrskiy Big Concert Hall",
      link: "#",
    },
    {
      day: "05",
      month: "03",
      year: "2022",
      city: "Berlin",
      location: "Tchaikovsky Concert Hall",
      link: "#",
    },
    {
      day: "28",
      month: "03",
      year: "2022",
      city: "Saint-Petersburg",
      location: "Oktyabrskiy Big Concert Hall",
      link: "#",
    },
    {
      day: "05",
      month: "03",
      year: "2022",
      city: "Berlin",
      location: "Tchaikovsky Concert Hall",
      link: "#",
    },
    {
      day: "28",
      month: "03",
      year: "2022",
      city: "Saint-Petersburg",
      location: "Oktyabrskiy Big Concert Hall",
      link: "#",
    },
    {
      day: "05",
      month: "03",
      year: "2022",
      city: "Berlin",
      location: "Tchaikovsky Concert Hall",
      link: "#",
    },
    {
      day: "28",
      month: "03",
      year: "2022",
      city: "Saint-Petersburg",
      location: "Oktyabrskiy Big Concert Hall",
      link: "#",
    },
  ];

  const [pagination, setCurrentPagination] = useState<number>(5);
  const [isMoreVisible, setMobVisible] = useState<boolean>(true);

  const concertsAmount = concerts.length;

  const clickMoreAction = () => {
    if (pagination + 3 > concertsAmount) {
      setCurrentPagination(concertsAmount);
      setMobVisible(false);
    } else {
      setCurrentPagination(pagination + 3);
    }
  };

  return (
    <div className={styles.concertsSection}>
      <div className="container">
        <div className={styles.concertsImagesWrapper}>
          <div className={styles.concertsWrapper}>
            {concerts.slice(0, pagination).map((concert, index) => (
              <div key={uuidv4() + index} className={styles.concertElem}>
                <div className={styles.leftSide}>
                  <span className={styles.day}>{concert.day}</span>
                  <span className={styles.dayMonth}>
                    {concert.month} / {concert.year}
                  </span>
                </div>
                <div className={styles.centerSide}>
                  <span className={styles.city}>{concert.city}</span>
                  <span className={styles.location}>{concert.location}</span>
                </div>
                <div className={styles.rightSide}>
                  <a className={styles.buyTiсket} href={concert.link}>
                    <span>Купить билет</span>
                    <ArrowRight />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.imagesWrapper}>
            <img src={image1.src} alt="concert1" />
            <img src={image2.src} alt="concert2" />
            <img src={image3.src} alt="concert3" />
          </div>
        </div>

        {isMoreVisible && (
          <div onClick={clickMoreAction} className="moreWrap">
            <MoreArrow />
            <span>Показать еще</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ConcertsSection;
