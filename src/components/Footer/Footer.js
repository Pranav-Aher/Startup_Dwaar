import React from "react";
import "./Footer.css";
import {
  FaLocationArrow,
  FaEnvelope,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-container-main bg-primary fg-white">
      <div className="footer-container-sub-main">
        <div className="footer-container-items">
          <div className="footer-container-item">
            <span className="fg-white text-title">Startup</span>
            <span className="fg-font-dark text-title"> Dwaar</span>
          </div>
          <div className="footer-container-item">
            <div
              className="footer-container-item-item"
              style={{ alignSelf: "flex-start" }}
            >
              <div className="footer-container-item-item">
                <FaLocationArrow size={24} className="icons" />
              </div>
            </div>
            <div className=" footer-container-item-item text-md">
              Startup Dwaar Technologies Pvt. Ltd. 5th Floor, IndiQube Penta,
              32, Shanthala Nagar, Richmond Town, Bengaluru, Karnataka 560025
            </div>
          </div>
          <div className="footer-container-item">
            <div className="footer-container-item-item">
              <FaEnvelope size={24} className="icons" />
            </div>
            <div className="footer-container-item-item">
              contact@startupdwaar.com
            </div>
          </div>
        </div>
        <div className="footer-container-items">
          <div className="footer-container-item text-title">Company</div>
          <div className="footer-container-item">About us</div>
          <div className="footer-container-item">Blog</div>
          <div className="footer-container-item">Contact us</div>
        </div>
        <div className="footer-container-items">
          <div className="footer-container-item text-title">Review</div>
          <div className="footer-container-item">Privacy Policv</div>
          <div className="footer-container-item">Risk</div>
          <div className="footer-container-item">Terms of use</div>
          <div className="footer-container-item">Investor</div>
          <div className="footer-container-item">Ethics</div>
          <div className="footer-container-item">FAQs</div>
        </div>
        <div className="footer-container-items">
          <div className="footer-container-item text-title">Browse</div>
          <div className="footer-container-item">
            How can I be an angel investor in India?
          </div>
          <div className="footer-container-item">
            How much monev do you need for angel investing?
          </div>
          <div className="footer-container-item">
            How to find an angel investor for my startup?
          </div>
          <div className="footer-container-item">
            How can NRI's become angel investors?
          </div>
        </div>
      </div>
      <div className="footer-container-sub-main">
        <div className="footer-container-items">
          <div className="footer-container-item text-xl">
            <div className="footer-container-item-item">Follow us on -</div>
            <div className="footer-container-item-item">
              <FaLinkedin size={24} className="icons" />
            </div>
            <div className="footer-container-item-item">
              <FaTwitter size={24} className="icons" />
            </div>
            <div className="footer-container-item-item">
              <FaFacebook size={24} className="icons" />
            </div>
            <div className="footer-container-item-item">
              <FaInstagram size={24} className="icons" />
            </div>
            <div className="footer-container-item-item">
              <FaYoutube size={24} className="icons" />
            </div>
          </div>
        </div>
      </div>
      <div className="footer-container-sub-main">
        <div className="footer-container-items">
          <div className="footer-container-item fg-secondary">
            <div className="footer-container-item-item">
              DISCLAIMER: StartupDwaar Technologies Pt Ltd is NOT a stock
              exchange recognised by the Securities Exchange Board of India
              (SEBI) under the Securities Contract (Regulation) Act, 1956. The
              securities offered by any company registered on letsventure.com
              ("Platform") are not traded on any stock exchange recognised by
              SEBI. LetsVenture does not allow any secondary market trading of
              securities on the Platform.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
