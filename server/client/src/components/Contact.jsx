import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";
import Header from "./Header";

const Contact = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center bg-primary">
    <Header />
    <div className="contactContainer">
      <a className="mailBtn" href="mailto:abuzarkhan1242@gmail.com">
        <Button>Contact: abuzarkhan@gmail.com</Button>
      </a>
</div>
    </div>
  );
};

export default Contact;