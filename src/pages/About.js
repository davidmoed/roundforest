import React from "react";
import Container from "react-bootstrap/Container";

import "../styles/secondaryPages.scss";

const About = () => {
  return (
    <Container className="mainCont">
      <h1>ABOUT</h1>
      <h3>
        Online shopping is great - until you realize you've been looking for
        hours and still can't make a decision. At Roundforest, we're passionate
        about making online shopping even better. We give shoppers the tools
        they need to make the right purchases quickly & with confidence.
      </h3>
    </Container>
  );
};

export default About;
