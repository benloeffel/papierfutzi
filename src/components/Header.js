import React from "react";
import { styled, Typography } from "@material-ui/core";

const StyledHeader = styled("header")({
  background: "linear-gradient(to top, #195cb7 0px, #0c3061 100%)",
  padding: "8px",
  textAlign: "center",
  color: "#fff",
  // borderBottom: "5px solid #f9bd3d",
});

const Header = () => {
  return (
    <StyledHeader className='app-header'>
      <Typography variant='p' component='h2'>
        Papierfutzi
      </Typography>
    </StyledHeader>
  );
};

export default Header;
