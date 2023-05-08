import "./Footer.css";
import { SiYourtraveldottv } from "react-icons/si";
import { BsTwitter } from "react-icons/bs";
import { ImFacebook } from "react-icons/im";
import { AiFillInstagram } from "react-icons/ai";

import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="footer">
      <di className="secContainer container grid">
        <div className="logoDiv">
          <div
            className="footerLogo"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <a href="" className="logo flex">
              <h1>
                <SiYourtraveldottv className="icon" />
                Dot
              </h1>
            </a>
          </div>
          <div
            className="socials flex"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <ImFacebook className="icon" />
            <BsTwitter className="icon" />
            <AiFillInstagram className="icon" />
          </div>
        </div>
        <div className="footerLink" data-aos="fade-up" data-aos-duration="3000">
          <span className="linkTitle">Informations</span>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Explor</a>
          </li>
          <li>
            <a href="">Travel</a>
          </li>
          <li>
            <a href="">Blog</a>
          </li>
        </div>
        <div className="footerLink" data-aos="fade-up" data-aos-duration="4000">
          <span className="linkTitle">Helpful Links</span>
          <li>
            <a href="">Destination</a>
          </li>
          <li>
            <a href="">Surport</a>
          </li>
          <li>
            <a href="">Travel & Conditions</a>
          </li>
          <li>
            <a href="">Privacy</a>
          </li>
        </div>
        <div className="footerLink">
          <span className="linkTitle">Contact us</span>
          <span className="phone">+971527497260</span>
          <span className="email">babastanloo@gmail.com</span>
        </div>
      </di>
    </div>
  );
};

export default Footer;
