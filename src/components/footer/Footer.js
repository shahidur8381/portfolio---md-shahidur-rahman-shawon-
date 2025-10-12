import React, {useContext} from "react";
import "./Footer.scss";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";
import SocialMedia from "../socialMedia/SocialMedia";
import {contactInfo} from "../../portfolio";

export default function Footer() {
  const {isDark} = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className={isDark ? "footer-div dark-mode" : "footer-div"}>
        <div className="footer-cta">
          <h2 className="footer-title">Ready to build something impactful?</h2>
          <p className="footer-tagline">
            Let’s collaborate on high-performance web applications, data-driven
            products, or your next big idea.
          </p>
          <a className="footer-button" href="#contact">
            {emoji("📨")} Start a Project
          </a>
        </div>

        <div className="footer-info">
          <div className="footer-card">
            <h3 className="footer-heading">Reach me directly</h3>
            <div className="contact-list">
              <a
                href={`mailto:${contactInfo.email_address}`}
                className="contact-item"
              >
                {emoji("📧")} {contactInfo.email_address}
              </a>
              {contactInfo.number && (
                <a href={`tel:${contactInfo.number}`} className="contact-item">
                  {emoji("📱")} {contactInfo.number}
                </a>
              )}
              {contactInfo.telegram && (
                <a
                  href={`https://t.me/${contactInfo.telegram.replace("@", "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-item"
                >
                  {emoji("�")} Telegram: {contactInfo.telegram}
                </a>
              )}
            </div>
          </div>

          <div className="footer-card">
            <h3 className="footer-heading">Let’s stay connected</h3>
            <p className="footer-text">
              Follow my work, open-source projects, and quick tips across the
              web.
            </p>
            <div className="footer-social">
              <SocialMedia />
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-text">
            {emoji(
              "© 2025 MD Shahidur Rahman. Crafted with dedication and lots of ☕"
            )}
          </p>
        </div>
      </div>
    </Fade>
  );
}
