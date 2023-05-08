import "./Popular.css";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsArrowRightShort } from "react-icons/bs";
import { BsDot } from "react-icons/bs";
// image
import img2 from "../../assets/images/image(5).jpg";
import img5 from "../../assets/images/image(2).jpg";
import img7 from "../../assets/images/image(3).jpg";
import img9 from "../../assets/images/image(4).jpg";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Popular = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  // using high oder arrey methods to display other destinations.
  const Data = [
    {
      id: 1,
      imgSrc: img2,
      destTitle: "Macho Piccolo",
      location: "Peru",
      grade: "CULTURAL RELAX",
    },
    {
      id: 2,
      imgSrc: img5,
      destTitle: "Guanajuato",
      location: "Mexico",
      grade: "CULTURAL RELAX",
    },
    {
      id: 3,
      imgSrc: img7,
      destTitle: "Angkor Wat",
      location: "Cambodia",
      grade: "CULTURAL RELAX",
    },
    {
      id: 4,
      imgSrc: img9,
      destTitle: "Taj Mahal",
      location: "India",
      grade: "CULTURAL RELAX",
    },
  ];

  return (
    <section className="popular section container">
      <div className="secContainer">
        <div className="secHeader flex">
          <div
            className="textDiv"
            data-aos="fade-right"
            data-aos-duration="2500"
          >
            <h1 className="secTitle">Popular Destination</h1>
            <p>
              From Historical cities to natural spectaculars , come see the best
              of the world!
            </p>
          </div>
          <div
            className="iconDiv flex"
            data-aos="fade-left"
            data-aos-duration="2500"
          >
            <AiOutlineArrowLeft className="icon leftIcon" />
            <AiOutlineArrowRight className="icon rightIcon" />
          </div>
        </div>
        <div className="mainContent grid">
          {Data.map(({ id, imgSrc, destTitle, location, grade }) => {
            return (
              <div key={id} className="singleDestination" data-aos="fade-up">
                <div className="destImage">
                  <img src={imgSrc} alt="image title" />
                  <div className="overlayInfo">
                    <h3>{destTitle}</h3>
                    <p>{location}</p>
                    <BsArrowRightShort className="icon" />
                  </div>
                </div>
                <div className="destFooter">
                  <div className="number">0{id}</div>
                  <div className="desText flex">
                    <h6>{location}</h6>
                    <span className="flex">
                      <span className="dot">
                        <BsDot className="icon" />
                      </span>
                      Stanlo
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Popular;
