import "./About.css";
// import images======================>
import img1 from "../../assets/images/customer.png";
import img2 from "../../assets/images/climbing.png";
import img3 from "../../assets/images/mountain2.png";

// import video =========>
import video from "../../assets/images/video (1).mp4";

import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section className="about section">
      <div className="secContainer">
        <h3 className="title">Why Hikings?</h3>

        <div className="mainContent container grid">
          <div
            className="singleItem"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <img src={img3} alt="Image Name" />
            <h3>100+ mountains</h3>
            <p>
              Research shows that a chance to break away from the normal rhythms
              of daily life, reduces stress and improves daily well-being{" "}
            </p>
          </div>
          <div
            className="singleItem"
            data-aos="fade-up"
            data-aos-duration="2500"
          >
            <img src={img2} alt="Image Name" />
            <h3>1000+ Hiking</h3>
            <p>
              Research shows that a chance to break away from the normal rhythms
              of daily life, reduces stress and improves daily well-being{" "}
            </p>
          </div>
          <div
            className="singleItem"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <img src={img1} alt="Image Name" />
            <h3>2000+ customers</h3>
            <p>
              Research shows that a chance to break away from the normal rhythms
              of daily life, reduces stress and improves daily well-being{" "}
            </p>
          </div>
        </div>
        <div className="videoCard container">
          <div className="cardContent grid">
            <div
              className="cardText"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <h1>Wonderful House experience in there!</h1>
              <p>
                The adventure subranking is based of an equally weighted average
                from five different countries
              </p>
            </div>
            <div
              className="cardVideo"
              data-aos="fade-left"
              data-aos-duration="2000"
            >
              <video src={video} autoPlay loop muted type="video/mp4"></video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
