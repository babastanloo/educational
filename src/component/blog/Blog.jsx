import "./Blog.css";
import { BsArrowRightShort } from "react-icons/bs";
// imprt image===>
import img from "../../assets/images/image(5).jpg";
import img2 from "../../assets/images/image(2).jpg";
import img3 from "../../assets/images/image(3).jpg";
import img4 from "../../assets/images/image(4).jpg";

import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Blog = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  // we use the map method to rendeer the posts.

  const Posts = [
    {
      ID: 1,
      postImage: img,
      title: "Beautiful Morocco lets travel there",
      desc: "The Kingdom of Morocco is a country in the north Western part of Africa, with coastline with the atlantic ocean and the Mediterranean sea.",
    },
    {
      ID: 2,
      postImage: img2,
      title: "Romantic moment under the Eiffel tower",
      desc: "The Kingdom of Morocco is a country in the north Western part of Africa, with coastline with the atlantic ocean and the Mediterranean sea.",
    },
    {
      ID: 3,
      postImage: img3,
      title: "Tunisia the pride of north Africa",
      desc: "The Kingdom of Morocco is a country in the north Western part of Africa, with coastline with the atlantic ocean and the Mediterranean sea.",
    },
    {
      ID: 4,
      postImage: img4,
      title: "The best country in the east of africa",
      desc: "The Kingdom of Morocco is a country in the north Western part of Africa, with coastline with the atlantic ocean and the Mediterranean sea.",
    },
  ];
  return (
    <section className="blog section container">
      <div className="secContainer">
        <div className="secIntro">
          <h2 className="secTitle" data-aos="fade-up" data-aos-duration="2000">
            Our Best Blog?
          </h2>
          <p data-aos="fade-up" data-aos-duration="2500">
            An insight to the incredible experience in the world!
          </p>
        </div>

        <div className="mainContainer grid">
          {Posts.map(({ ID, postImage, title, desc }) => {
            return (
              <div
                key={ID}
                className="singlePost grid"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <div className="imgDiv">
                  <img src={postImage} alt="Image Name" />
                </div>
                <div className="postDetails">
                  <h3 data-aos="fade-up" data-aos-duration="3000">
                    {title}
                  </h3>
                  <p data-aos="fade-up" data-aos-duration="4000">
                    {desc}
                  </p>
                </div>
                <a
                  href=""
                  className="flex"
                  data-aos="fade-right"
                  data-aos-duration="4500"
                >
                  Read More
                  <BsArrowRightShort />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Blog;
