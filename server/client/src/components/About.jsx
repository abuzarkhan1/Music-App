import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import InstagramIcon from "@material-ui/icons/Instagram";
import FaceBookIcon from "@material-ui/icons/Facebook";

import logo from "./Abuzar.jpg"
const About = () => {
  const visitInstagram = () => {
    window.location = "https://instagram.com/abuzar__khan1/";
  };
  return (
      <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Me</Typography>
        <div>
        <div>
          <div>
</div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src={logo}
              alt="Founder"
            />
            <Typography>Abuzarkhan</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>
              This is a sample wesbite made by @Abuzarkhan.
              And I am  Doing Computer Science From University Of Engineering
              And Technology Mardan.
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Follow Me On</Typography>
            <a
              href="https://web.facebook.com/profile.php?id=100012704685656"
              target="blank"
            >
              <FaceBookIcon className="youtubeSvgIcon" />
            </a>

            <a href="https://www.instagram.com/abuzar__khan1/" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;