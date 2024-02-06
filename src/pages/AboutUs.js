import React from "react";
import MainIcon from "../logos/MainIcon.jpg";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="responsive-container-block bigContainer">
      <div className="responsive-container-block Container">
        <img className="mainImg" src={MainIcon} alt="Main Icon" />
        <div className="allText aboveText">
          <p className="text-blk headingText">Discover Our Story</p>
          <p className="text-blk subHeadingText">
            Welcome to Health Kshetra, your premier destination for holistic
            health and wellness.
          </p>
          <p className="text-blk description">
            At Health Kshetra, we are dedicated to providing comprehensive
            healthcare solutions that prioritize your wellbeing. Our journey
            began with a vision to empower individuals to take control of their
            health, and today, we continue to uphold that commitment by offering
            a range of services designed to meet your unique needs. From
            advanced medical treatments to personalized wellness programs, we
            strive to inspire, educate, and transform lives through the power of
            health.
          </p>
        </div>
      </div>
      <div className="responsive-container-block Container bottomContainer">
        <img
          className="mainImg"
          src="https://images.livemint.com/rf/Image-621x414/LiveMint/Period2/2016/10/28/Photos/Processed/mudra-k0gC--621x414@LiveMint.jpg"
          alt="Vision Image"
        />
        <div className="allText bottomText">
          <p className="text-blk headingText">Our Vision</p>
          <p className="text-blk subHeadingText">
            Experience a Future of Wellness
          </p>
          <p className="text-blk description">
            Our vision at Health Kshetra is to redefine the future of wellness
            by fostering a culture of proactive healthcare and holistic
            wellbeing. We envision a world where every individual has the
            knowledge, resources, and support they need to lead a healthy and
            fulfilling life. Through innovative practices, compassionate care,
            and community engagement, we are committed to shaping a future where
            wellness is accessible to all.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
