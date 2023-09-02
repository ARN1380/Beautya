import "./footer.css";
import bunny from "../../assets/icons/bunny.svg";
import leaf from "../../assets/icons/leaf.svg";
import wheat from "../../assets/icons/wheat.svg";
import lamp from "../../assets/icons/lamp.svg";
import location from "../../assets/icons/location.svg";
import call from "../../assets/icons/call.svg";
import instagram from "../../assets/icons/instagram.svg";
import facebook from "../../assets/icons/facebook.svg";
import twitter from "../../assets/icons/twitter.svg";
import pintrest from "../../assets/icons/pintrest.svg";
import reddit from "../../assets/icons/reddit.svg";
import tiktok from "../../assets/icons/tiktok.svg";
import copyright from "../../assets/icons/copyright.svg";

import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("Email Address");
  const emailHandler = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
    console.log(email);
  };
  return (
    <footer>
      <div className="footer-img">
        <div className="firstfooter">
          <div className="firstfooter-container">
            <div>
              <img src={bunny} alt="" />
              <p>No tests on animals</p>
            </div>
            <div>
              <img src={leaf} alt="" />
              <p>No animal-derived ingredients</p>
            </div>
            <div>
              <img src={wheat} alt="" />
              <p>No gluten, or gluten byproducts</p>
            </div>
            <div>
              <img src={lamp} alt="" />
              <p>Recyclable packaging</p>
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="footer-first">
            <h4>how we can help?</h4>
            <nav>
              <ul>
                <li>beautya branches</li>
                <li>contact us</li>
                <li>FAQ</li>
                <li>our brand</li>
                <li>blog</li>
              </ul>
            </nav>
          </div>
          <div className="footer-sec">
            <h4>products</h4>
            <ul>
              <li>women make up</li>
              <li>women skincare</li>
              <li>gifts & sets</li>
            </ul>
          </div>
          <div className="footer-thr">
            <h4>keepin touch with beautya</h4>
            <p>
              Join the Beautya newsletter and be first to hear about news,
              offers and skincare advice
            </p>
            <div className="email-form">
              <input type="email" value={email} onChange={emailHandler} />
              <button className="button-primary">Subscribe</button>
            </div>
          </div>
        </div>

        <div className="secfooter">
          <div className="secfooter-container">
            <div className="secfooter-info">
              <div className="secfooter-info__doctor">
                <img src={location} alt="" />
                <p>Dr. Richardson, California</p>
              </div>
              <div className="vertical-footerline"></div>
              <div className="secfooter-info__phone">
                <img src={call} alt="" />
                <p>1-802-526-2463</p>
              </div>
            </div>

            <div className="secfooter-social">
              <img src={instagram} alt="instagram" />
              <img src={facebook} alt="facebook" />
              <img src={twitter} alt="twitter" />
              <img src={pintrest} alt="pintrest" />
              <img src={reddit} alt="reddit" />
              <img src={tiktok} alt="tiktok" />
            </div>
          </div>
        </div>
        <div className="copyright-footer">
          <div className="copyright-footer__container">
            <div className="copyright-text">
              <img src={copyright} alt="" />
              <p>2023 Beautya react by Alireza Naghavi. All Rights Reserved.</p>
            </div>
            <div className="copyright-legal">
              <p>Terms & Conditions</p>
              <p>Privacy Policy</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
