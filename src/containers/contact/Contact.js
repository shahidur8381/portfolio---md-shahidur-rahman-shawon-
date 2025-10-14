import React, {useContext, useState, useEffect} from "react";
import "./Contact.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import {illustration, contactInfo} from "../../portfolio";
import {Fade} from "react-reveal";
import email from "../../assets/lottie/email";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";
import ContactFormModal from "../../components/contactForm/ContactFormModal";

export default function Contact({variant = "standalone", hideHeading = false}) {
  const {isDark} = useContext(StyleContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [animatedText, setAnimatedText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Auto-writing animation effect
  useEffect(() => {
    if (!contactInfo.animatedTexts || contactInfo.animatedTexts.length === 0) {
      return;
    }

    const currentText = contactInfo.animatedTexts[textIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseBeforeDelete = 2000;

    const timer = setTimeout(
      () => {
        if (!isDeleting && charIndex < currentText.length) {
          setAnimatedText(currentText.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else if (isDeleting && charIndex > 0) {
          setAnimatedText(currentText.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else if (!isDeleting && charIndex === currentText.length) {
          setTimeout(() => setIsDeleting(true), pauseBeforeDelete);
        } else if (isDeleting && charIndex === 0) {
          setIsDeleting(false);
          setTextIndex((textIndex + 1) % contactInfo.animatedTexts.length);
        }
      },
      isDeleting ? typingSpeed : typingSpeed
    );

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, textIndex]);

  const isMerged = variant === "merged";
  const containerClass = isMerged
    ? "main contact-merged-container"
    : "main contact-margin-top";
  const containerId = isMerged ? undefined : "contact";

  const displayTitle =
    contactInfo.animatedTexts && contactInfo.animatedTexts.length > 0
      ? animatedText
      : contactInfo.title;

  const content = (
    <div className={containerClass} id={containerId}>
      <div className="contact-div-main">
        <div className="contact-header">
          {!hideHeading && (
            <h1 className="heading contact-title">
              {displayTitle}
              <span className="typing-cursor">|</span>
            </h1>
          )}
          {!hideHeading && (
            <p
              className={
                isDark
                  ? "dark-mode contact-subtitle"
                  : "subTitle contact-subtitle"
              }
            >
              {contactInfo.subtitle}
            </p>
          )}
          <div
            className={
              isDark ? "dark-mode contact-text-div" : "contact-text-div"
            }
          >
            {contactInfo.number && (
              <>
                <a
                  className="contact-detail"
                  href={"tel:" + contactInfo.number}
                >
                  {contactInfo.number}
                </a>
                <br />
                <br />
              </>
            )}
            <a
              className="contact-detail-email"
              href={"mailto:" + contactInfo.email_address}
            >
              {contactInfo.email_address}
            </a>
            <br />
            <br />
            {contactInfo.telegram && (
              <>
                <a
                  className="contact-detail"
                  href={"https://t.me/" + contactInfo.telegram.replace("@", "")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Telegram: {contactInfo.telegram}
                </a>
                <br />
                <br />
              </>
            )}
            <button className="contact-form-button" onClick={openModal}>
              📧 Contact Me via Form
            </button>
            <br />
            <br />
            <SocialMedia />
          </div>
        </div>
        <div className="contact-image-div">
          {illustration.animated ? (
            <DisplayLottie animationData={email} />
          ) : (
            <img
              alt="Man working"
              src={require("../../assets/images/contactMailDark.svg")}
            ></img>
          )}
        </div>
      </div>
      <ContactFormModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );

  if (isMerged) {
    return content;
  }

  return (
    <Fade bottom duration={1000} distance="20px">
      {content}
    </Fade>
  );
}
