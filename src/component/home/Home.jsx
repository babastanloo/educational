import "./Home.css";
import { useEffect } from "react";
import Aos from "aos";

// import Aos =============>

import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section className="home">
      <div className="secContainer container">
        <div className="homeText">
          <h1 className="title" data-aos="fade-up">
            Plan Your Trip with Babastanloo
          </h1>
          <p className="subTitle" data-aos="fade-up" data-aos-duration="2500">
            travel to your favorite city with respect of the environment!
          </p>
          <button className="btn" data-aos="fade-up" data-aos-duration="3000">
            <a href="#">Explore Now</a>
          </button>
        </div>

        <div className="homeCard grid">
          <div
            className="locationDiv"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <label
              htmlFor="location"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              Location
            </label>
            <input type="text" placeholder="Dream Destination" />
          </div>
          <div className="distDiv">
            <label
              htmlFor="distance"
              data-aos="fade-right"
              data-aos-duration="2500"
            >
              Distance
            </label>
            <input type="text" placeholder="11/meters" />
          </div>
          <div className="priceDiv">
            <label
              htmlFor="price"
              data-aos="fade-right"
              data-aos-duration="3000"
            >
              Price
            </label>
            <input type="text" placeholder="$140 -$500" />
          </div>
          <button
            className="btn"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            Search
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
