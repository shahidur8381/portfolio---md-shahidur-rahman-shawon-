import React, {useContext, useState} from "react";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import landingPerson from "../../assets/lottie/landingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import ResumePreview from "../../components/resumePreview/ResumePreview";
import {illustration, greeting} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Greeting() {
  const {isDark} = useContext(StyleContext);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <div className="profile-pic-container">
                <img
                  src={require("../../assets/images/shawon.png")}
                  alt="MD Shahidur Rahman"
                  className="profile-pic"
                />
              </div>
              <h1
                className={isDark ? "dark-mode greeting-text" : "greeting-text"}
              >
                {" "}
                {greeting.title}{" "}
                <span className="wave-emoji">{emoji("👋")}</span>
              </h1>
              <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
              >
                {greeting.subTitle}
              </p>
              <div id="resume" className="empty-div"></div>
              <SocialMedia />
              <div className="button-greeting-div">
                <Button text="Contact me" href="#contact" />
                {greeting.resumeLink && (
                  <>
                    <div
                      onClick={() => setIsPreviewOpen(true)}
                      className="download-link-button"
                      style={{cursor: "pointer"}}
                    >
                      <Button text="Download my resume" />
                    </div>
                    <ResumePreview
                      isOpen={isPreviewOpen}
                      onClose={() => setIsPreviewOpen(false)}
                      resumeUrl={greeting.resumeLink.replace(
                        "/view?usp=drive_link",
                        "/preview"
                      )}
                    />
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={landingPerson} />
            ) : (
              <img
                alt="man sitting on table"
                src={require("../../assets/images/manOnTable.svg")}
              ></img>
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
}
