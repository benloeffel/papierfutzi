import React from "react";
import { Container, styled } from "@material-ui/core";

const StyledFooter = styled("footer")({
  position: "fixed",
  bottom: "0",
  left: "0",
  right: "0",
  backgroundColor: "#d3d3d3",
  textAlign: "center",
  padding: "16px",
  "& span": {
    color: "red",
  },
});

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <small>Built with <span>❤</span> by Ben & Bee</small>
        <small> Version <span>0.2</span></small>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
