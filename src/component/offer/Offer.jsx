import "./Offer.css";
import { MdKingBed } from "react-icons/md";
import { MdBathtub } from "react-icons/md";
import { FaWifi } from "react-icons/fa";
import { MdAirportShuttle } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { BsArrowRightShort } from "react-icons/bs";
// for the effects
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
// images

import img2 from "../../assets/images/hotels (2).jpg";
import img7 from "../../assets/images/hotels (4).jpg";
import img9 from "../../assets/images/hotels (1).jpg";

const Offer = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  // using high oder arrey methods to display other destinations.
  const Offers = [
    {
      id: 1,
      imgSrc: img2,
      destTitle: "Macho Piccolo",
      location: "Peru",
      price: "$7,320",
    },
    // {
    //   id: 2,
    //   imgSrc: img5,
    //   destTitle: "Guanajuato",
    //   location: "Mexico",
    //   price: "$5,410",
    // },
    {
      id: 3,
      imgSrc: img7,
      destTitle: "Angkor Wat",
      location: "Cambodia",
      price: "$2,016",
    },
    {
      id: 4,
      imgSrc: img9,
      destTitle: "Taj Mahal",
      location: "India",
      price: "$3,824",
    },
  ];
  return (
    <section className="offer section container">
      <div className="setContainer">
        <div className="secIntro" data-aos="fade-up" data-aos-duration="2200">
          <h2 className="secTitle">Special Offers</h2>
          <p>
            Historical cities to natural spectaculars, come see the best of the
            world!
          </p>
        </div>
        <div className="mainContent grid">
          {Offers.map(({ id, imgSrc, destTitle, location, price }) => {
            return (
              <div
                key={id}
                className="singleOffer"
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                <div className="destImage">
                  <img src={imgSrc} alt={destTitle} />
                  <span className="discount">30% Off</span>
                </div>
                <div className="offerBody">
                  <div className="price flex">
                    <h4>{price} </h4>
                    <span className="status">For Rent</span>
                  </div>
                  <div className="amenities flex">
                    <div className="singleAminity flex">
                      <MdKingBed className="icon" />
                      <small>2 Bed</small>
                    </div>
                    <div className="singleAminity flex">
                      <MdBathtub className="icon" />
                      <small>1 Bath</small>
                    </div>
                    <div className="singleAminity flex">
                      <FaWifi className="icon" />
                      <small>Free Wifi</small>
                    </div>
                    <div className="singleAminity flex">
                      <MdAirportShuttle className="icon" />
                      <small>Shuttle</small>
                    </div>
                  </div>
                  <div className="location">
                    <MdLocationOn className="icon" />
                    <small>450 Vine #310, {location} </small>
                  </div>
                  <button className="btn flex">
                    View Details
                    <BsArrowRightShort className="icon" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Offer;
